interface PracticeCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function PracticeCard({ title, desc, icon }: PracticeCardProps) {
  return (
    <div className="glass-card group hover:bg-accent/5 h-full">
      <div className="w-10 h-10 mb-6 text-accent/40 group-hover:text-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-accent mb-4 text-2xl tracking-tight">{title}</h3>
      <p className="text-white/50 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}
