import Image from "next/image";
import Reveal from "./Reveal";

const attorneys = [
  {
    name: "Adv. Madhavan Menon",
    role: "Founder & Managing Partner",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
    specialty: "High Court Litigation"
  },
  {
    name: "Adv. Lakshmi Nair",
    role: "Senior Associate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop",
    specialty: "NRI Legal Services"
  },
  {
    name: "Adv. Kurian Jacob",
    role: "Lead Counsel",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    specialty: "Maritime & Port Law"
  }
];

const qualifications = [
  "Bar Council of Kerala",
  "High Court of Kerala Bar Association",
  "Maritime Law Specialist Certification",
  "Recognized for NRI Legal Excellence"
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-20">
          <Reveal>
            <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-4 block">Kerala's Best Legal Partners</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-3xl">
              Legacy of Legal Integrity in Kerala
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Reveal delay={100}>
              <p className="text-white/60 text-lg leading-relaxed">
                Based in the heart of Kochi, Menon & Associates has been a steadfast pillar of the Kerala legal community since 1994. We specialize in navigating the unique legal landscape of the state, from High Court proceedings to complex maritime disputes at the Kochi Port, and providing dedicated support for the global Malayali diaspora.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap gap-4">
                {qualifications.map((q, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-white/40 text-xs font-semibold">
                    {q}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Mission & Approach */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <Reveal delay={100} direction="up" className="h-full">
            <div className="glass-card p-10 group hover:bg-accent/5 transition-all h-full">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Commitment</h3>
              <p className="text-white/50 leading-relaxed">
                To provide uncompromised legal representation through deep rooted expertise in Kerala's statutes and a commitment to achieving justice for our local and NRI clients.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200} direction="up" className="h-full">
            <div className="glass-card p-10 group hover:bg-accent/5 transition-all h-full">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Regional Expertise</h3>
              <p className="text-white/50 leading-relaxed">
                We leverage our extensive experience in the High Court of Kerala and various district courts to provide nuanced legal strategies for our clients.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Attorney Profiles */}
        <div>
          <Reveal>
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-2 block">Our Advocates</span>
                <h2 className="text-4xl font-bold text-white">Seasoned Legal Minds</h2>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {attorneys.map((lawyer, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl mb-6">
                    <Image 
                      src={lawyer.image} 
                      alt={lawyer.name} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6">
                      <span className="bg-accent text-black text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm mb-2 block w-fit">
                        {lawyer.specialty}
                      </span>
                      <h4 className="text-xl font-bold text-white">{lawyer.name}</h4>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-white/40 text-sm">{lawyer.role}</p>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:bg-white group-hover:text-black transition-all">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
