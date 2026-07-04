import { useState, useCallback, useEffect } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Check, ArrowUpRight } from "lucide-react";
import { SECTIONS, SOCIAL_LINKS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";

const directLinks = [
  { icon: Github, label: "GitHub", value: "@jonathanDavidM", href: SOCIAL_LINKS.GITHUB },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Jonathan Magno",
    href: SOCIAL_LINKS.LINKEDIN,
  },
];

const fieldLabel =
  "mb-1.5 block font-mono text-caption uppercase text-muted-foreground";

export default function Contact() {
  const {
    formData,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();
  const { ref, isVisible } = useScrollAnimation();
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
    <section id={SECTIONS.CONTACT} className="scroll-mt-24 py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="05"
          kicker="Contact"
          title="Let's build something"
          lead="I'm open to full-stack roles, freelance projects, and interesting collaborations. Drop me a message and I'll get back to you."
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        />

        <div
          className={`mt-12 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 ${
            isVisible ? "animate-fade-in-up-delay" : "opacity-0"
          }`}
        >
          {/* Direct contact methods */}
          <div>
            <button
              type="button"
              onClick={copyEmail}
              className="group flex w-full items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex items-center gap-3">
                <Mail className="size-4 text-muted-foreground" />
                <span className="min-w-0">
                  <span className="block font-mono text-caption uppercase text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate text-body text-foreground">
                    {SOCIAL_LINKS.EMAIL}
                  </span>
                </span>
              </span>
              <span className="shrink-0 font-mono text-caption text-muted-foreground">
                {emailCopied ? (
                  <span className="flex items-center gap-1 text-primary">
                    <Check className="size-3.5" /> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </span>
            </button>

            <div className="mt-3 flex flex-col gap-3">
              {directLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                >
                  <span className="flex items-center gap-3">
                    <link.icon className="size-4 text-muted-foreground" />
                    <span>
                      <span className="block font-mono text-caption uppercase text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="block text-body text-foreground">
                        {link.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Form / success */}
          <div className="card-elevated p-6 sm:p-8">
            {submitStatus.type === "success" ? (
              <div
                className="flex flex-col items-start justify-center py-4"
                role="alert"
                aria-live="polite"
              >
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                      style={{
                        strokeDasharray: 30,
                        strokeDashoffset: 30,
                        animation: "success-check-draw 0.5s ease-out 0.1s both",
                      }}
                    />
                  </svg>
                </div>
                <h3 className="mt-5 text-title font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 text-body text-muted-foreground">
                  {submitStatus.message}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-6"
                  onClick={resetForm}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={fieldLabel}>
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={fieldLabel}>
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className={fieldLabel}>
                    Subject <span className="normal-case">(optional)</span>
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={fieldLabel}>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about your project or role…"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus.type === "error" && (
                  <div
                    className="rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-caption text-destructive"
                    role="alert"
                    aria-live="polite"
                  >
                    {submitStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="h-11 w-full text-body"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
