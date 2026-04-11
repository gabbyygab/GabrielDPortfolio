import { useState, useRef, useEffect } from 'react';
import { Smartphone, Globe, Gamepad2, ChevronLeft, ChevronRight, Calendar, ExternalLink } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// ── BookingNest ──────────────────────────────────────────────
import booking1 from '../../assets/Receent Projects/BookingNest photos/image.png';
import booking2 from '../../assets/Receent Projects/BookingNest photos/image copy.png';
import booking3 from '../../assets/Receent Projects/BookingNest photos/image copy 2.png';
import booking4 from '../../assets/Receent Projects/BookingNest photos/image copy 3.png';
import booking5 from '../../assets/Receent Projects/BookingNest photos/image copy 4.png';
import booking6 from '../../assets/Receent Projects/BookingNest photos/image copy 5.png';

// ── BulSU E-Handbook ─────────────────────────────────────────
import bulsuHb1 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image.png';
import bulsuHb2 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy.png';
import bulsuHb3 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy 2.png';
import bulsuHb4 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy 3.png';
import bulsuHb5 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy 4.png';
import bulsuHb6 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy 5.png';
import bulsuHb7 from '../../assets/Receent Projects/Bulsu-Handbook Photos/image copy 6.png';

// ── BulSU DroidFish ──────────────────────────────────────────
import droid1 from '../../assets/Receent Projects/BulsuDroidFish/image.png';
import droid2 from '../../assets/Receent Projects/BulsuDroidFish/image copy.png';

// ── MindOverMatter Unity ─────────────────────────────────────
import mom1 from '../../assets/Receent Projects/MindOverMatterUnity/image.png';
import mom2 from '../../assets/Receent Projects/MindOverMatterUnity/image copy.png';
import mom3 from '../../assets/Receent Projects/MindOverMatterUnity/image copy 2.png';
import mom4 from '../../assets/Receent Projects/MindOverMatterUnity/image copy 3.png';
import mom5 from '../../assets/Receent Projects/MindOverMatterUnity/image copy 4.png';

// ── Sisidlan360 ──────────────────────────────────────────────
import sis1 from '../../assets/Receent Projects/Sisidlan360WebAppReactNextJs/image.png';
import sis2 from '../../assets/Receent Projects/Sisidlan360WebAppReactNextJs/image copy.png';
import sis3 from '../../assets/Receent Projects/Sisidlan360WebAppReactNextJs/image copy 2.png';
import sis4 from '../../assets/Receent Projects/Sisidlan360WebAppReactNextJs/image copy 3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'BookingNest',
    subtitle: 'Online Platform Management System',
    category: 'Web Application',
    icon: Globe,
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    accentColor: '#8B5CF6',
    period: 'Sep 2025 – Nov 2025',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    description:
      'A comprehensive online platform management system built with a dynamic React frontend and a robust Firebase backend to streamline reservations and administrative workflows. The application delivers a seamless, real-time user experience featuring secure authentication, responsive data handling, and an intuitive interface for both clients and administrators. By centralizing schedule management and availability tracking into one accessible hub, it provides a scalable and reliable solution tailored for optimal operational control.',
    images: [booking1, booking2, booking3, booking4, booking5, booking6],
  },
  {
    id: 2,
    title: 'BulSU E-Handbook',
    subtitle: 'University Student Handbook App',
    category: 'Mobile Application',
    icon: Smartphone,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accentColor: '#10b981',
    period: '2024 – 2025',
    technologies: ['Android Studio', 'Java', 'XML', 'SQLite'],
    description:
      'A mobile application developed for Bulacan State University that fully digitizes the student handbook, giving students instant access to university policies, academic guidelines, campus maps, and important announcements. The app streamlines access to essential information with a clean, searchable interface designed around the needs of BulSU students, eliminating the need for physical copies and ensuring information stays up to date.',
    images: [bulsuHb1, bulsuHb2, bulsuHb3, bulsuHb4, bulsuHb5, bulsuHb6, bulsuHb7],
  },
  {
    id: 3,
    title: 'BulSU DroidFish',
    subtitle: 'Chess Analysis App — Stockfish 17',
    category: 'Mobile Application',
    icon: Smartphone,
    gradient: 'from-amber-500 via-orange-500 to-rose-500',
    accentColor: '#F59E0B',
    period: 'Jan 2026 – Present',
    technologies: ['Android Studio', 'Java', 'XML', 'SQLite', 'Stockfish 17'],
    description:
      'BulSU DroidFish is a specialized, high-performance chess analysis application powered by the cutting-edge Stockfish 17 engine to deliver grandmaster-level evaluations on the go. Custom-built specifically for the Bulacan State University regional chess team, the app provides deep tactical insights, rigorous opening preparation, and detailed game analysis tools — all optimized for mobile use during training sessions and tournaments.',
    images: [droid1, droid2],
  },
  {
    id: 4,
    title: 'MindOverMatter',
    subtitle: 'Mental Wellness Unity Game',
    category: 'Game Development',
    icon: Gamepad2,
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    accentColor: '#EC4899',
    period: '2024 – 2025',
    technologies: ['Unity', 'C#', 'Game Design'],
    description:
      'A Unity-developed 2D game exploring mental wellness and cognitive resilience through engaging gameplay mechanics. MindOverMatter combines thoughtful game design with interactive challenges that encourage mindfulness, problem-solving, and emotional self-awareness. Developed as a creative capstone into game development, the project showcases proficiency in C# scripting, Unity physics, UI animation, and narrative-driven level design.',
    images: [mom1, mom2, mom3, mom4, mom5],
  },
  {
    id: 5,
    title: 'Sisidlan360',
    subtitle: 'Enterprise Resource Planning System',
    category: 'Enterprise Web App',
    icon: Globe,
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    accentColor: '#3B82F6',
    period: 'Jan 2026 – Present',
    technologies: ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL'],
    description:
      'A comprehensive, unified web-based Enterprise Resource Planning (ERP) system custom-developed to streamline and centralize the core business operations of Sisidlan Sales Corporation. Designed as a robust capstone research project, the platform integrates various operational facets — inventory, sales, HR, and reporting — into a single, intuitive interface to enhance cross-departmental efficiency and enable real-time data management at scale.',
    images: [sis1, sis2, sis3, sis4],
  },
];

function ImageViewer({ images, accentColor, title }) {
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => { setIdx(0); }, [images]);

  const go = (dir) => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setIdx((i) => {
        const next = i + dir;
        if (next < 0) return images.length - 1;
        if (next >= images.length) return 0;
        return next;
      });
      setAnimating(false);
    }, 180);
  };

  return (
    <div className="relative w-full h-full flex flex-col">
      {/* Main image area */}
      <div
        className="relative flex-1 rounded-2xl overflow-hidden flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #0c1117 60%, #161d27)' }}
      >
        <img
          key={idx}
          src={images[idx]}
          alt={`${title} screenshot ${idx + 1}`}
          className="max-w-full max-h-full object-contain transition-opacity duration-200"
          style={{
            opacity: animating ? 0 : 1,
            maxHeight: '420px',
          }}
        />

        {/* Subtle corner gradient overlays */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ boxShadow: `inset 0 0 60px 0 rgba(0,0,0,0.4)` }} />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-sm transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image counter badge */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white/80 text-xs font-semibold">
          {idx + 1} / {images.length}
        </div>
      </div>

      {/* Dot indicators */}
      {images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > idx ? 1 : -1); setIdx(i); }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === idx ? '20px' : '8px',
                height: '8px',
                background: i === idx ? accentColor : 'rgba(156,163,175,0.4)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const carouselRef = useRef(null);

  const project = PROJECTS[activeIdx];

  const goTo = (i) => {
    const total = PROJECTS.length;
    const next = ((i % total) + total) % total;
    if (next === activeIdx) return;
    setFading(true);
    setTimeout(() => {
      setActiveIdx(next);
      setFading(false);
    }, 200);
  };

  // Scroll active carousel item into view on mobile
  useEffect(() => {
    if (!carouselRef.current) return;
    const activeEl = carouselRef.current.querySelector('[data-active="true"]');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeIdx]);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-1/4 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30 transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${project.accentColor}20 0%, transparent 70%)` }}
        />
        <div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 transition-all duration-700"
          style={{ background: `radial-gradient(circle, ${project.accentColor}15 0%, transparent 70%)` }}
        />
        <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="Real-world applications built with modern technologies"
        />

        {/* ── Detail Panel ──────────────────────────────────── */}
        <div
          className="mb-10 rounded-3xl overflow-hidden border border-gray-200/60 dark:border-gray-700/40 shadow-2xl bg-white dark:bg-surface-dark fade-in-up"
          style={{
            boxShadow: `0 25px 60px -12px ${project.accentColor}25`,
            opacity: fading ? 0 : undefined,
            transform: fading ? 'translateY(8px)' : undefined,
            transition: 'opacity 0.2s ease, transform 0.2s ease, box-shadow 0.5s ease',
          }}
        >
          {/* Accent bar */}
          <div className={`h-1 bg-linear-to-r ${project.gradient}`} />

          <div className="flex flex-col lg:flex-row gap-0">
            {/* Image Viewer — left panel */}
            <div className="lg:w-[58%] p-5 md:p-7 bg-gray-50 dark:bg-bg-dark/60 min-h-[320px] flex flex-col">
              <ImageViewer
                images={project.images}
                accentColor={project.accentColor}
                title={project.title}
              />
            </div>

            {/* Info — right panel */}
            <div className="lg:w-[42%] p-7 md:p-9 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-200/60 dark:border-gray-700/40">
              <div>
                {/* Category + period */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span
                    className={`px-3 py-1 text-xs font-bold rounded-full text-white bg-linear-to-r ${project.gradient}`}
                  >
                    {project.category}
                  </span>
                  {project.period && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-text-muted font-medium">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-3xl md:text-4xl font-bold mb-1 text-text-primary dark:text-text-primary-dark"
                >
                  {project.title}
                </h3>
                <p className="text-sm font-medium mb-5" style={{ color: project.accentColor }}>
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-text-secondary dark:text-text-secondary-dark text-sm leading-relaxed mb-7">
                  {project.description}
                </p>

                {/* Tech pills */}
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">
                    Built With
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 hover:scale-105"
                        style={{
                          background: `${project.accentColor}14`,
                          border: `1px solid ${project.accentColor}35`,
                          color: project.accentColor,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project number indicator */}
              <div className="mt-8 pt-6 border-t border-gray-200/60 dark:border-gray-700/40 flex items-center justify-between">
                <span className="text-xs text-text-muted font-medium">
                  Project {activeIdx + 1} of {PROJECTS.length}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => goTo(activeIdx - 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200/80 dark:border-gray-700/50 hover:border-emerald-primary/50 text-text-muted hover:text-emerald-primary transition-all duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => goTo(activeIdx + 1)}
                    className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200/80 dark:border-gray-700/50 hover:border-emerald-primary/50 text-text-muted hover:text-emerald-primary transition-all duration-200"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Circular Carousel ─────────────────────────────── */}
        <div className="relative fade-in-up" style={{ transitionDelay: '200ms' }}>
          {/* Desktop nav arrow — left */}
          <button
            onClick={() => goTo(activeIdx - 1)}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200/80 dark:border-gray-700/50 shadow-md hover:shadow-lg hover:border-emerald-primary/50 text-text-muted hover:text-emerald-primary transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Desktop nav arrow — right */}
          <button
            onClick={() => goTo(activeIdx + 1)}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-11 h-11 items-center justify-center rounded-full bg-white dark:bg-surface-dark border border-gray-200/80 dark:border-gray-700/50 shadow-md hover:shadow-lg hover:border-emerald-primary/50 text-text-muted hover:text-emerald-primary transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable track */}
          <div
            ref={carouselRef}
            className="flex items-end justify-center gap-4 md:gap-6 overflow-x-auto pb-2 scrollbar-hide md:overflow-x-visible px-4 md:px-14"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {PROJECTS.map((p, i) => {
              const isActive = i === activeIdx;
              const Icon = p.icon;
              const dist = Math.abs(i - activeIdx);
              // Arc effect: cards further from active are slightly lower
              const translateY = isActive ? -12 : dist === 1 ? -4 : 4;
              const scale = isActive ? 1 : dist === 1 ? 0.88 : 0.78;
              const opacity = isActive ? 1 : dist === 1 ? 0.75 : 0.55;

              return (
                <button
                  key={p.id}
                  data-active={isActive}
                  onClick={() => goTo(i)}
                  className="flex flex-col items-center gap-3 flex-shrink-0 focus:outline-none group"
                  style={{
                    scrollSnapAlign: 'center',
                    transform: `translateY(${translateY}px) scale(${scale})`,
                    opacity,
                    transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease, box-shadow 0.4s ease',
                  }}
                >
                  {/* Circle thumbnail */}
                  <div
                    className="relative rounded-full overflow-hidden transition-all duration-400"
                    style={{
                      width: isActive ? '100px' : '76px',
                      height: isActive ? '100px' : '76px',
                      transition: 'width 0.4s cubic-bezier(0.34,1.56,0.64,1), height 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                      boxShadow: isActive
                        ? `0 0 0 3px ${p.accentColor}, 0 0 0 5px ${p.accentColor}40, 0 12px 40px ${p.accentColor}50`
                        : '0 2px 12px rgba(0,0,0,0.15)',
                    }}
                  >
                    {p.images[0] ? (
                      <img
                        src={p.images[0]}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-full h-full bg-linear-to-br ${p.gradient} flex items-center justify-center`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    )}

                    {/* Active shimmer ring */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full"
                        style={{ background: `radial-gradient(circle at 30% 30%, ${p.accentColor}30, transparent 60%)` }}
                      />
                    )}
                  </div>

                  {/* Label */}
                  <div className="text-center">
                    <p
                      className="text-xs font-bold leading-tight max-w-[90px] transition-colors duration-300"
                      style={{ color: isActive ? p.accentColor : undefined }}
                    >
                      {p.title}
                    </p>
                    {isActive && (
                      <p className="text-[10px] text-text-muted mt-0.5 leading-tight max-w-[90px]">
                        {p.category}
                      </p>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className="rounded-full transition-all duration-400"
                style={{
                  width: i === activeIdx ? '24px' : '8px',
                  height: '8px',
                  background: i === activeIdx ? project.accentColor : 'rgba(156,163,175,0.35)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
