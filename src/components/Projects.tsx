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

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Project 1",
    description:
      "A modern web application built with React and TypeScript featuring responsive design and seamless user experience.",
    technologies: ["React", "TypeScript", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 2",
    description:
      "An interactive dashboard with real-time data visualization, providing actionable insights through elegant charts.",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Project 3",
    description:
      "A responsive e-commerce platform with payment integration, cart management, and a smooth checkout flow.",
    technologies: ["React", "Stripe", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

function Projects() {
  return (
    <section id={SECTIONS.PROJECTS} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
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
              className="group transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                {project.github && (
                  <Button
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
