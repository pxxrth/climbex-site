// Hero video — color-graded to match Midnight Chrome.
export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Video layer */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-window-cleaner.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        style={{
          // Match the Midnight Chrome palette: cool cyan cast, deeper contrast
          filter:
            "brightness(0.7) contrast(1.15) saturate(0.75) hue-rotate(180deg)",
        }}
      />

      {/* Cyan tint wash to lock the palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.16 0.024 260 / 0.45) 0%, oklch(0.18 0.05 240 / 0.35) 40%, oklch(0.16 0.024 260 / 0.85) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.5 0.18 230 / 0.18), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Ambient glow accents */}
      <div className="absolute -top-32 -right-24 size-[55vw] max-w-[800px] rounded-full bg-gradient-primary opacity-20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 size-[45vw] max-w-[650px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Left-side darkening for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent pointer-events-none" />
    </div>
  );
}
