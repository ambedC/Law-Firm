"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Exceptional clarity and aggressive representation during our complex corporate merger. Their expertise in the regulatory landscape is unmatched.",
    author: "Ravi Krishnan",
    role: "CEO, TechPark Solutions"
  },
  {
    quote: "Living in the UAE, resolving a property dispute back home seemed impossible. The NRI desk handled everything seamlessly without my presence.",
    author: "Sneha Varghese",
    role: "NRI Client, Dubai"
  },
  {
    quote: "The strategic approach their maritime desk took during our cargo dispute saved our shipping firm significant delays and financial loss.",
    author: "Capt. Thomas George",
    role: "Operations Director"
  }
];

const matters = [
  {
    title: "High Court Maritime Dispute",
    result: "Favorable Verdict",
    desc: "Successfully defended a major shipping corporation in a multi-crore liability claim, setting a new legal precedent."
  },
  {
    title: "NRI Estate Resolution",
    result: "₹12 Crore Asset Recovery",
    desc: "Navigated complex ancestral property partition laws to secure full rights for an expatriate client against local claims."
  },
  {
    title: "Corporate Restructuring",
    result: "Seamless Merger",
    desc: "Facilitated the seamless acquisition of a regional company by a multinational conglomerate, ensuring full compliance."
  }
];

const awards = [
  "Top Tier Law Firm - Legal500 India",
  "Excellence in Maritime Law 2025",
  "Leading NRI Legal Counsel",
  "Best Dispute Resolution Firm"
];

const faqs = [
  {
    q: "Do I need to be physically present for my legal dispute?",
    a: "Not necessarily. Our dedicated desk can handle most proceedings through Power of Attorney and represent you effectively in your absence."
  },
  {
    q: "How does your billing structure work?",
    a: "We believe in complete transparency. Depending on the matter, we offer flat fees for specific services or hourly rates for complex litigation."
  },
  {
    q: "Which courts do you practice in?",
    a: "We primarily practice at the High Court, along with various District Courts, specialized tribunals, and the NCLT."
  }
];

export default function Credibility() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="credibility" className="bg-[#050505] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Awards Banner */}
        <div className="mb-32 text-center border-y border-white/10 py-12">
          <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-8 block text-center">Recognized Excellence</span>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {awards.map((award, i) => (
              <div key={i} className="flex items-center gap-3 text-white/70">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c5a059" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-3.5 2 1-4.5L6 9l4.5-.5L12 4l1.5 4.5 4.5.5-3.5 3.5 1 4.5-3.5-2z"/>
                </svg>
                <span className="font-semibold text-sm md:text-base">{award}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Representative Matters Section */}
        <div className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-4 block">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Representative Matters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matters.map((matter, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-[30px] hover:border-accent/50 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">{matter.result}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{matter.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{matter.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-32">
          <div className="mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-4 block">Client Perspectives</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">Trusted by Leaders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((test, i) => (
              <div key={i} className="glass-card p-8 rounded-[30px] flex flex-col justify-between">
                <div>
                  <svg className="w-8 h-8 text-accent/40 mb-6" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                  </svg>
                  <p className="text-white/80 italic leading-relaxed mb-8">"{test.quote}"</p>
                </div>
                <div>
                  <p className="text-white font-bold">{test.author}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="text-accent text-sm font-bold uppercase tracking-[4px] mb-4 block">Clarity & Transparency</span>
            <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Frequently Asked Questions</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className={`border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${openFaq === i ? 'bg-white/5' : 'bg-transparent hover:bg-white/5'}`}
              >
                <button 
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-white md:text-lg pr-8">{faq.q}</span>
                  <svg 
                    className={`w-5 h-5 text-accent transform transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openFaq === i ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-white/60 leading-relaxed text-sm md:text-base">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
