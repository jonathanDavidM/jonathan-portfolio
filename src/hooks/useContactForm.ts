import { useState, useCallback } from "react";
import { apiClient } from "@/lib/api/client";
import { API_ENDPOINTS } from "@/constants";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UseContactFormReturn {
  formData: ContactFormData;
  isSubmitting: boolean;
  submitStatus: {
    type: "success" | "error" | null;
    message: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setSubmitStatus({ type: null, message: "" });
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: "" });

      try {
        const response = await apiClient.post(API_ENDPOINTS.CONTACT, formData);

        if (response.success) {
          setSubmitStatus({
            type: "success",
            message: response.message,
          });
          setFormData(initialFormData);
        } else {
          setSubmitStatus({
            type: "error",
            message: response.message || "Failed to send message.",
          });
        }
      } catch (error) {
        const errorMessage =
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again later.";

        setSubmitStatus({
          type: "error",
          message: errorMessage,
        });
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, resetForm]
  );

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
  };
}
