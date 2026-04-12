import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import profileImage from '../../assets/GabPicture.jpg';

const TYPING_PHRASES = [
  'Aspiring Full-Stack Developer',
  'Problem Solver',
  'Chess Player',
  'Logical Thinker',
];

const TYPE_SPEED   = 70;
const DELETE_SPEED = 40;
const PAUSE_AFTER  = 1600;
const PAUSE_BEFORE = 400;

function useTypingAnimation(phrases) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];

    if (isPaused) {
      const id = setTimeout(() => setIsPaused(false), isDeleting ? PAUSE_BEFORE : PAUSE_AFTER);
      return () => clearTimeout(id);
    }

    if (!isDeleting && displayed === current) {
      setIsPaused(true);
      setIsDeleting(true);
      return;
    }

    if (isDeleting && displayed === '') {
      setIsPaused(true);
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const id = setTimeout(() => {
      setDisplayed(isDeleting ? current.slice(0, displayed.length - 1) : current.slice(0, displayed.length + 1));
    }, isDeleting ? DELETE_SPEED : TYPE_SPEED);

    return () => clearTimeout(id);
  }, [displayed, phraseIdx, isDeleting, isPaused, phrases]);

  return displayed;
}

export default function Hero() {
  const typedText = useTypingAnimation(TYPING_PHRASES);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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

            {/* Role — typing animation */}
            <p
              className="text-lg sm:text-xl text-text-secondary dark:text-text-secondary-dark font-medium mb-3 slide-in-left"
              style={{ transitionDelay: '150ms' }}
            >
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-5 bg-emerald-primary ml-0.5 align-middle animate-[blink_1s_step-end_infinite]" />
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
