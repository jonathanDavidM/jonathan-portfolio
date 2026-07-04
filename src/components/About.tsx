import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "./SectionHeader";

const facts = [
  { label: "Currently", value: "Full-stack dev, mySMB.com" },
  { label: "Experience", value: "8+ years in tech" },
  { label: "Focus", value: "React · TypeScript · Node.js" },
  { label: "Workflow", value: "AI-assisted · agentic" },
  { label: "Based in", value: "Philippines · remote-friendly" },
];

function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.ABOUT} className="scroll-mt-24 py-24">
      <div ref={ref} className="mx-auto max-w-5xl px-6">
        <SectionHeader
          index="01"
          kicker="About"
          title="A developer who cares about the whole product"
          className={isVisible ? "animate-fade-in-up" : "opacity-0"}
        />

        <div
          className={`mt-12 grid gap-12 lg:grid-cols-[1.7fr_1fr] lg:gap-16 ${
            isVisible ? "animate-fade-in-up-delay" : "opacity-0"
          }`}
        >
          <div className="space-y-5 text-body text-muted-foreground">
            <p>
              I'm a full-stack developer who likes owning a feature from end to
              end — designing a clean, accessible interface on the frontend and
              backing it with dependable, well-structured APIs. I care most
              about the details that make software feel considered: sensible
              states, honest error handling, and layouts that hold up on every
              screen.
            </p>
            <p>
              Lately I've been building AI-powered products — from an embeddable
              chat agent with function-calling tools to internal apps that
              handle real business data. I work in an AI-assisted, agent-driven
              way — "vibe coding" with Claude Code, Cursor, and Copilot to move
              fast — while staying opinionated about the code that actually
              ships.
            </p>
            <p>
              Before focusing on the web I spent years across enterprise
              development and IT support, which taught me to work with
              stakeholders, ship on deadlines, and keep systems running in
              production.
            </p>
          </div>

          <dl className="card-elevated divide-y divide-border p-6">
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex flex-col gap-1 ${i === 0 ? "pb-4" : "py-4"} last:pb-0`}
              >
                <dt className="font-mono text-caption uppercase text-muted-foreground">
                  {fact.label}
                </dt>
                <dd className="text-body text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
