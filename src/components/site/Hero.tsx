import { ArrowUpRight, MapPin } from "lucide-react";
import { ClientOnly } from "./ClientOnly";
import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <ClientOnly
          fallback={
            <div className="absolute inset-0 grid place-items-center">
              <div className="size-72 rounded-full bg-gradient-primary blur-3xl opacity-30 animate-float" />
            </div>
          }
        >
          <HeroScene />
        </ClientOnly>
      </div>

      {/* Noise + vignette */}
      <div className="absolute inset-0 noise opacity-[0.06] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />

      {/* Copy */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 md:pt-48 md:pb-32 pointer-events-none">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground pointer-events-auto">
            <MapPin className="size-3.5 text-primary" />
            Serving the Greater Toronto Area
          </div>
          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-semibold text-gradient">
            Crystal-clear views,<br />
            from the ground up.
          </h1>
          <p className="mt-7 max-w-xl text-base md:text-lg text-muted-foreground">
            Climbex Services is a premium window cleaning crew based in the GTA — engineered for
            high-rise, low-rise and everything in between. Insured, certified, obsessive about finish.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-medium px-6 py-3.5 shadow-glow hover:shadow-elevated transition"
            >
              Book a free quote
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-surface-elevated transition"
            >
              Our services
            </a>
          </div>
        </div>
      </div>

      {/* Marquee badges */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-border bg-background/40 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> Fully insured · WSIB</div>
          <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> IRATA rope access</div>
          <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> Streak-free guarantee</div>
          <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" /> 4.9★ on Google</div>
        </div>
      </div>
    </section>
  );
}
