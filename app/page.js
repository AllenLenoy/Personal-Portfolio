import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Training from "@/components/Training";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top" className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Training />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
