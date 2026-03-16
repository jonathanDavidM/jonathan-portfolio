import { Request, Response } from 'express';
import { ContactResponse } from '../types/contact.types.js';
import { contactFormSchema } from '../utils/validation.js';
import { EmailService } from '../services/email.service.js';
import { logger } from '../utils/logger.js';

const emailService = new EmailService();

export const submitContact = async (
  req: Request<{}, ContactResponse>,
  res: Response<ContactResponse>
): Promise<void> => {
  try {
    // Validate input
    const validationResult = contactFormSchema.safeParse(req.body);

    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((err: { message: string }) => err.message)
        .join(', ');
      logger.warn('Validation failed', { errors, body: req.body });

      res.status(400).json({
        success: false,
        message: `Validation error: ${errors}`,
      });
      return;
    }

    const formData = validationResult.data;
    logger.info('Contact form submission received', {
      email: formData.email,
      name: formData.name,
    });

    // Attempt to send email
    let emailSent = false;
    let emailError: string | null = null;

    try {
      const isVerified = await emailService.verifyConnection();

      if (!isVerified) {
        emailError = 'Email service connection verification failed';
        logger.warn(emailError);
      } else {
        const messageId = await emailService.sendContactEmail(formData);
        logger.info('Email sent successfully', { messageId });
        emailSent = true;
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const errorCode = (error as any)?.code;

      emailError = errorMessage;

      logger.error('Email sending failed', {
        error: errorMessage,
        code: errorCode,
        fullError: error,
      });

      // Log specific Gmail error codes
      if (errorCode === 'EAUTH') {
        logger.error('Gmail authentication failed. Please check:', {
          tip1: 'Use Gmail App Password, not your regular password',
          tip2: 'Get App Password at: https://myaccount.google.com/apppasswords',
          tip3: 'Make sure 2-Step Verification is enabled',
        });
      } else if (errorCode === 'ECONNECTION') {
        logger.error('Email connection error - check internet connection');
      }
    }

    // Log submission regardless of email status
    logger.info('Contact submission processed', {
      email: formData.email,
      emailSent,
      emailError: emailError || undefined,
    });

    res.status(200).json({
      success: true,
      message: emailSent
        ? 'Thank you for your message! I will get back to you soon.'
        : 'Thank you for your message! I have received it and will get back to you soon.',
    });
  } catch (error: unknown) {
    logger.error('Unexpected error in contact controller', { error });
    res.status(500).json({
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    });
  }
};
