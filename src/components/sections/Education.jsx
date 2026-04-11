import { GraduationCap, BookOpen, School, Quote, Star, Globe } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Education() {
  const timeline = [
    {
      icon: BookOpen,
      level: 'Primary Education',
      school: 'Notre Christi Academy of the Philippines',
      period: '2011 – 2017',
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'from-emerald-500/15 to-teal-500/15',
      detail: null,
      current: false,
    },
    {
      icon: School,
      level: 'Secondary Education',
      school: 'Notre Christi Academy of the Philippines',
      period: '2017 – 2023',
      gradient: 'from-violet-500 to-purple-500',
      iconBg: 'from-violet-500/15 to-purple-500/15',
      detail: null,
      current: false,
    },
    {
      icon: GraduationCap,
      level: 'Tertiary Education',
      school: 'Bulacan State University',
      period: '2023 – 2026',
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'from-amber-500/15 to-orange-500/15',
      detail: 'BS Information Technology — Major in Web and Mobile Development',
      current: true,
    },
  ];

  const softSkills = [
    'Communication',
    'Teamwork & Collaboration',
    'Adaptability',
    'Attention to Detail',
    'Logical Thinking',
  ];

  return (
    <section
      id="education"
      className="py-16 md:py-20 relative overflow-hidden bg-surface-light dark:bg-surface-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="My Background"
          title="Educational Journey"
          subtitle="A foundation built through years of dedicated study and academic growth"
        />

        {/* Two-column: info card left | timeline right — equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

          {/* ── Left: Large info card ── */}
          <div className="bg-white dark:bg-bg-dark rounded-3xl border border-gray-200/80 dark:border-gray-700/50 shadow-sm overflow-hidden flex flex-col slide-in-left">
            {/* Accent top bar */}
            <div className="h-1 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400" />

            <div className="p-7 flex flex-col gap-7 flex-1">

              {/* Current enrollment highlight */}
              <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-emerald-500/10 via-teal-500/8 to-transparent border border-emerald-primary/20 p-5">
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 bg-emerald-primary/15 border border-emerald-primary/30 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-primary uppercase tracking-wider">Currently Enrolled</span>
                </div>
                <GraduationCap className="w-7 h-7 text-emerald-primary mb-3" />
                <p className="text-[10px] font-semibold text-text-muted uppercase tracking-widest mb-1">Degree</p>
                <p className="text-base font-bold text-text-primary dark:text-text-primary-dark leading-snug mb-3">
                  BS Information Technology
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">Major</p>
                    <p className="text-xs font-semibold text-text-primary dark:text-text-primary-dark leading-snug">Web & Mobile Development</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">Year Level</p>
                    <p className="text-xs font-semibold text-text-primary dark:text-text-primary-dark">3rd Year</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">University</p>
                    <p className="text-xs font-semibold text-text-primary dark:text-text-primary-dark leading-snug">Bulacan State University</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-text-muted mb-0.5">Period</p>
                    <p className="text-xs font-semibold text-text-primary dark:text-text-primary-dark">2023 – 2026</p>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Star className="w-3 h-3 text-emerald-primary" /> Soft Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-primary/8 border border-emerald-primary/20 text-text-secondary dark:text-text-secondary-dark"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Globe className="w-3 h-3 text-emerald-primary" /> Languages
                </p>
                <div className="flex gap-3">
                  {[{ flag: '🇵🇭', lang: 'Filipino', level: 'Native' }, { flag: '🇺🇸', lang: 'English', level: 'Proficient' }].map(({ flag, lang, level }) => (
                    <div
                      key={lang}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200/80 dark:border-gray-700/50"
                    >
                      <span className="text-xl">{flag}</span>
                      <div>
                        <p className="text-xs font-bold text-text-primary dark:text-text-primary-dark leading-none">{lang}</p>
                        <p className="text-[10px] text-text-muted mt-0.5">{level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Motivational quote — sits at bottom */}
              <div className="mt-auto pt-5 border-t border-gray-200/60 dark:border-gray-700/40">
                <Quote className="w-4 h-4 text-emerald-primary mb-2 opacity-60" />
                <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed italic">
                  "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                </p>
              </div>

            </div>
          </div>

          {/* ── Right: Timeline ── */}
          <div className="flex flex-col slide-in-right" style={{ transitionDelay: '100ms' }}>
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === timeline.length - 1;
              return (
                <div key={index} className="relative flex gap-5 flex-1">
                  {/* Vertical connector line */}
                  {!isLast && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-gray-200 dark:bg-gray-700/60" />
                  )}

                  {/* Icon dot */}
                  <div className="shrink-0 z-10">
                    <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.iconBg} flex items-center justify-center border border-gray-200/80 dark:border-gray-700/50 shadow-sm`}>
                      <Icon className="w-5 h-5 text-emerald-primary" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`group flex-1 ${!isLast ? 'mb-5' : ''} relative bg-white dark:bg-bg-dark rounded-2xl p-5 border border-gray-200/80 dark:border-gray-700/50 hover:border-transparent hover:shadow-xl transition-all duration-400 overflow-hidden`}>
                    <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />
                    <div className={`absolute top-0 left-0 bottom-0 w-0.5 bg-linear-to-b ${item.gradient} rounded-l-2xl`} />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold uppercase tracking-widest bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}>
                            {item.level}
                          </span>
                          {item.current && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-emerald-primary/10 border border-emerald-primary/25 rounded-full">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-primary animate-pulse" />
                              <span className="text-[10px] font-semibold text-emerald-primary">Current</span>
                            </span>
                          )}
                        </div>
                        <h3 className="text-sm font-bold text-text-primary dark:text-text-primary-dark leading-snug">
                          {item.school}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-text-muted whitespace-nowrap shrink-0">{item.period}</span>
                    </div>

                    {item.detail && (
                      <p className="text-xs text-text-secondary dark:text-text-secondary-dark mt-1.5 leading-relaxed">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
