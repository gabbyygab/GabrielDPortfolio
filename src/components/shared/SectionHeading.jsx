export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 md:mb-14 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
        {title.split(' ').map((word, i, arr) =>
          i === arr.length - 1 ? (
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
        <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-1 w-20 rounded-full bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 ${
          centered ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
