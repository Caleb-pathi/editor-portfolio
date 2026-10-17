import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";
import { FeaturedWork } from "./components/FeaturedWork";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { Experience } from "./components/Experience";

export default function App() {
  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <a
        href="#work"
        className="type-meta sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[110] focus:border focus:border-acid focus:bg-ink focus:px-4 focus:py-3 focus:text-bone"
      >
        Skip to content
      </a>

      <NoiseOverlay />
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <FeaturedWork />
        <Skills />
        <Services />
        <Experience />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
