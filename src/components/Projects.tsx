import { ArrowUpRight, Github } from "lucide-react";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Personal Portfolio Website",
    description:
      "This site — a personal portfolio built with React, TypeScript, and Tailwind CSS. A premium slate palette with a blue-to-violet accent, layered surfaces, soft depth, and a Space Grotesk display font.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel"],
    github: "https://github.com/jonathanDavidM/jonathan-portfolio",
    live: "https://jonathan-portfolio-gamma.vercel.app/",
  },
  {
    title: "WTG — Order Management System",
    description:
      "A full-stack internal platform for managing customer orders, computing per-order profit from items and expenses, and issuing Acknowledgement Receipt PDFs. Session-based staff auth and a business dashboard.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Auth.js",
      "Zod",
      "React PDF",
    ],
    github: "https://github.com/jonathanDavidM/wtg-app",
    live: "https://wtg-app.vercel.app/", // internal app — behind staff login
  },
  {
    title: "AI Agent Chat Widget",
    description:
      "An embeddable AI agent powered by Groq (Llama 3.3 70B) with function-calling tools. It fetches my live GitHub activity, returns structured project details, and can email me directly from the conversation. Try it in the corner of this page.",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "Groq AI",
      "Function Calling",
      "Resend",
      "SSE Streaming",
    ],
    github: "https://github.com/jonathanDavidM/my-chat-bot",
    live: "https://my-chat-bot-alpha-nine.vercel.app",
  },
  {
    title: "Team A × Watch Mods Cavite",
    description:
      "A full-featured eCommerce storefront for Team A footwear and Watch Mods Cavite's custom MOD watches — clean design, responsive layout, and a smooth shopping flow.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google Sheets",
    ],
    github: "https://github.com/jonathanDavidM/ams-shop",
  },
  {
    title: "Wedding Invitation Template",
    description:
      "A digital wedding invitation that turns a traditional invite into an elegant online experience, with RSVP functionality and a mobile-friendly layout.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/jonathanDavidM/invitation-website-templates",
  },
];

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex items-center gap-5 border-t border-border pt-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm font-mono text-caption text-primary transition-opacity hover:opacity-70"
        >
          <Github className="size-3.5" />
          Code
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm font-mono text-caption text-primary transition-opacity hover:opacity-70"
        >
          Live demo
          <ArrowUpRight className="size-3.5" />
        </a>
      )}
    </div>
  );
}

function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.PROJECTS} className="scroll-mt-24 py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="04"
          kicker="Projects"
          title="Selected work"
          lead="A few things I've designed and built recently — from AI products to full-stack business apps."
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`card-elevated card-hover flex h-full flex-col p-6 ${
                isVisible ? "" : "opacity-0"
              }`}
              style={
                isVisible
                  ? {
                      animation: `fade-in-up 0.5s ease-out ${
                        0.15 + index * 0.08
                      }s both`,
                    }
                  : undefined
              }
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-body font-semibold text-foreground">
                  {project.title}
                </h3>
                <span
                  aria-hidden
                  className="text-gradient font-mono text-caption font-semibold"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-3 flex-1 text-caption leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </div>

              <ProjectLinks project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
