"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Lawyers", href: "/lawyers" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 md:py-8 flex justify-between items-center">
          {/* Nav Capsule */}
          <nav className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 gap-4 md:gap-6">
            {/* Logo inside Capsule */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center gap-8 pr-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="text-white/80 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle (Inside Capsule) */}
            <button 
              className="md:hidden text-white/80 hover:text-white p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </nav>

          {/* Consultation (Right side) */}
          <div className="flex items-center">
            <Link href="/contact" className="btn-primary !px-5 !py-2 !text-xs md:!text-sm md:!px-6">
              Consultation
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Card */}
      <div className={`fixed top-24 left-6 right-6 z-40 md:hidden transition-all duration-500 ease-out ${mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}>
        <div className="bg-black/90 backdrop-blur-2xl border border-white/10 rounded-[30px] p-8 shadow-2xl">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-white/80 text-xl hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="btn-primary !py-3 !text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop for closing */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-30 md:hidden bg-black/20 backdrop-blur-sm" 
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
