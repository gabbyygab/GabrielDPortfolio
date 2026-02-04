import { GraduationCap, Target, Code2, Trophy } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Bachelor of Science in Information Technology, Major in Web and Mobile Development at Bulacan State University',
      gradient: 'from-emerald-500 to-teal-500',
      iconBg: 'from-emerald-500/15 to-teal-500/15',
    },
    {
      icon: Trophy,
      title: 'Academic Excellence',
      description: 'Consistent Dean\'s Lister with 1.20-1.35 GWA',
      gradient: 'from-amber-500 to-orange-500',
      iconBg: 'from-amber-500/15 to-orange-500/15',
    },
    {
      icon: Code2,
      title: 'Full-Stack Focus',
      description: 'Proficient in modern web technologies and frameworks',
      gradient: 'from-violet-500 to-purple-500',
      iconBg: 'from-violet-500/15 to-purple-500/15',
    },
    {
      icon: Target,
      title: 'Career Goal',
      description: 'Aspiring to become a professional Full-Stack Developer',
      gradient: 'from-cyan-500 to-blue-500',
      iconBg: 'from-cyan-500/15 to-blue-500/15',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -right-32 w-96 h-96 bg-linear-to-br from-emerald-primary/5 via-teal-400/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-32 w-96 h-96 bg-linear-to-tr from-violet-500/5 via-purple-400/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey and aspirations"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-12">
          {/* Content */}
          <div className="fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
              A Passionate Developer on a Mission
            </h3>

            <div className="space-y-4 text-text-secondary dark:text-text-secondary-dark text-base md:text-lg leading-relaxed">
              <p>
                I'm <span className="bg-linear-to-r from-emerald-primary to-teal-500 bg-clip-text text-transparent font-semibold">John Gabriel M. Delicana</span>,
                a dedicated BSIT student majoring in Web and Mobile Development. Currently pursuing my
                degree, I've consistently achieved Dean's Lister status for 5 consecutive semesters with
                a GWA ranging from 1.20 to 1.35.
              </p>

              <p>
                My journey in technology began with a curiosity about how digital experiences are created.
                This curiosity evolved into a passion for building solutions that combine functionality
                with elegant design. I specialize in full-stack development, with expertise spanning from
                front-end frameworks like React and Vue.js to back-end technologies.
              </p>

              <p>
                Beyond traditional web development, I'm also exploring mobile app development and
                game development with Unity. My diverse skill set allows me to approach problems
                from multiple angles and deliver comprehensive solutions.
              </p>

              <p>
                I'm constantly learning, adapting, and pushing myself to stay ahead in the
                ever-evolving tech landscape. My goal is to contribute to innovative projects that
                make a real impact while continuing to grow as a developer.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 bg-linear-to-r from-emerald-primary to-teal-500 hover:from-emerald-dark hover:to-emerald-primary text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-emerald-primary/20 hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-0.5"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-gray-200 dark:border-gray-700/60 hover:border-transparent transition-all duration-300 fade-in-up overflow-hidden"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Gradient border glow on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />

                  <div className={`w-12 h-12 bg-linear-to-br ${item.iconBg} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-emerald-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-text-primary dark:text-text-primary-dark mb-1.5">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
