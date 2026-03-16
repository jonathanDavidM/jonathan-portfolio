import { Separator } from "@/components/ui/separator";
import { Code, Lightbulb, Users, Bot } from "lucide-react";
import { SECTIONS } from "@/constants";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, well-structured code is my priority.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Turning complex problems into simple, elegant solutions.",
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
    description:
      "Collaborating effectively and sharing knowledge with others.",
  },
];

function About() {
  return (
    <section id={SECTIONS.ABOUT} className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            About Me
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get to know me
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            I'm a passionate web developer with a love for creating interactive
            and user-friendly applications. I enjoy turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            I also leverage AI tools professionally to boost productivity and
            code quality — including Claude, Cursor, ChatGPT, GitHub Copilot,
            and more. Integrating AI into my workflow allows me to ship faster
            while maintaining high standards.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border bg-card p-6 text-center transition-all hover:border-primary/20 hover:shadow-lg"
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
