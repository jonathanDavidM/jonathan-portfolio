import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS, SECTIONS } from "@/constants";

const socialLinks = [
  { icon: Github, label: "GitHub", href: SOCIAL_LINKS.GITHUB },
  { icon: Linkedin, label: "LinkedIn", href: SOCIAL_LINKS.LINKEDIN },
  { icon: Mail, label: "Email", href: `mailto:${SOCIAL_LINKS.EMAIL}` },
];

function Footer() {
  const scrollToTop = () => {
    document
      .getElementById(SECTIONS.HOME)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t bg-card py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jonathan Magno. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                nativeButton={false}
                variant="ghost"
                size="icon"
                className="size-9 rounded-full text-muted-foreground hover:text-primary"
                render={
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={link.label}
                  />
                }
              >
                <link.icon className="size-4" />
              </Button>
            ))}
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="size-9 rounded-full text-muted-foreground hover:text-primary"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="size-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
