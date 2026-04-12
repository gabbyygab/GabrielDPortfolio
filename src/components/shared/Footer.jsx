import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub',   icon: Github,   url: 'https://github.com/gabbyyygab',              gradient: 'from-gray-600 to-gray-800' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/johngabrieldelicana', gradient: 'from-blue-500 to-blue-700' },
    { name: 'Email',    icon: Mail,     url: 'mailto:delicanagabriel1212@gmail.com',         gradient: 'from-emerald-primary to-teal-500' },
  ];

  return (
    <footer className="relative bg-white dark:bg-bg-dark border-t border-gray-200/60 dark:border-gray-700/40 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-primary/40 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Centered content */}
        <div className="flex flex-col items-center gap-5">
          {/* Name */}
          <div className="text-center">
            <p className="text-lg font-bold bg-linear-to-r from-emerald-primary via-teal-400 to-cyan-400 bg-clip-text text-transparent mb-0.5">
              John Gabriel M. Delicana
            </p>
            <p className="text-sm text-text-secondary dark:text-text-secondary-dark">
              Aspiring Full-Stack Web Developer
            </p>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`w-9 h-9 bg-linear-to-br ${link.gradient} rounded-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-md`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gray-200/60 dark:bg-gray-700/40" />

          {/* Copyright */}
          <p className="text-sm text-text-muted">
            &copy; {currentYear} John Gabriel M. Delicana. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
