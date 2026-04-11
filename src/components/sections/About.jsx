import { GraduationCap, Target, Code2, Trophy, Briefcase, Calendar, Coffee, Lightbulb, Rocket } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function About() {
  const stats = [
    {
      icon: Code2,
      value: '5+',
      label: 'Projects Completed',
      color: '#10b981',
      bg: 'rgba(16,185,129,0.12)',
      border: 'rgba(16,185,129,0.2)',
    },
    {
      icon: Coffee,
      value: '100+',
      label: 'Cups of Coffee',
      color: '#06b6d4',
      bg: 'rgba(6,182,212,0.12)',
      border: 'rgba(6,182,212,0.2)',
    },
    {
      icon: Trophy,
      value: '1x',
      label: "Dean's Lister",
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.12)',
      border: 'rgba(245,158,11,0.2)',
    },
    {
      icon: GraduationCap,
      value: '1.20',
      label: 'Top GWA Achieved',
      color: '#8b5cf6',
      bg: 'rgba(139,92,246,0.12)',
      border: 'rgba(139,92,246,0.2)',
    },
  ];

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSIT, Major in Web & Mobile Development — Bulacan State University',
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'from-emerald-500/15 to-teal-500/15',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Consistent Dean\'s Lister with GWA ranging from 1.20–1.35 across 5 semesters',
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'from-amber-500/15 to-orange-500/15',
    },
    {
      icon: Code2,
      title: 'Full-Stack Focus',
      description: 'Proficient in React, Next.js, PHP, Java, Firebase and modern web technologies',
      gradient: 'from-violet-500 to-purple-500',
      iconBg: 'from-violet-500/15 to-purple-500/15',
    },
    {
      icon: Target,
      title: 'Career Goal',
      description: 'Aspiring to join a development team and grow as a professional Full-Stack Developer',
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'from-cyan-500/15 to-blue-500/15',
    },
  ];

  const experience = [
    {
      role: 'Tutor',
      period: 'Sep 2024 – Jan 2026',
      detail: 'Academic tutoring in IT-related subjects',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      role: 'Chess Coach',
      period: 'May 2023 – Sep 2025',
      detail: 'Coached players in chess strategy and competitive play',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-20 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-emerald-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-violet-500/4 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Who I Am"
          title="About Me"
          subtitle="Aspiring web developer with a passion for building clean, functional digital experiences"
        />

        {/* ── Two-column: Bio left | Stat cards right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-12 items-center">

          {/* Left — Bio + CTA + Work Experience */}
          <div className="slide-in-left">
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed mb-4">
              I'm{' '}
              <span className="font-semibold bg-linear-to-r from-emerald-primary to-teal-500 bg-clip-text text-transparent">
                John Gabriel M. Delicana
              </span>
              , an aspiring web developer and IT student with practical experience in building
              database-driven web applications. Experienced in developing academic systems such as
              reservation and e-commerce platforms.
            </p>
            <p className="text-base md:text-lg text-text-secondary dark:text-text-secondary-dark leading-relaxed mb-8">
              Highly motivated to expand my technical skills, contribute to development teams,
              and gain real-world experience in software and web development. My stack spans
              React, Next.js, and Tailwind CSS on the frontend — PHP, Java, and Firebase on the backend.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-linear-to-r from-emerald-primary to-teal-500 hover:from-emerald-dark hover:to-emerald-primary text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-primary/25 hover:shadow-xl hover:shadow-emerald-primary/35 hover:-translate-y-0.5 mb-10"
            >
              Let's Connect
            </a>

            {/* Work Experience inline */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Briefcase className="w-4 h-4 text-emerald-primary" />
                <h3 className="text-base font-bold text-text-primary dark:text-text-primary-dark">
                  Work Experience
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {experience.map((exp, i) => (
                  <div
                    key={i}
                    className="group relative p-4 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200/80 dark:border-gray-700/50 hover:border-emerald-primary/40 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${exp.gradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-bold text-sm text-text-primary dark:text-text-primary-dark">{exp.role}</p>
                      <span className="flex items-center gap-1 text-xs text-emerald-primary font-semibold whitespace-nowrap">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary dark:text-text-secondary-dark">{exp.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — 2×2 Stat cards */}
          <div className="grid grid-cols-2 gap-4 slide-in-right">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default"
                  style={{
                    background: stat.bg,
                    borderColor: stat.border,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: stat.bg, border: `1px solid ${stat.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: stat.color }} />
                  </div>

                  {/* Number */}
                  <p
                    className="text-4xl font-bold leading-none mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark font-medium leading-snug">
                    {stat.label}
                  </p>

                  {/* Subtle corner glow */}
                  <div
                    className="absolute top-0 right-0 w-16 h-16 rounded-bl-[2rem] opacity-40 pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${stat.color}30, transparent 70%)` }}
                  />
                </div>
              );
            })}
          </div>

        </div>

        {/* ── Highlight Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 fade-in-up" style={{ transitionDelay: '80ms' }}>
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200/80 dark:border-gray-700/50 hover:border-transparent transition-all duration-400 overflow-hidden hover:shadow-xl"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.03]`} />
                <div className={`absolute top-0 right-0 w-20 h-20 bg-linear-to-bl ${item.iconBg} rounded-bl-[2.5rem] transition-all duration-300 group-hover:scale-150`} />
                <div className="relative z-10">
                  <div className={`w-11 h-11 bg-linear-to-br ${item.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-5 h-5 text-emerald-primary" />
                  </div>
                  <h4 className="text-base font-bold text-text-primary dark:text-text-primary-dark mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
