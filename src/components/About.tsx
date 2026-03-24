import { Separator } from "@/components/ui/separator";
import { Code, Lightbulb, Users, Bot } from "lucide-react";
import { SECTIONS } from "@/constants";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code is my priority.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex problems into simple, elegant solutions.",
  },
  {
    icon: Bot,
    title: "AI-Powered",
    description:
      "Leveraging Claude, Cursor, ChatGPT, and Copilot to deliver faster and smarter.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively and sharing knowledge with others.",
  },
];

function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id={SECTIONS.ABOUT} className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className={`mx-auto max-w-2xl text-center ${isVisible ? "animate-fade-in-up-delay" : "opacity-0"}`}>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            I'm a passionate web developer with a love for creating interactive
            and user-friendly applications. I enjoy turning complex problems
            into simple, beautiful, and intuitive solutions.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            I also leverage AI tools professionally to boost productivity and
            code quality — including Claude, Cursor, ChatGPT, GitHub Copilot,
            and more. Integrating AI into my workflow allows me to ship faster
            while maintaining high standards.
          </p>
        </div>

        <div className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ${isVisible ? "animate-fade-in-up-delay" : "opacity-0"}`}>
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-xl border bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-lg"
              style={isVisible ? { animation: `fade-in-up 0.5s ease-out ${0.3 + index * 0.15}s both` } : undefined}
            >
              <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <item.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
