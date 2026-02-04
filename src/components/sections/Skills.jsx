import {
  SiJavascript,
  SiPhp,
  SiCplusplus,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiUnity,
  SiFigma,
} from 'react-icons/si';
import { FaJava, FaMobileAlt, FaDatabase, FaRobot } from 'react-icons/fa';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineDesignServices, MdGroups } from 'react-icons/md';
import { Code2, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      iconBg: 'from-emerald-500/20 to-teal-500/20',
      skills: [
        { name: 'JavaScript', level: 95, icon: SiJavascript, color: '#F7DF1E' },
        { name: 'Java', level: 90, icon: FaJava, color: '#ED8B00' },
        { name: 'PHP', level: 85, icon: SiPhp, color: '#777BB4' },
        { name: 'C#', level: 80, icon: TbBrandCSharp, color: '#68217A' },
        { name: 'C++', level: 80, icon: SiCplusplus, color: '#00599C' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      iconBg: 'from-violet-500/20 to-purple-500/20',
      skills: [
        { name: 'React', level: 95, icon: SiReact, color: '#61DAFB' },
        { name: 'Vue.js', level: 85, icon: SiVuedotjs, color: '#4FC08D' },
        { name: 'Next.js', level: 85, icon: SiNextdotjs, color: '#' },
        { name: 'Laravel', level: 80, icon: SiLaravel, color: '#FF2D20' },
        { name: 'Tailwind CSS', level: 95, icon: SiTailwindcss, color: '#06B6D4' },
      ],
    },
    {
      title: 'Specializations',
      icon: Sparkles,
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      iconBg: 'from-amber-500/20 to-orange-500/20',
      skills: [
        { name: 'Mobile Dev', level: 85, icon: FaMobileAlt, color: '#10b981' },
        { name: 'Game Dev', level: 75, icon: SiUnity, color: '#' },
        { name: 'AI Prompting', level: 90, icon: FaRobot, color: '#8B5CF6' },
        { name: 'Database', level: 85, icon: FaDatabase, color: '#3B82F6' },
      ],
    },
  ];

  const additionalTools = [
    { name: 'Git', icon: SiGit, color: '#F05032' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'REST APIs', icon: TbApi, color: '#10b981' },
    { name: 'Agile', icon: MdGroups, color: '#8B5CF6' },
    { name: 'UI/UX', icon: SiFigma, color: '#F24E1E' },
    { name: 'Responsive', icon: MdOutlineDesignServices, color: '#06B6D4' },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative overflow-hidden bg-surface-light dark:bg-surface-dark"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-emerald-primary/10 via-teal-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-linear-to-tr from-violet-500/10 via-purple-400/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="fade-in-up"
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="group relative bg-white dark:bg-bg-dark rounded-2xl p-6 md:p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700/60 hover:border-transparent h-full overflow-hidden">
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`} />

                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 bg-linear-to-br ${category.iconBg} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <CategoryIcon className="w-5 h-5 text-emerald-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark leading-snug">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills as Pills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div key={skillIndex} className="group/skill">
                          {/* Pill with icon */}
                          <div className="flex items-center gap-3 mb-1.5">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 shrink-0">
                              <SkillIcon
                                className="w-4 h-4 shrink-0"
                                style={{ color: skill.color || 'currentColor' }}
                              />
                              <span className="text-sm font-semibold text-text-primary dark:text-text-primary-dark whitespace-nowrap">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs font-bold text-text-muted tabular-nums ml-auto">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Progress bar with gradient */}
                          <div className="h-2 bg-gray-200 dark:bg-gray-700/80 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-linear-to-r ${category.gradient} rounded-full transition-all duration-700 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Tools as Icon Pills */}
        <div className="mt-14 text-center fade-in-up">
          <p className="text-text-secondary dark:text-text-secondary-dark text-base md:text-lg mb-5">
            Always learning and expanding my skill set with new technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalTools.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-bg-dark rounded-full text-sm font-semibold shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md hover:border-emerald-primary/50 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                >
                  <ToolIcon
                    className="w-4 h-4 shrink-0"
                    style={{ color: tool.color }}
                  />
                  <span className="text-text-primary dark:text-text-primary-dark">
                    {tool.name}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
