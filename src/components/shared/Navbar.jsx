import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const NAV_LINKS = [
  { id: 'home',     label: 'Home' },
  { id: 'about',   label: 'About' },
  { id: 'skills',  label: 'Skills' },
  { id: 'projects',  label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact',   label: 'Contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen]   = useState(false);
  const [isScrolled, setIsScrolled]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollY = window.scrollY + 120;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollY) { setActiveSection(ids[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setIsMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 dark:bg-bg-dark/85 backdrop-blur-xl shadow-sm shadow-black/[0.06] dark:shadow-black/30 border-b border-gray-200/50 dark:border-gray-700/30'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-4 sm:px-6"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-xl md:text-2xl font-bold transition-opacity duration-200 hover:opacity-80"
          >
            <span className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              John Gabriel
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-emerald-primary bg-emerald-primary/10'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-emerald-primary hover:bg-emerald-primary/6'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-primary" />
                )}
              </button>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="p-2 rounded-xl text-text-primary dark:text-text-primary-dark hover:bg-emerald-primary/10 transition-colors duration-200"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1 bg-white/95 dark:bg-bg-dark/95 backdrop-blur-xl rounded-2xl px-2 border border-gray-200/60 dark:border-gray-700/50 shadow-xl">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-200 text-sm ${
                  activeSection === link.id
                    ? 'text-emerald-primary bg-emerald-primary/10'
                    : 'text-text-secondary dark:text-text-secondary-dark hover:text-emerald-primary hover:bg-emerald-primary/6'
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
