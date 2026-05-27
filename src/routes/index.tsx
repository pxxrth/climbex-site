import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Climbex Services — Premium Window Cleaning in the GTA" },
      { name: "description", content: "High-rise, commercial and residential window cleaning across the Greater Toronto Area. Insured, IRATA-certified, streak-free guaranteed." },
      { property: "og:title", content: "Climbex Services — Premium Window Cleaning in the GTA" },
      { property: "og:description", content: "High-rise, commercial and residential window cleaning across the Greater Toronto Area." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
