import { Building2, Home, Droplets, Wind, Hammer, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential",
    desc: "Houses, condos, and low-rise. Interior + exterior, screens, tracks and sills.",
    tag: "Most booked",
  },
  {
    icon: Building2,
    title: "Commercial & high-rise",
    desc: "Office towers, retail and storefronts. Rope access, swing stages, lift work.",
    tag: "Insured",
  },
  {
    icon: Droplets,
    title: "Eavestrough cleaning",
    desc: "Clear gutters, downspouts and prevent ice damming through the GTA winter.",
  },
  {
    icon: Wind,
    title: "Pressure washing",
    desc: "Siding, brick, decks, driveways. Surface-safe pressures and detergents.",
  },
  {
    icon: Hammer,
    title: "Post-construction",
    desc: "Stucco splatter, paint, silicone and mineral deposit removal — restored to spec.",
  },
  {
    icon: Sparkles,
    title: "Solar panel cleaning",
    desc: "Deionized water, soft-bristle systems. Restore production, protect the warranty.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">// 01 — Services</p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold max-w-2xl leading-[1.05]">
              Every surface,<br /> every height.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One crew, one standard. Whether it's a downtown tower or a Forest Hill bungalow,
            we treat the work — and the property — with the same care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden shadow-elevated">
          {services.map(({ icon: Icon, title, desc, tag }) => (
            <div
              key={title}
              className="group relative bg-card p-8 md:p-10 hover:bg-surface-elevated transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-10">
                <div className="size-12 rounded-2xl glass grid place-items-center group-hover:shadow-glow transition">
                  <Icon className="size-5 text-primary" />
                </div>
                {tag && (
                  <span className="text-[10px] uppercase tracking-widest text-primary border border-primary/40 rounded-full px-2 py-1">
                    {tag}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
