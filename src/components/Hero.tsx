import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { SECTIONS } from "@/constants";
import portrait from "@/assets/jonathan.webp";

const CV_URL =
  "https://drive.google.com/file/d/1dQoqGTQii_BkCOAh5bbmIOYKSNL5OFQa/view?usp=sharing";

const stats = [
  { value: "8+", label: "Years in tech" },
  { value: "3", label: "Companies" },
  { value: "5+", label: "Projects shipped" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Hero() {
  return (
    <section
      id={SECTIONS.HOME}
      className="relative flex min-h-svh items-center overflow-hidden px-6 pb-12 pt-28"
    >
      {/* Atmosphere: faint dot texture + accent glow blooms */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid text-foreground/[0.04]"
        style={{
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute -right-20 top-1/4 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
      />
      <div
        aria-hidden
        className="glow-accent pointer-events-none absolute -left-32 -top-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-5xl lg:grid lg:grid-cols-[1.05fr_0.8fr] lg:items-center lg:gap-8">
        {/* Text */}
        <div>
          <p className="inline-flex animate-fade-in-up items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-caption uppercase text-muted-foreground backdrop-blur-sm">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </p>

          <h1 className="mt-6 animate-fade-in-up font-display text-display font-semibold text-foreground">
            Jonathan Magno
          </h1>

          <p className="mt-5 max-w-xl animate-fade-in-up-delay font-display text-title font-normal text-foreground">
            Full-stack developer building fast, reliable web apps — from the
            interface to the API.
          </p>

          <p className="mt-5 max-w-lg animate-fade-in-up-delay text-body text-muted-foreground">
            I craft polished frontends and dependable backends, and I lean on an
            AI-assisted, agent-driven workflow to ship faster without cutting
            corners.
          </p>

          <div className="mt-9 flex animate-fade-in-up-delay flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="h-11 px-6 text-body shadow-md shadow-primary/20"
              onClick={() => scrollTo(SECTIONS.PROJECTS)}
            >
              View work
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6 text-body"
              onClick={() => scrollTo(SECTIONS.CONTACT)}
            >
              Get in touch
            </Button>
            <Button
              nativeButton={false}
              variant="ghost"
              size="lg"
              className="h-11 px-4 text-body text-muted-foreground hover:text-foreground"
              render={
                <a href={CV_URL} target="_blank" rel="noopener noreferrer" />
              }
            >
              Download CV
              <ArrowUpRight className="size-4" />
            </Button>
          </div>

          {/* Stat row */}
          <dl className="mt-10 flex max-w-md animate-fade-in-up-delay divide-x divide-border">
            {stats.map((stat) => (
              <div key={stat.label} className="flex-1 pr-4 first:pl-0 [&:not(:first-child)]:pl-4">
                <dt className="font-display text-title font-semibold text-foreground">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-mono text-caption text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Portrait */}
        <div className="relative mt-14 flex items-end justify-center lg:mt-0 lg:h-[80svh]">
          <img
            src={portrait}
            alt="Jonathan Magno"
            width={1024}
            height={1536}
            className="relative z-10 max-h-[60svh] w-auto max-w-full object-contain object-bottom drop-shadow-2xl lg:max-h-[78svh]"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
