import { Separator } from "@/components/ui/separator";
import { SECTIONS } from "@/constants";

const skills = [
  { name: "React", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "JavaScript", level: 90 },
  { name: "HTML/CSS", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "Git", level: 85 },
];

function Skills() {
  return (
    <section id={SECTIONS.SKILLS} className="bg-muted/50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
            My Expertise
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Skills & Technologies
          </h2>
          <Separator className="mx-auto mb-12 w-12 bg-primary" />
        </div>

        <div className="mx-auto grid max-w-3xl gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border bg-card p-5 transition-all hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm font-semibold text-primary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-blue-800 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
