import { ArrowRight, MapPin, Briefcase, Code2 } from 'lucide-react';
import profileImage from '../../assets/GabPicture.jpg';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const badges = [
    { icon: MapPin,    label: 'Location', value: 'Bulacan, Philippines' },
    { icon: Briefcase, label: 'Status',   value: 'BSIT Student' },
    { icon: Code2,     label: 'Projects', value: '5 Built' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-emerald-primary/7 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal-400/8 blur-3xl" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-cyan-400/5 blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.03] dark:opacity-[0.055]" />
      </div>

      <div className="container mx-auto px-12 sm:px-20 lg:px-32 py-28 lg:py-20 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">

          {/* ── Left: Text content ── */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

            {/* Greeting eyebrow */}
            <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start slide-in-left">
              <span className="h-px w-8 bg-emerald-primary opacity-80 hidden lg:block" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-emerald-primary">
                Hi, I'm
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-[1.06] slide-in-left"
              style={{ transitionDelay: '80ms' }}
            >
              John{' '}
              <span className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                Gabriel
              </span>
              <br />
              <span className="text-text-primary dark:text-text-primary-dark">Delicana</span>
            </h1>

            {/* Role */}
            <p
              className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark font-medium mb-3 slide-in-left"
              style={{ transitionDelay: '150ms' }}
            >
              Aspiring Full‑Stack Web Developer
            </p>

            {/* Tagline */}
            <p
              className="text-sm md:text-base text-text-muted max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed slide-in-left"
              style={{ transitionDelay: '210ms' }}
            >
              Building modern web experiences with passion and precision.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10 slide-in-left"
              style={{ transitionDelay: '270ms' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-r from-emerald-primary via-emerald-500 to-teal-500 hover:from-emerald-dark hover:to-teal-400 text-white rounded-2xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-primary/25 hover:shadow-xl hover:shadow-emerald-primary/35 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-emerald-primary/60 text-emerald-primary hover:border-emerald-primary hover:bg-emerald-primary hover:text-white rounded-2xl font-semibold transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                Contact Me
              </button>
            </div>

            {/* Info badges */}
            <div
              className="flex flex-wrap justify-center lg:justify-start gap-3 slide-in-left"
              style={{ transitionDelay: '330ms' }}
            >
              {badges.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-surface-light dark:bg-surface-dark border border-gray-200/80 dark:border-gray-700/50 rounded-xl hover:border-emerald-primary/40 transition-colors duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-emerald-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-medium text-text-muted uppercase tracking-wide leading-none mb-0.5">{label}</p>
                    <p className="text-xs font-semibold text-text-primary dark:text-text-primary-dark">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile image ── */}
          <div className="shrink-0 order-1 lg:order-2 slide-in-right" style={{ transitionDelay: '100ms' }}>
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Outer glow */}
              <div className="absolute -inset-4 rounded-full bg-emerald-primary/15 blur-2xl" />
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-primary via-teal-400 to-cyan-500 animate-[spin_10s_linear_infinite]" />
              {/* Photo */}
              <img
                src={profileImage}
                alt="John Gabriel M. Delicana"
                className="absolute inset-[4px] rounded-full object-cover border-[5px] border-white dark:border-bg-dark shadow-2xl"
                style={{ width: 'calc(100% - 8px)', height: 'calc(100% - 8px)' }}
              />
              {/* Floating accent dots */}
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-emerald-primary shadow-md shadow-emerald-primary/50" />
              <div className="absolute -bottom-3 left-6 w-3.5 h-3.5 rounded-full bg-teal-400 shadow-md shadow-teal-400/50" />
              <div className="absolute top-1/2 -left-4 w-3 h-3 rounded-full bg-cyan-400 shadow-md shadow-cyan-400/50" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-2 rounded-full bg-emerald-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
