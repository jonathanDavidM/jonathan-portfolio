import { Router } from "express";
import { submitContact } from "../controllers/contact.controller.js";
import nodemailer from "nodemailer";

const router = Router();

router.post("/submit", submitContact);

// Test email endpoint
router.get("/test-email", async (req, res) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.json({
        success: false,
        message: "Email not configured in .env file",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify connection
    await transporter.verify();

    res.json({
      success: true,
      message: "Email configuration is correct!",
    });
  } catch (error: any) {
    res.json({
      success: false,
      message: error.message,
      code: error.code,
    });
  }
});

export default router;
