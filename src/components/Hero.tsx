import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#050505]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10"></div>
        <Image 
          src="/hero.jpg" 
          alt="Law Firm Background" 
          fill 
          className="object-cover object-right md:object-center"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-24">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="flex flex-col gap-8">
            {/* User Badge */}
            <Reveal delay={200} direction="down">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-3 md:p-4 w-fit">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-200/20 overflow-hidden flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs md:text-sm font-semibold">Hi, I'm Stas.</p>
                  <p className="text-white/50 text-[10px] md:text-xs">Lawyer</p>
                </div>
              </div>
            </Reveal>

            {/* Main Heading & Intro */}
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
              <Reveal delay={400} direction="up" className="max-w-2xl">
                <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-bold leading-[0.9] tracking-tighter text-white mb-4 uppercase">
                  Tailored<br />Legal<br />Solutions
                </h1>
              </Reveal>
              <Reveal delay={600} direction="up" className="max-w-[300px] pb-2 md:pb-4">
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  Welcome to Stas Nychyporchuk Law Firm. Expert legal guidance tailored to your needs, for individuals and businesses alike.
                </p>
              </Reveal>
            </div>
          </div>

          {/* Socials & Email Capsule */}
          <div className="w-full lg:w-auto">
            <Reveal delay={800} direction="left">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] md:rounded-[30px] p-5 md:p-6 w-full lg:min-w-[320px]">
                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Social media</span>
                    <div className="flex flex-wrap gap-4 text-white/80 text-xs md:text-sm">
                      <span className="cursor-pointer hover:text-white transition-colors">Instagram</span>
                      <span className="cursor-pointer hover:text-white transition-colors">Telegram</span>
                      <span className="cursor-pointer hover:text-white transition-colors">WhatsApp</span>
                    </div>
                  </div>
                  
                  <div className="relative border-t border-white/10 pt-5 md:pt-6">
                    <input 
                      type="email" 
                      placeholder="Write your email" 
                      className="bg-transparent text-white w-full pr-12 focus:outline-none placeholder:text-white/30 text-xs md:text-sm"
                    />
                    <button className="absolute right-0 top-[18px] md:top-[22px] bg-blue-600 text-white rounded-full p-1.5 md:p-2 hover:bg-blue-500 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
