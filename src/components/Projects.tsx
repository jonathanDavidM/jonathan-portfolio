import { useRef, useState, useCallback, useEffect } from "react";
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
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
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
    title: "Personal Portfolio Website",
    description:
      "A personal portfolio website built with React, TypeScript, and Tailwind CSS. It offers a clean design, responsive layout, and smooth user experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Shadcn UI", "Vercel"],
    github: "https://github.com/jonathanDavidM/jonathan-portfolio",
    live: "https://jonathan-portfolio.vercel.app",
  },
  {
    title: "AI Chat Widget",
    description:
      "An embeddable AI chat widget powered by Groq (Llama 3.3 70B). Built as a personal assistant that answers visitor questions using a custom knowledge base and uploaded documents.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Express",
      "Groq AI",
    ],
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

const VISIBLE_CARDS = 3;

function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(0, projects.length - VISIBLE_CARDS);
  const canScrollLeft = currentIndex > 0;
  const canScrollRight = currentIndex < maxIndex;

  const scrollTo = useCallback(
    (direction: "left" | "right") => {
      setCurrentIndex((prev) =>
        direction === "left"
          ? Math.max(0, prev - 1)
          : Math.min(maxIndex, prev + 1)
      );
    },
    [maxIndex]
  );

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.children[0] as HTMLElement | undefined;
    if (!card) return;
    const gap = 24; // gap-6 = 1.5rem = 24px
    const offset = currentIndex * (card.offsetWidth + gap);
    trackRef.current.style.transform = `translateX(-${offset}px)`;
  }, [currentIndex]);

  return (
    <section id={SECTIONS.PROJECTS} className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            My Work
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className="relative">
          {/* Left arrow */}
          {canScrollLeft && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute -left-12 top-1/2 z-10 -translate-y-1/2 rounded-full border-border bg-card shadow-lg transition-all hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollTo("left")}
              aria-label="Previous project"
            >
              <ChevronLeft className="size-5" />
            </Button>
          )}

          {/* Right arrow */}
          {canScrollRight && (
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="absolute -right-12 top-1/2 z-10 -translate-y-1/2 rounded-full border-border bg-card shadow-lg transition-all hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollTo("right")}
              aria-label="Next project"
            >
              <ChevronRight className="size-5" />
            </Button>
          )}

          {/* Carousel track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-6 transition-transform duration-500 ease-in-out"
            >
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className={`group flex min-w-0 shrink-0 flex-col transition-all hover:-translate-y-1 hover:shadow-lg ${isVisible ? "" : "opacity-0"}`}
                  style={{
                    width: `calc((100% - ${(VISIBLE_CARDS - 1) * 24}px) / ${VISIBLE_CARDS})`,
                    ...(isVisible
                      ? {
                          animation: `fade-in-up 0.5s ease-out ${0.2 + index * 0.15}s both`,
                        }
                      : undefined),
                  }}
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

          {/* Dot indicators */}
          {projects.length > VISIBLE_CARDS && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: maxIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex
                      ? "w-6 bg-primary"
                      : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
