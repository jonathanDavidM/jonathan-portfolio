export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}
