import { Button } from "@/components/ui/button";
import { Download, Sparkles } from "lucide-react";
import { SECTIONS } from "@/constants";
import heroBanner from "@/assets/hero-banner.jpg";

function Hero() {
  return (
    <section
      id={SECTIONS.HOME}
      className="relative flex min-h-screen flex-col items-end justify-center overflow-hidden px-6 text-right text-white"
    >
      <div
        className="animate-hero-bg-zoom absolute inset-0 origin-center bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url(${heroBanner})` }}
        aria-hidden
      />
      <div className="absolute inset-0 animate-in fade-in duration-1000 bg-black/60" />
      <div className="relative max-w-3xl">
        <p className="mb-4 animate-in fade-in slide-in-from-bottom-6 fill-mode-both text-sm font-medium uppercase tracking-widest text-white/70 duration-700 delay-100">
          Welcome to my portfolio
        </p>
        <h1 className="mb-4 animate-in fade-in slide-in-from-bottom-6 fill-mode-both text-5xl font-bold tracking-tight duration-700 delay-200 sm:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="animate-hero-name bg-linear-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
            Jonathan
          </span>
        </h1>
        <h2 className="mb-4 animate-in fade-in slide-in-from-bottom-6 fill-mode-both text-2xl font-medium text-white/90 duration-700 delay-300 sm:text-3xl">
          Full Stack Developer
        </h2>
        <p className="ml-auto mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-6 fill-mode-both text-lg text-white/70 duration-700 delay-500">
          I build fast, accessible, and beautifully crafted web applications —
          from polished UIs to reliable APIs — with modern technologies and
          clean code.
        </p>
        <div className="flex flex-wrap items-center justify-end gap-4 animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-700">
          <Button
            size="lg"
            className="h-11 rounded-full bg-white px-8 text-primary transition-transform hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
            onClick={() =>
              document
                .getElementById(SECTIONS.PROJECTS)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm transition-transform hover:scale-[1.02] hover:bg-white/20 hover:text-white active:scale-[0.98]"
            onClick={() =>
              document
                .getElementById(SECTIONS.CONTACT)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            size="lg"
            className="h-11 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm transition-transform hover:scale-[1.02] hover:bg-white/20 hover:text-white active:scale-[0.98]"
            render={
              <a
                href="https://drive.google.com/file/d/1dQoqGTQii_BkCOAh5bbmIOYKSNL5OFQa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <Download className="size-4" />
            Download CV
          </Button>
        </div>

        <div className="mt-8 flex justify-end animate-in fade-in slide-in-from-bottom-6 fill-mode-both duration-700 delay-1000">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            <Sparkles className="size-3.5 text-amber-300" />
            <span>Chat with my AI agent — bottom right corner</span>
          </div>
        </div>
      </div>

      {/* <button
        onClick={() =>
          document
            .getElementById(SECTIONS.ABOUT)
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 flex animate-bounce flex-col items-center gap-2 text-sm text-white/60 transition-colors hover:text-white/90"
      >
        <span>Scroll Down</span>
        <ArrowDown className="size-5" />
      </button> */}
    </section>
  );
}

export default Hero;
