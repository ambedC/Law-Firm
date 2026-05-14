import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-[#020202]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="font-bold tracking-[2px] text-accent text-sm">LAW FIRM</div>
        <p className="text-white/40 text-[10px] uppercase tracking-widest">
          © {new Date().getFullYear()} Law Firm. Kochi, Kerala. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link href="#" className="text-white/40 hover:text-white text-[8px] uppercase tracking-widest transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-white/40 hover:text-white text-[8px] uppercase tracking-widest transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
