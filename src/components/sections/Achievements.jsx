import { BookOpen, Target } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Achievements() {
  const achievements = [
    {
      icon: BookOpen,
      title: 'BSIT Major',
      description: 'Majoring in Web and Mobile Development at Bulacan State University',
      highlight: 'Web & Mobile',
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      iconBg: 'from-amber-500/15 to-orange-500/15',
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Dedicated to continuous learning and skill development throughout college',
      highlight: 'Top Performer',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      iconBg: 'from-cyan-500/15 to-blue-500/15',
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 md:py-28 relative overflow-hidden bg-surface-light dark:bg-surface-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-linear-to-br from-amber-400/5 via-orange-300/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-linear-to-tl from-emerald-primary/5 via-teal-400/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Academic Achievements"
          subtitle="A track record of excellence and dedication to learning"
        />

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 mt-12 max-w-2xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group fade-in-up"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="relative bg-white dark:bg-bg-dark rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700/60 hover:border-transparent h-full overflow-hidden">
                  {/* Gradient border glow on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${achievement.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />

                  {/* Background Accent */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-bl ${achievement.iconBg} rounded-bl-[3rem] transition-all duration-300 group-hover:scale-150`} />

                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-linear-to-br ${achievement.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-emerald-primary" />
                    </div>

                    <h3 className="text-base font-bold text-text-primary dark:text-text-primary-dark mb-1.5 leading-snug">
                      {achievement.title}
                    </h3>

                    <p className="text-sm text-text-secondary dark:text-text-secondary-dark mb-4 leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className={`inline-block px-4 py-2 bg-linear-to-r ${achievement.gradient} text-white rounded-lg font-bold text-base shadow-md`}>
                      {achievement.highlight}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
