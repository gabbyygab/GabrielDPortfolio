import { ArrowRight } from 'lucide-react';
import profileImage from '../../assets/GabPicture.jpg';

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Gradient background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-125 h-125 bg-linear-to-br from-emerald-400/15 via-teal-300/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-linear-to-tl from-cyan-400/10 via-emerald-300/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-75 h-75 bg-linear-to-bl from-violet-400/8 via-purple-300/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left fade-in-up order-2 lg:order-1">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-emerald-primary/15 to-teal-400/15 text-emerald-primary rounded-full text-sm font-semibold mb-6 border border-emerald-primary/20">
              Welcome to my portfolio
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary dark:text-text-primary-dark mb-5 leading-[1.1]">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                John&nbsp;Gabriel
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary dark:text-text-secondary-dark mb-5 font-medium leading-snug">
              Aspiring Full-Stack Web Developer
            </p>

            <p className="text-base sm:text-lg text-text-muted mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              BSIT Student &middot; Dean's Lister &middot; Problem Solver
              <br />
              Building modern web experiences with passion and precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-emerald-primary via-emerald-500 to-teal-500 hover:from-emerald-dark hover:via-emerald-primary hover:to-teal-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-emerald-primary/25 hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-emerald-primary text-emerald-primary hover:bg-linear-to-r hover:from-emerald-primary hover:to-teal-500 hover:text-white hover:border-transparent rounded-xl font-medium transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end scale-in order-1 lg:order-2">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-primary via-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20 scale-110" />

              {/* Image Container */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-88 lg:h-88">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-primary via-teal-400 to-cyan-500 rounded-full animate-[spin_8s_linear_infinite]" style={{ animationDuration: '8s' }} />
                <img
                  src={profileImage}
                  alt="John Gabriel M. Delicana - Full-Stack Web Developer"
                  className="absolute inset-1.5 w-[calc(100%-0.75rem)] h-[calc(100%-0.75rem)] rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 right-0 sm:-right-2 bg-white dark:bg-surface-dark px-5 py-2.5 rounded-xl shadow-xl border border-emerald-primary/30">
                <p className="text-sm font-bold bg-linear-to-r from-emerald-primary to-teal-500 bg-clip-text text-transparent whitespace-nowrap">
                  Available for Work
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-emerald-primary/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-linear-to-b from-emerald-primary to-teal-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
