import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Github } from "lucide-react";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "AI Chat Widget",
    description:
      "An embeddable AI chat widget powered by Groq (Llama 3.3 70B). Built as a personal assistant that answers visitor questions using a custom knowledge base and uploaded documents.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Express", "Groq AI"],
    github: "https://github.com/jonathanDavidM/my-chat-bot",
    live: "https://my-chat-bot-alpha-nine.vercel.app",
  },
  {
    title: "Team A x Watch Mods Cavite - Ecommerce App",
    description:
      "An online shop featuring Team A footwear and Watch Mods Cavite’s custom MOD watches. Built as a full-featured eCommerce platform, it offers a clean design, responsive layout, and smooth user shopping flow.",
    technologies: [
      "Nextjs",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide",
      "Google Sheets",
    ],
    github: "https://github.com/jonathanDavidM/ams-shop",
    // live: "https://example.com",
  },
  {
    title: "Wedding Template Invitation",
    description:
      "A digital wedding invitation template that transforms traditional invites into an elegant online experience with RSVP functionality and a mobile-friendly layout.",
    technologies: [
      "Nextjs",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
    ],
    github: "https://github.com/jonathanDavidM/invitation-website-templates",
    // live: "https://example.com",
  },
];

function Projects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.PROJECTS} className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            My Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group flex h-full flex-col transition-all hover:-translate-y-1 hover:shadow-lg ${isVisible ? "" : "opacity-0"}`}
              style={isVisible ? { animation: `fade-in-up 0.5s ease-out ${0.2 + index * 0.15}s both` } : undefined}
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="flex-1" />
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto gap-2">
                {project.github && (
                  <Button
                    nativeButton={false}
                    variant="ghost"
                    size="sm"
                    render={
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Github className="size-4" />
                    Code
                  </Button>
                )}
                {project.live && (
                  <Button
                    nativeButton={false}
                    variant="ghost"
                    size="sm"
                    render={
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <ExternalLink className="size-4" />
                    Demo
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
