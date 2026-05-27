const steps = [
  { n: "01", title: "Free quote", desc: "Send photos or address. Most quotes returned the same day with a fixed price." },
  { n: "02", title: "Site walk & plan", desc: "We assess access, anchor points and risk. PPE, rigging and SOPs locked in." },
  { n: "03", title: "Clean to spec", desc: "Pure water, soft squeegees, microfiber detail. Every pane signed off." },
  { n: "04", title: "Walk-through", desc: "We don't leave until you do a final pass with us. Streak-free or we re-do it." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-40 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">// 02 — Process</p>
        <h2 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl leading-[1.05] mb-20">
          A method that holds up at <span className="text-gradient">40 stories</span>.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden">
          {steps.map((s, i) => (
            <div key={s.n} className="bg-background p-8 md:p-10 relative">
              <div className="flex items-baseline gap-3 mb-8">
                <span className="font-display text-5xl font-semibold text-gradient">{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden lg:block h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent ml-2" />
                )}
              </div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
