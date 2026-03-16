import nodemailer, { Transporter } from 'nodemailer';
import { ContactFormInput } from '../utils/validation.js';
import { logger } from '../utils/logger.js';

export class EmailService {
  private transporter: Transporter | null = null;

  constructor() {
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      logger.info('Email transporter created', {
        email: process.env.EMAIL_USER,
        hasPassword: !!process.env.EMAIL_PASS,
      });
    } else {
      logger.warn('Email service not configured - EMAIL_USER or EMAIL_PASS missing');
    }
  }

  async verifyConnection(): Promise<boolean> {
    if (!this.transporter) {
      logger.warn('Cannot verify connection - transporter not initialized');
      return false;
    }

    try {
      await this.transporter.verify();
      logger.info('Email connection verified successfully');
      return true;
    } catch (error: unknown) {
      logger.error('Email connection verification failed', {
        error: error instanceof Error ? error.message : String(error),
        code: (error as any)?.code,
        command: (error as any)?.command,
      });
      return false;
    }
  }

  async sendContactEmail(data: ContactFormInput): Promise<string> {
    if (!this.transporter) {
      throw new Error('Email service not configured');
    }

    logger.info('Attempting to send email', {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      replyTo: data.email,
      subject: data.subject || `Portfolio Contact: ${data.name}`,
    });

    try {
      const info = await this.transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER!,
        replyTo: data.email,
        subject: data.subject || `Portfolio Contact: ${data.name}`,
        html: this.generateEmailTemplate(data),
      });

      logger.info('Email sent successfully', {
        messageId: info.messageId,
        response: info.response,
        accepted: info.accepted,
        rejected: info.rejected,
      });

      return info.messageId;
    } catch (error: unknown) {
      const errorDetails = {
        message: error instanceof Error ? error.message : String(error),
        code: (error as any)?.code,
        command: (error as any)?.command,
        response: (error as any)?.response,
        responseCode: (error as any)?.responseCode,
        stack: error instanceof Error ? error.stack : undefined,
      };

      logger.error('Failed to send email', errorDetails);
      throw error;
    }
  }

  // ... rest of the methods remain the same ...
  private generateEmailTemplate(data: ContactFormInput): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 5px 5px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Name:</span> ${this.escapeHtml(data.name)}
              </div>
              <div class="field">
                <span class="label">Email:</span> ${this.escapeHtml(data.email)}
              </div>
              ${
                data.subject
                  ? `<div class="field"><span class="label">Subject:</span> ${this.escapeHtml(
                      data.subject
                    )}</div>`
                  : ''
              }
              <div class="field">
                <span class="label">Message:</span>
                <p>${this.formatMessage(data.message)}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;
  }

  private escapeHtml(text: string): string {
    const map: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
  }

  private formatMessage(message: string): string {
    return this.escapeHtml(message).replace(/\n/g, '<br>');
  }
}
