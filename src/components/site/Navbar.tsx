import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-5">
        <div className="glass rounded-full flex items-center justify-between pl-5 pr-2 py-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="size-8 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
              <Sparkles className="size-4 text-primary-foreground" />
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
