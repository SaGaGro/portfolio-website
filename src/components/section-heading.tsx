export function SectionHeading({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <div className="grid gap-5 border-t border-black/15 pt-5 lg:grid-cols-[0.35fr_1fr]">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">{eyebrow}</p>
      <div>
        <h2 className={`max-w-4xl font-display leading-[0.95] tracking-[-0.045em] ${compact ? "text-4xl sm:text-5xl lg:text-6xl" : "text-5xl sm:text-6xl lg:text-8xl"}`}>{title}</h2>
        {description ? <p className="mt-6 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">{description}</p> : null}
      </div>
    </div>
  );
}
