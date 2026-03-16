import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { SECTIONS, SOCIAL_LINKS } from "@/constants";

const socialLinks = [
  { icon: Mail, label: "Email", href: SOCIAL_LINKS.EMAIL },
  { icon: Github, label: "GitHub", href: SOCIAL_LINKS.GITHUB },
  { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN },
];

export default function Contact() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit } =
    useContactForm();

  return (
    <section id={SECTIONS.CONTACT} className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Contact
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get In Touch
          </h2>
          <Separator className="mx-auto mb-6 w-12 bg-primary" />
          <p className="mx-auto mb-12 max-w-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <form
            className="space-y-4"
            onSubmit={handleSubmit}
            noValidate
          >
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your name"
              />
            </div>
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your email"
              />
            </div>
            <div>
              <Input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                aria-label="Subject"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                aria-label="Your message"
              />
            </div>

            {submitStatus.type && (
              <div
                className={`rounded-lg p-3 text-center text-sm font-medium ${
                  submitStatus.type === "success"
                    ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                    : "bg-red-50 text-red-700 ring-1 ring-red-200"
                }`}
                role="alert"
                aria-live="polite"
              >
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="size-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>

          <div className="mt-12 flex items-center justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                render={
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  />
                }
              >
                <link.icon className="size-5" />
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
