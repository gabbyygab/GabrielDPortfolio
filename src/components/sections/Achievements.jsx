import { Award, TrendingUp, BookOpen, Star, Calendar, Target } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: "Consistent Dean's Lister",
      description: 'Achieved Dean\'s List recognition for 5 consecutive semesters',
      highlight: '5 Semesters',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      iconBg: 'from-emerald-500/15 to-teal-500/15',
    },
    {
      icon: TrendingUp,
      title: 'Outstanding GWA',
      description: 'Maintained exceptional academic performance throughout college',
      highlight: '1.20 - 1.35',
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      iconBg: 'from-violet-500/15 to-purple-500/15',
    },
    {
      icon: BookOpen,
      title: 'BSIT Major',
      description: 'Majoring in Web and Mobile Development',
      highlight: 'Web & Mobile',
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      iconBg: 'from-amber-500/15 to-orange-500/15',
    },
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Dedicated to continuous learning and skill development',
      highlight: 'Top Performer',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      iconBg: 'from-cyan-500/15 to-blue-500/15',
    },
  ];

  const milestones = [
    { semester: '1st Semester', gwa: '1.25', status: "Dean's Lister" },
    { semester: '2nd Semester', gwa: '1.20', status: "Dean's Lister" },
    { semester: '3rd Semester', gwa: '1.30', status: "Dean's Lister" },
    { semester: '4th Semester', gwa: '1.35', status: "Dean's Lister" },
    { semester: '5th Semester', gwa: '1.25', status: "Dean's Lister" },
  ];

  const milestoneGradients = [
    'from-emerald-500 to-teal-500',
    'from-teal-500 to-cyan-500',
    'from-cyan-500 to-blue-500',
    'from-blue-500 to-violet-500',
    'from-violet-500 to-purple-500',
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

        {/* Main Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-12">
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

        {/* Academic Timeline */}
        <div className="mt-14 bg-white dark:bg-bg-dark rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700/60 fade-in-up relative overflow-hidden">
          {/* Subtle top gradient bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-cyan-500 to-violet-500" />

          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-linear-to-br from-emerald-500/15 to-teal-500/15 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-emerald-primary" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary-dark">
              Academic Performance Timeline
            </h3>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="group relative p-4 pt-5 bg-surface-light dark:bg-surface-dark rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700/60 hover:border-emerald-primary/50 hover:shadow-md"
              >
                <div className={`absolute -top-3 left-4 w-7 h-7 bg-linear-to-br ${milestoneGradients[index]} text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md`}>
                  {index + 1}
                </div>

                <p className="text-xs text-text-muted font-medium mb-1">
                  {milestone.semester}
                </p>
                <p className={`text-2xl font-bold bg-linear-to-r ${milestoneGradients[index]} bg-clip-text text-transparent mb-1.5 tabular-nums`}>
                  {milestone.gwa}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500 fill-current" />
                  <p className="text-xs text-text-secondary dark:text-text-secondary-dark font-medium">
                    {milestone.status}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-8 p-5 md:p-6 bg-linear-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-xl border border-emerald-primary/20">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm mb-1">
                  Average GWA across all semesters
                </p>
                <p className="text-3xl font-bold bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent tabular-nums">
                  1.27
                </p>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-emerald-primary to-teal-500 text-white rounded-xl font-medium shadow-lg text-sm">
                <Award className="w-5 h-5" />
                <span>Consistent Academic Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
