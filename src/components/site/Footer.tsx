import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-gradient-primary grid place-items-center shadow-glow">
            <Sparkles className="size-4 text-primary-foreground" />
          </div>
          <span className="font-display font-semibold">Climbex Services</span>
          <span className="text-muted-foreground text-sm ml-3">© {new Date().getFullYear()}</span>
        </div>
        <p className="text-xs text-muted-foreground">
          Window cleaning · GTA, Ontario · Insured & WSIB-covered
        </p>
      </div>
    </footer>
  );
}
