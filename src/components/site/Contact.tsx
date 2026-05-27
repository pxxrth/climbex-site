import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 md:py-40 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-16">
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.22em] text-primary mb-4">// 04 — Get in touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] mb-8">
            Ready for <span className="text-gradient">clear glass?</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md">
            Quotes returned within 24 hours. Bookings usually within the week — sooner for commercial jobs.
          </p>

          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-4">
              <span className="size-10 rounded-full glass grid place-items-center"><Phone className="size-4 text-primary" /></span>
              <a href="tel:+14160000000" className="hover:text-primary transition">(416) 000-0000</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="size-10 rounded-full glass grid place-items-center"><Mail className="size-4 text-primary" /></span>
              <a href="mailto:hello@climbex.ca" className="hover:text-primary transition">hello@climbex.ca</a>
            </li>
            <li className="flex items-center gap-4">
              <span className="size-10 rounded-full glass grid place-items-center"><MapPin className="size-4 text-primary" /></span>
              <span className="text-muted-foreground">Toronto · Mississauga · Vaughan · Markham · Oakville</span>
            </li>
          </ul>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 shadow-elevated"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Name" name="name" placeholder="Alex Chen" />
            <Field label="Phone" name="phone" placeholder="(416) 555-0143" />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" className="sm:col-span-2" />
            <Field label="Property address" name="address" placeholder="123 Bay St, Toronto" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Service</label>
              <select
                name="service"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option>Residential window cleaning</option>
                <option>Commercial / high-rise</option>
                <option>Eavestrough cleaning</option>
                <option>Pressure washing</option>
                <option>Post-construction</option>
                <option>Solar panel cleaning</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">Details</label>
              <textarea
                name="notes"
                rows={4}
                placeholder="Number of windows, floors, access notes…"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-8 group inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground font-medium px-6 py-3.5 shadow-glow hover:shadow-elevated transition"
          >
            {sent ? "Got it — we'll be in touch" : "Request my quote"}
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, className = "" }: { label: string; name: string; type?: string; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-input/40 border border-border rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
