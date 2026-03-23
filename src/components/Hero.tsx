import { Button } from "@/components/ui/button";
import { SECTIONS } from "@/constants";
import heroBanner from "@/assets/hero-banner.jpg";

function Hero() {
  return (
    <section
      id={SECTIONS.HOME}
      className="relative flex min-h-screen flex-col items-end justify-center bg-cover bg-center bg-no-repeat px-6 text-right text-white"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-white/70">
          Welcome to my portfolio
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text text-transparent">
            Jonathan
          </span>
        </h1>
        <h2 className="mb-4 text-2xl font-medium text-white/90 sm:text-3xl">
          Web Developer
        </h2>
        <p className="ml-auto mb-8 max-w-xl text-lg text-white/70">
          I create beautiful and functional web experiences with modern
          technologies and clean code.
        </p>
        <div className="flex flex-wrap items-center justify-end gap-4">
          <Button
            size="lg"
            className="h-11 rounded-full bg-white px-8 text-primary hover:bg-white/90"
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
            className="h-11 rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            onClick={() =>
              document
                .getElementById(SECTIONS.CONTACT)
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get In Touch
          </Button>
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
