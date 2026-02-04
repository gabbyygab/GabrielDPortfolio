import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll position for navbar background + active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.id);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine which section is in view
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-bg-dark/80 backdrop-blur-md shadow-lg shadow-black/[0.04] dark:shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary-dark hover:text-emerald-primary transition-colors duration-200"
          >
            <span className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">JGD</span>
            <span className="text-emerald-primary">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-emerald-primary bg-linear-to-r from-emerald-primary/10 to-teal-400/10'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-emerald-primary hover:bg-emerald-primary/5'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-text-primary dark:text-text-primary-dark hover:bg-emerald-primary/10 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-nav"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-112 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1 bg-white/90 dark:bg-bg-dark/90 backdrop-blur-lg rounded-xl px-2 border border-gray-200/60 dark:border-gray-700/60 shadow-lg">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-emerald-primary bg-linear-to-r from-emerald-primary/10 to-teal-400/10'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-emerald-primary hover:bg-emerald-primary/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
