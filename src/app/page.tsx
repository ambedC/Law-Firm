import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Credibility from "@/components/Credibility";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Credibility/>
      <PracticeAreas />
      <Contact />
    </main>
  );
}
