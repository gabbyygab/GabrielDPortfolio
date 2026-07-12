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
  SiFigma,
  SiUnity,
} from 'react-icons/si';
import { FaJava, FaMobileAlt, FaDatabase, FaRobot } from 'react-icons/fa';
import { TbApi, TbBrandCSharp } from 'react-icons/tb';
import { MdOutlineDesignServices, MdGroups } from 'react-icons/md';
import { Code2, Layers, Sparkles, Wrench } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import SpotlightCard from '../shared/SpotlightCard';
import Marquee from '../shared/Marquee';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      glowColor: 'rgba(16,185,129,0.15)',
      borderColor: 'rgba(16,185,129,0.3)',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', bg: 'rgba(247,223,30,0.12)' },
        { name: 'Java',       icon: FaJava,        color: '#ED8B00', bg: 'rgba(237,139,0,0.12)' },
        { name: 'PHP',        icon: SiPhp,         color: '#777BB4', bg: 'rgba(119,123,180,0.12)' },
        { name: 'C#',         icon: TbBrandCSharp,  color: '#9B59D0', bg: 'rgba(155,89,208,0.12)' },
        { name: 'C++',        icon: SiCplusplus,   color: '#00599C', bg: 'rgba(0,89,156,0.12)' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layers,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      glowColor: 'rgba(139,92,246,0.15)',
      borderColor: 'rgba(139,92,246,0.3)',
      skills: [
        { name: 'React',        icon: SiReact,       color: '#61DAFB', bg: 'rgba(97,218,251,0.12)' },
        { name: 'Next.js',      icon: SiNextdotjs,   color: '#e2e8f0', bg: 'rgba(226,232,240,0.08)' },
        { name: 'Vue.js',       icon: SiVuedotjs,    color: '#4FC08D', bg: 'rgba(79,192,141,0.12)' },
        { name: 'Laravel',      icon: SiLaravel,     color: '#FF2D20', bg: 'rgba(255,45,32,0.12)' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', bg: 'rgba(6,182,212,0.12)' },
      ],
    },
    {
      title: 'Specializations',
      icon: Sparkles,
      gradient: 'from-amber-500 via-orange-500 to-rose-500',
      glowColor: 'rgba(245,158,11,0.15)',
      borderColor: 'rgba(245,158,11,0.3)',
      skills: [
        { name: 'Mobile Dev',   icon: FaMobileAlt, color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
        { name: 'Game Dev',     icon: SiUnity,     color: '#e2e8f0', bg: 'rgba(226,232,240,0.08)' },
        { name: 'AI Prompting', icon: FaRobot,     color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
        { name: 'Database',     icon: FaDatabase,  color: '#3B82F6', bg: 'rgba(59,130,246,0.12)' },
      ],
    },
  ];

  const tools = [
    { name: 'Git',         icon: SiGit,                  color: '#F05032', bg: 'rgba(240,80,50,0.12)' },
    { name: 'Docker',      icon: SiDocker,               color: '#2496ED', bg: 'rgba(36,150,237,0.12)' },
    { name: 'REST APIs',   icon: TbApi,                  color: '#10b981', bg: 'rgba(16,185,129,0.12)' },
    { name: 'Agile',       icon: MdGroups,               color: '#8B5CF6', bg: 'rgba(139,92,246,0.12)' },
    { name: 'UI/UX',       icon: SiFigma,                color: '#F24E1E', bg: 'rgba(242,78,30,0.12)' },
    { name: 'Responsive',  icon: MdOutlineDesignServices, color: '#06B6D4', bg: 'rgba(6,182,212,0.12)' },
  ];

  return (
    <section
      id="skills"
      className="py-16 md:py-20 relative overflow-hidden bg-surface-light dark:bg-surface-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div data-parallax="0.25" className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-primary/6 rounded-full blur-3xl" />
        <div data-parallax="0.35" className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-500/6 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="What I Know"
          title="Technical Skills"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-10">
          {skillCategories.map((category, ci) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={ci}
                className={`group ${ci % 2 === 0 ? 'slide-in-left' : 'fade-in-up'}`}
                style={{ transitionDelay: `${ci * 100}ms` }}
              >
                <SpotlightCard className="relative bg-white dark:bg-bg-dark rounded-2xl p-7 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200/80 dark:border-gray-700/50 hover:border-transparent h-full overflow-hidden">
                  {/* Hover glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.02]`}
                  />
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r ${category.gradient}`} />

                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `linear-gradient(135deg, ${category.glowColor}, ${category.glowColor})`, border: `1px solid ${category.borderColor}` }}
                    >
                      <CategoryIcon className="w-5 h-5 text-emerald-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-text-primary dark:text-text-primary-dark">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills as pills */}
                  <div className="relative z-10 flex flex-wrap gap-2.5">
                    {category.skills.map((skill, si) => {
                      const SkillIcon = skill.icon;
                      return (
                        <span
                          key={si}
                          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm font-semibold cursor-default transition-all duration-300 hover:scale-105 hover:shadow-md"
                          style={{
                            background: skill.bg,
                            border: `1px solid ${skill.color}35`,
                            color: 'inherit',
                          }}
                        >
                          <SkillIcon
                            className="w-3.5 h-3.5 shrink-0"
                            style={{ color: skill.color }}
                          />
                          <span className="text-text-primary dark:text-text-primary-dark leading-none">
                            {skill.name}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>

        {/* Tools & Practices */}
        <div className="fade-in-up" style={{ transitionDelay: '300ms' }}>
          {/* Header */}
          <div className="flex items-center gap-3 justify-center mb-6">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
            <div className="flex items-center gap-2">
              <Wrench className="w-4 h-4 text-emerald-primary" />
              <p className="text-sm font-semibold tracking-widest uppercase text-text-muted">
                Tools &amp; Practices
              </p>
            </div>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
          </div>

          <Marquee duration={28} gap="0.75rem">
            {tools.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold cursor-default transition-transform duration-300 hover:scale-105"
                  style={{
                    background: tool.bg,
                    border: `1px solid ${tool.color}35`,
                  }}
                >
                  <ToolIcon className="w-4 h-4 shrink-0" style={{ color: tool.color }} />
                  <span className="text-text-primary dark:text-text-primary-dark whitespace-nowrap">{tool.name}</span>
                </span>
              );
            })}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
