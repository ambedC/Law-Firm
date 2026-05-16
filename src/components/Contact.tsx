"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. Our legal team will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <Reveal>
            <div>
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-[0.3em] mb-4">Inquiry</h4>
              <h2 className="text-4xl md:text-7xl font-light uppercase tracking-tighter leading-[0.9] mb-8">
                Legal <br />Consultation
              </h2>
              <p className="text-lg text-white/60 font-sans max-w-md leading-relaxed">
                Schedule a confidential meeting with our partners. We provide expert legal counsel for individuals, corporations, and NRI clients.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-white/10">
            <Reveal delay={100} direction="up" className="space-y-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest">The Chambers</h4>
              <p className="text-base text-white font-sans leading-relaxed">
                4th Floor, Skyline Plaza,<br />
                M.G. Road, Kochi,<br />
                Kerala - 682011
              </p>
            </Reveal>
            <Reveal delay={200} direction="up" className="space-y-4">
              <h4 className="text-accent text-[10px] uppercase font-bold tracking-widest">Direct Lines</h4>
              <div className="space-y-1">
                <p className="text-base text-white font-sans">+91 484 2345678</p>
                <p className="text-sm text-white/40 font-sans">legal@lawfirm.com</p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={300} direction="left" className="h-full">
          <div className="glass-card !p-8 md:!p-12 relative overflow-hidden group h-full">
            <div className="absolute top-0 left-0 w-1 h-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-accent transition-all font-sans text-sm focus:bg-white/[0.05]"
                    placeholder="e.g. Rahul Nair"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-accent transition-all font-sans text-sm focus:bg-white/[0.05]"
                    placeholder="rahul@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-accent transition-all font-sans text-sm focus:bg-white/[0.05]"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Practice Area</label>
                  <div className="relative">
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-accent transition-all font-sans text-sm focus:bg-white/[0.05] appearance-none"
                    >
                      <option value="" className="bg-[#050505]">Select Practice Area</option>
                      <option value="corporate" className="bg-[#050505]">Corporate Law</option>
                      <option value="civil" className="bg-[#050505]">Civil Litigation</option>
                      <option value="criminal" className="bg-[#050505]">Criminal Defense</option>
                      <option value="nri" className="bg-[#050505]">NRI Legal Services</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[9px] uppercase tracking-widest text-white/40 ml-1">Case Description</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-4 py-4 text-white focus:outline-none focus:border-accent transition-all font-sans text-sm focus:bg-white/[0.05] resize-none"
                  placeholder="How can we assist you?"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full mt-4 !py-5">
                Submit Request
              </button>
              <p className="text-[10px] text-white/30 text-center uppercase tracking-widest">
                Confidentiality Guaranteed
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
