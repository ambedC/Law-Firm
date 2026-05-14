import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Credibility from "@/components/Credibility";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Credibility/>
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
