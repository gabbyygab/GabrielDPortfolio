import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/johngabriel',
      ariaLabel: 'Visit my GitHub profile',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/johngabrieldelicana',
      ariaLabel: 'Visit my LinkedIn profile',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:johngabriel@example.com',
      ariaLabel: 'Send me an email',
      gradient: 'from-emerald-primary to-teal-500',
    },
  ];

  return (
    <footer className="relative bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-700/60 overflow-hidden">
      {/* Top gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-primary/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Name and Tagline */}
          <div className="text-center md:text-left">
            <p className="text-base font-bold text-text-primary dark:text-text-primary-dark mb-0.5">
              <span className="bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                John Gabriel M. Delicana
              </span>
            </p>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
              Aspiring Full-Stack Web Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className={`p-2 rounded-lg bg-linear-to-br ${link.gradient} text-white transition-all duration-300 hover:scale-110 hover:shadow-md`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-5 border-t border-gray-200 dark:border-gray-700/60 text-center">
          <p className="text-sm text-text-muted flex items-center justify-center gap-1">
            &copy; {currentYear} John Gabriel M. Delicana. Made with{' '}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
}
