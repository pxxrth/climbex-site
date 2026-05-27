// Lightweight, GPU-friendly hero visual.
// Pure CSS + SVG — no Three.js, no WebGL. Renders instantly.
export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute -top-32 -right-24 size-[60vw] max-w-[900px] rounded-full bg-gradient-primary opacity-25 blur-3xl" />
      <div className="absolute bottom-0 -left-24 size-[50vw] max-w-[700px] rounded-full bg-primary/15 blur-3xl" />

      {/* Skyscraper grid */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%]">
        <div className="relative h-full w-full">
          {/* Tower silhouette */}
          <div className="absolute bottom-0 right-[8%] h-[88%] w-[42%] rounded-t-[14px] bg-[linear-gradient(180deg,rgba(56,189,248,0.18),rgba(15,23,42,0.85))] border border-white/10 shadow-elevated overflow-hidden">
            <WindowGrid cols={6} rows={18} />
            <ShineSweep />
          </div>
          {/* Back tower */}
          <div className="absolute bottom-0 right-[48%] h-[72%] w-[30%] rounded-t-[10px] bg-[linear-gradient(180deg,rgba(14,165,233,0.12),rgba(11,15,26,0.9))] border border-white/5 overflow-hidden">
            <WindowGrid cols={4} rows={14} dim />
          </div>
          {/* Front slim tower */}
          <div className="absolute bottom-0 right-[2%] h-[58%] w-[18%] rounded-t-[8px] bg-[linear-gradient(180deg,rgba(56,189,248,0.10),rgba(11,15,26,0.95))] border border-white/5 overflow-hidden">
            <WindowGrid cols={3} rows={10} dim />
          </div>

          {/* Floating squeegee */}
          <div className="absolute top-[18%] right-[22%] animate-float">
            <svg width="120" height="120" viewBox="0 0 120 120" className="drop-shadow-[0_8px_24px_rgba(56,189,248,0.45)]">
              <defs>
                <linearGradient id="sq" x1="0" x2="1">
                  <stop offset="0" stopColor="#7dd3fc" />
                  <stop offset="1" stopColor="#0ea5e9" />
                </linearGradient>
              </defs>
              <rect x="20" y="58" width="80" height="6" rx="3" fill="url(#sq)" />
              <rect x="22" y="64" width="76" height="3" rx="1.5" fill="#0ea5e9" opacity="0.6" />
              <rect x="56" y="20" width="8" height="40" rx="3" fill="#1e293b" stroke="#38bdf8" strokeOpacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle scanline / grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

function WindowGrid({ cols, rows, dim = false }: { cols: number; rows: number; dim?: boolean }) {
  const cells = Array.from({ length: cols * rows });
  return (
    <div
      className="absolute inset-2 grid gap-[3px]"
      style={{ gridTemplateColumns: `repeat(${cols}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}
    >
      {cells.map((_, i) => {
        // Deterministic pseudo-random "lit" pattern
        const lit = (i * 53) % 11 < (dim ? 2 : 4);
        const bright = (i * 17) % 23 === 0;
        return (
          <div
            key={i}
            className="rounded-[1px]"
            style={{
              background: lit
                ? bright
                  ? "linear-gradient(180deg,#bae6fd,#38bdf8)"
                  : "rgba(125,211,252,0.45)"
                : "rgba(255,255,255,0.04)",
              boxShadow: lit && bright ? "0 0 8px rgba(56,189,248,0.8)" : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

function ShineSweep() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "linear-gradient(115deg, transparent 35%, rgba(186,230,253,0.35) 48%, rgba(255,255,255,0.55) 50%, rgba(186,230,253,0.35) 52%, transparent 65%)",
        backgroundSize: "300% 100%",
        animation: "shineSweep 6s ease-in-out infinite",
        mixBlendMode: "screen",
      }}
    />
  );
}
