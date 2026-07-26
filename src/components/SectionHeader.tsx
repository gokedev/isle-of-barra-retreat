interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}

export default function SectionHeader({ label, title, description, light = true }: SectionHeaderProps) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <p className={`uppercase tracking-[0.3em] text-xs mb-6 ${light ? "text-[#5b6470]" : "text-white/60"}`}>
        {label}
      </p>
      <h2 className={`font-serif text-4xl md:text-5xl mb-6 ${light ? "text-[#0f1d3a]" : "text-white"}`}>
        {title}
      </h2>
      {description && (
        <p className={light ? "text-[#3a4150]" : "text-white/75"}>
          {description}
        </p>
      )}
    </div>
  );
}
