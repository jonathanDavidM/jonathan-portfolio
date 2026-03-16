import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  subject: z.string().max(200).optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
