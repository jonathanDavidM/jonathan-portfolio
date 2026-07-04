import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";
import TechTag from "./TechTag";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  highlights: string[];
  stack?: string[];
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
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      ".NET",
      "Azure DevOps",
      "Power Platform",
    ],
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
    <section id={SECTIONS.EXPERIENCE} className="scroll-mt-24 py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="02"
          kicker="Experience"
          title="A path from IT support to full-stack"
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        />

        <ol className="mt-12 border-l border-border">
          {experiences.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className={`relative pb-12 pl-8 last:pb-0 sm:pl-10 ${
                isVisible ? "" : "opacity-0"
              }`}
              style={
                isVisible
                  ? {
                      animation: `fade-in-up 0.5s ease-out ${
                        0.15 + index * 0.12
                      }s both`,
                    }
                  : undefined
              }
            >
              {/* Timeline node */}
              <span
                aria-hidden
                className={`absolute -left-[7px] top-2 size-3.5 rounded-full ring-4 ring-background ${
                  item.current
                    ? "bg-primary shadow-lg shadow-primary/50"
                    : "bg-border"
                }`}
              />

              <div className="card-elevated card-hover p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-body font-semibold text-foreground">
                    {item.role}
                    <span className="text-muted-foreground">
                      {" "}
                      · {item.company}
                    </span>
                  </h3>
                  <p className="flex items-center gap-2 font-mono text-caption text-muted-foreground">
                    {item.current && (
                      <span className="text-primary">● Current</span>
                    )}
                    <span>{item.period}</span>
                  </p>
                </div>

                <ul className="mt-4 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 text-body text-muted-foreground before:absolute before:left-0 before:top-[0.7rem] before:h-px before:w-2.5 before:bg-primary/50"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                {item.stack && item.stack.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <TechTag key={tech}>{tech}</TechTag>
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
