import {
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface SkillCategory {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Building polished, responsive, and accessible interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Shadcn UI",
      "Framer Motion",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Designing reliable APIs and server-side logic.",
    skills: [
      "Node.js",
      "Express",
      "Python",
      "FastAPI",
      "REST APIs",
      "Nodemailer",
      "Zod",
      "Vercel Functions",
    ],
  },
  {
    icon: Database,
    title: "Data & AI",
    description: "Persisting data and integrating modern AI capabilities.",
    skills: ["MongoDB", "PostgreSQL", "Google Sheets API", "Groq AI", "LLM Integration"],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    description: "Shipping faster with the right tools and AI assistants.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "ESLint",
      "Prettier",
      "Claude",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.SKILLS} className="bg-muted/50 py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            My Expertise
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group rounded-xl border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg ${isVisible ? "" : "opacity-0"}`}
              style={
                isVisible
                  ? {
                      animation: `fade-in-up 0.5s ease-out ${0.2 + index * 0.1}s both`,
                    }
                  : undefined
              }
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <category.icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-xs font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
