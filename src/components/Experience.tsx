import { Briefcase, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
  icon?: LucideIcon;
}

const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "mySMB.com Pty. Ltd.",
    period: "2025 — Present",
    current: true,
    highlights: [
      "Develop and maintain scalable full stack features for an AI-powered chatbot platform using React, TypeScript, Node.js, and REST APIs.",
      "Build responsive, user-friendly interfaces while integrating backend services, WebSocket communication, and real-time chatbot interactions.",
      "Collaborate with backend engineers and AI/ML teams to implement personalized conversation flows, context management, and API-driven features.",
      "Design and optimize API integrations, application performance, accessibility, and cross-platform responsiveness.",
      "Contribute to deployment workflows, debugging, and overall application stability in agile development environments.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "WebSocket",
      "Tailwind CSS",
    ],
  },
  {
    role: "Application Developer Analyst",
    company: "Accenture Inc.",
    period: "2021 — 2025",
    highlights: [
      "Collaborated with stakeholders to translate business requirements into technical specifications.",
      "Built and tested application functionality to ensure a polished user experience across platforms.",
      "Designed creative prototypes aligned with product specifications.",
      "Troubleshot and debugged applications; maintained technical documentation including system architecture diagrams, API specs, and user manuals.",
    ],
    stack: ["JavaScript", "TypeScript", "React", ".NET", "Azure DevOps", "Power Platform"],
  },
  {
    role: "IT Assistant",
    company: "DoubleDragon Properties Corp.",
    period: "2017 — 2021",
    highlights: [
      "Provided technical support to end-users for hardware, software, and network-related issues.",
      "Installed, configured, and troubleshot desktops, laptops, printers, and other peripherals.",
      "Assisted with setup and maintenance of network equipment including routers, switches, and firewalls.",
    ],
    stack: ["Windows", "Networking", "Hardware Support"],
  },
];

function Experience() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.EXPERIENCE} className="py-24">
      <div ref={ref} className="mx-auto max-w-4xl px-6">
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            Career Journey
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <ol className="relative ml-3 border-l-2 border-border sm:ml-6">
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className={`relative mb-12 pl-8 last:mb-0 sm:pl-12 ${isVisible ? "" : "opacity-0"}`}
              style={
                isVisible
                  ? {
                      animation: `fade-in-up 0.5s ease-out ${0.2 + index * 0.15}s both`,
                    }
                  : undefined
              }
            >
              {/* Timeline marker */}
              <span
                className={`absolute -left-[13px] flex size-6 items-center justify-center rounded-full ring-4 ring-background sm:-left-[15px] sm:size-7 ${
                  item.current
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
                aria-hidden
              >
                <Briefcase className="size-3 sm:size-3.5" />
              </span>

              <div className="group rounded-xl border bg-card p-6 transition-all hover:border-primary/20 hover:shadow-lg">
                <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-primary">
                      {item.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.current && (
                      <Badge className="bg-primary/15 text-primary hover:bg-primary/20">
                        Current
                      </Badge>
                    )}
                    <time className="text-sm font-medium text-muted-foreground">
                      {item.period}
                    </time>
                  </div>
                </div>

                <ul className="mb-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55rem] before:size-1.5 before:rounded-full before:bg-primary/60"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.stack && item.stack.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-2.5 py-0.5 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
