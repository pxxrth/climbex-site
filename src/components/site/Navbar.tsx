import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass rounded-full flex items-center justify-between pl-3 pr-2 py-2">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-10 rounded-full bg-background/60 grid place-items-center ring-1 ring-primary/30 shadow-glow overflow-hidden">
              <img
                src="/climbex-logo.png"
                alt="Climbex Services"
                className="size-12 object-cover scale-[2.2] translate-y-[-2px]"
                style={{ objectPosition: "center 32%" }}
              />
            </div>
            <span className="font-display font-semibold tracking-tight text-base">
              Climbex<span className="text-primary">.</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#process" className="hover:text-foreground transition">Process</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-gradient-primary text-primary-foreground text-sm font-medium px-5 py-2.5 shadow-glow hover:shadow-elevated transition-all"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
