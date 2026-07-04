import { Button } from "@/components/ui/button";
import { Sun, Moon, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SECTIONS } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { id: SECTIONS.HOME, label: "Home" },
  { id: SECTIONS.ABOUT, label: "About" },
  { id: SECTIONS.EXPERIENCE, label: "Experience" },
  { id: SECTIONS.SKILLS, label: "Skills" },
  { id: SECTIONS.PROJECTS, label: "Projects" },
];

function Header({ activeSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToSection(SECTIONS.HOME)}
          className="rounded-sm font-display text-body font-semibold tracking-tight text-foreground"
          aria-label="Jonathan Magno — back to top"
        >
          Jonathan Magno<span className="text-primary">.</span>
        </button>

        <ul className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-current={activeSection === item.id ? "true" : undefined}
                className={cn(
                  "font-mono text-caption underline-offset-8 transition-colors",
                  activeSection === item.id
                    ? "font-semibold text-primary underline decoration-primary decoration-2"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button size="sm" onClick={() => scrollToSection(SECTIONS.CONTACT)}>
            <Mail className="size-4" />
            Get in touch
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="size-5" />
            ) : (
              <Moon className="size-5" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
