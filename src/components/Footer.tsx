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
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-caption text-muted-foreground">
          © {new Date().getFullYear()} Jonathan Magno
        </p>

        <div className="flex items-center gap-1">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              nativeButton={false}
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground"
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
            className="text-muted-foreground hover:text-foreground"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="size-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
