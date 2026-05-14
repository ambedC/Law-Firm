import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-8">
      <div className="glass-card py-20 text-center">
        <h2 className="text-4xl md:text-6xl mb-6 uppercase tracking-tighter">Connect With Us</h2>
        <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
          Visit our chambers in Kochi or schedule a virtual consultation for regional and NRI legal matters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 px-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest">Our Office</h4>
            <p className="text-lg text-white font-sans leading-relaxed">
              4th Floor, Skyline Plaza,<br />
              M.G. Road, Kochi,<br />
              Kerala - 682011
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest">Phone</h4>
            <p className="text-lg text-white font-sans">+91 484 2345678</p>
            <p className="text-sm text-white/40 font-sans">+91 98765 43210</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest">Email</h4>
            <p className="text-lg text-white font-sans">legal@lawfirm.com</p>
            <p className="text-sm text-white/40 font-sans">nri.desk@lawfirm.com</p>
          </div>
        </div>
        <Link href="mailto:legal@lawfirm.com" className="btn-primary w-full md:w-auto !px-5 !py-2 !text-sm md:!text-base mt-6 md:mt-0 block text-center">Schedule a Consultation</Link>
      </div>
    </section>
  );
}
