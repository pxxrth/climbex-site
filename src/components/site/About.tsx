const stats = [
  { v: "12+", l: "Years climbing" },
  { v: "2,400", l: "Properties cleaned" },
  { v: "40", l: "Stories, max height" },
  { v: "4.9★", l: "Google rating" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">// 03 — About</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-8">
            Built in Toronto.<br /> Trained for the climb.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Climbex started as a two-person rope-access team in Scarborough. Today we run crews
            across the GTA — from Mississauga condos to King Street towers — with the same idea
            we started with: do the job like the building is your own.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every technician is WSIB-covered, working-at-heights certified, and trained on IRATA
            rope access protocols. We bring our own water, our own power, and a clean truck.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border rounded-3xl overflow-hidden shadow-elevated">
          {stats.map((s) => (
            <div key={s.l} className="bg-card p-8 md:p-12 aspect-square flex flex-col justify-between">
              <span className="font-display text-5xl md:text-6xl font-semibold text-gradient">{s.v}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
