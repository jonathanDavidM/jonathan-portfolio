import {
  Code2,
  Server,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

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
    description: "Polished, responsive, accessible interfaces.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    icon: Server,
    title: "Backend",
    description: "Reliable APIs and server-side logic.",
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
    description: "Persistence and modern AI capabilities.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Prisma",
      "Claude",
      "OpenAI",
      "Groq",
      "LLM Integration",
      "Prompt Engineering",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    description: "Shipping faster with the right setup.",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Vercel",
      "ESLint",
      "Prettier",
      "Cursor",
      "GitHub Copilot",
    ],
  },
];

function Skills() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.SKILLS} className="scroll-mt-24 py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="03"
          kicker="Skills"
          title="Technologies I work with"
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`card-elevated card-hover p-6 ${isVisible ? "" : "opacity-0"}`}
              style={
                isVisible
                  ? {
                      animation: `fade-in-up 0.5s ease-out ${
                        0.15 + index * 0.1
                      }s both`,
                    }
                  : undefined
              }
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent-2/10 text-primary ring-1 ring-primary/20">
                  <category.icon className="size-5" />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-caption text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechTag key={skill}>{skill}</TechTag>
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
