import PracticeCard from "./PracticeCard";

const areas = [
  { 
    title: 'NRI Legal Services', 
    desc: 'Dedicated legal support for the global Malayali diaspora regarding property, family, and investment matters in Kerala.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
      </svg>
    )
  },
  { 
    title: 'High Court Litigation', 
    desc: 'Expert representation in the High Court of Kerala for writ petitions, appeals, and complex civil matters.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
      </svg>
    )
  },
  { 
    title: 'Maritime & Port Law', 
    desc: 'Specialized legal guidance for maritime disputes, shipping, and logistics at the Kochi Port and beyond.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/><circle cx="12" cy="5" r="3"/>
      </svg>
    )
  },
  { 
    title: 'Property & Land Law', 
    desc: 'Resolving complex land disputes, inheritance issues, and real estate transactions across Kerala.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  { 
    title: 'Corporate & Business', 
    desc: 'Facilitating business growth in Kerala through regulatory compliance, contract law, and dispute resolution.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    )
  },
  { 
    title: 'Family & Matrimonial', 
    desc: 'Sensitive and effective legal solutions for family matters, divorce, and custody disputes in local courts.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    )
  },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="py-32 max-w-7xl mx-auto px-8 bg-black">
      <div className="mb-20">
        <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-4 block">Our Expertise</span>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Specialized Legal Services</h2>
        <div className="w-16 h-0.5 bg-accent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, i) => (
          <PracticeCard key={i} title={area.title} desc={area.desc} icon={area.icon} />
        ))}
      </div>
    </section>
  );
}
