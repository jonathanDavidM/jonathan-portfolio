import { useState, useCallback, useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Mail, Github, Linkedin, Send, Check, Sparkles, MessageSquare } from "lucide-react";
import { SECTIONS, SOCIAL_LINKS } from "@/constants";

const socialLinks = [
  { icon: Github, label: "GitHub", href: SOCIAL_LINKS.GITHUB },
  { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN },
];

export default function Contact() {
  const { formData, isSubmitting, submitStatus, handleChange, handleSubmit, resetForm } =
    useContactForm();
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.EMAIL);
      setEmailCopied(true);
    } catch {
      setEmailCopied(false);
    }
  }, []);

  useEffect(() => {
    if (!emailCopied) return;
    const t = setTimeout(() => setEmailCopied(false), 2000);
    return () => clearTimeout(t);
  }, [emailCopied]);

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
          {submitStatus.type === "success" ? (
            <div className="relative space-y-8 text-center" role="alert" aria-live="polite">
              {/* Sparkle particles */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <Sparkles className="absolute left-[15%] top-[10%] size-4 text-primary/60 animate-sparkle" style={{ animationDelay: "0.1s" }} />
                <Sparkles className="absolute right-[18%] top-[5%] size-3 text-primary/40 animate-sparkle" style={{ animationDelay: "0.3s" }} />
                <Sparkles className="absolute left-[25%] top-[25%] size-3 text-primary/50 animate-sparkle" style={{ animationDelay: "0.5s" }} />
                <Sparkles className="absolute right-[25%] top-[20%] size-4 text-primary/60 animate-sparkle" style={{ animationDelay: "0.2s" }} />
                <Sparkles className="absolute left-[10%] top-[18%] size-3 text-primary/30 animate-sparkle" style={{ animationDelay: "0.7s" }} />
                <Sparkles className="absolute right-[12%] top-[15%] size-3 text-primary/50 animate-sparkle" style={{ animationDelay: "0.4s" }} />
              </div>

              {/* Glowing background card */}
              <div className="relative rounded-2xl border border-border bg-card p-10 shadow-2xl">
                {/* Glow effect behind card */}
                <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-primary/10 blur-sm animate-success-glow" />

                {/* Animated check circle */}
                <div className="mx-auto mb-6 flex size-20 items-center justify-center animate-success-scale-in">
                  <div className="relative flex size-20 items-center justify-center rounded-full bg-primary/10 animate-success-ring-pulse">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
                    <svg className="relative size-10" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                        style={{
                          strokeDasharray: 50,
                          strokeDashoffset: 0,
                          animation: "success-check-draw 0.6s ease-out 0.3s both",
                        }}
                      />
                    </svg>
                  </div>
                </div>

                {/* Text content */}
                <h3 className="mb-2 text-2xl font-bold text-foreground animate-success-text-in">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground animate-success-text-in-delay">
                  {submitStatus.message}
                </p>
              </div>

              {/* Send another button */}
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full gap-2 border-border bg-card transition-all duration-300 hover:border-primary/50 hover:bg-primary/5 animate-success-btn-in"
                onClick={resetForm}
              >
                <MessageSquare className="size-4" />
                Send Another Message
              </Button>
            </div>
          ) : (
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

              {submitStatus.type === "error" && (
                <div
                  className="rounded-lg bg-red-50 p-3 text-center text-sm font-medium text-red-700 ring-1 ring-red-200"
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
          )}

          <div className="relative mt-12 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              type="button"
              onClick={copyEmail}
              aria-label="Copy email"
            >
              <Mail className="size-5" />
            </Button>
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                nativeButton={false}
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

            {emailCopied && (
              <div
                className="absolute -top-12 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg animate-in fade-in zoom-in-95 duration-200"
                role="status"
                aria-live="polite"
              >
                <Check className="size-4 shrink-0" />
                Email copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
