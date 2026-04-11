export default function SectionHeading({ title, subtitle, eyebrow }) {
  const words = title.split(' ');

  return (
    <div className="text-center mb-10 md:mb-14 slide-in-left">
      {eyebrow && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="block h-px w-8 bg-emerald-primary opacity-80" />
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-emerald-primary">
            {eyebrow}
          </span>
          <span className="block h-px w-8 bg-emerald-primary opacity-80" />
        </div>
      )}

      <h2 className="text-4xl md:text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-3 leading-tight">
        {words.map((word, i) =>
          i === words.length - 1 ? (
            <span
              key={i}
              className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent"
            >
              {word}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>

      {subtitle && (
        <p className="text-base text-text-secondary dark:text-text-secondary-dark leading-relaxed max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
