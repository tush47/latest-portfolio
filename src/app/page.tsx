import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Blog } from "@/components/Blog";
import { ContactForm } from "@/components/ContactForm";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="page-shell">
      <AnimatedBackground />
      <div className="page-content">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Blog />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
