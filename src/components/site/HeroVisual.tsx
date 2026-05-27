// Full-bleed hero video — brighter, lively, tinted to Midnight Chrome.
export default function HeroVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero-window-cleaner.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          // Keep the painter visible — only mild grade
          filter: "brightness(0.95) contrast(1.08) saturate(0.9)",
        }}
      />

      {/* Cyan wash — subtle, preserves detail */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.25 0.08 235 / 0.25) 0%, oklch(0.20 0.06 240 / 0.18) 50%, oklch(0.16 0.024 260 / 0.55) 100%)",
          mixBlendMode: "multiply",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.6 0.18 230 / 0.12), transparent 65%)",
          mixBlendMode: "screen",
        }}
      />

      {/* Left-side darkening for legible copy (like the reference) */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent pointer-events-none" />
      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </div>
  );
}
