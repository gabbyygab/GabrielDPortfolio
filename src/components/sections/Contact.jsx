import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'delicanagabriel1212@gmail.com',
      link: 'mailto:delicanagabriel1212@gmail.com',
      gradient: 'from-emerald-500/15 to-teal-500/15',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 994 577 1623',
      link: 'tel:+639945771623',
      gradient: 'from-violet-500/15 to-purple-500/15',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cambaog, Bustos, Bulacan',
      link: null,
      gradient: 'from-amber-500/15 to-orange-500/15',
    },
  ];

  const socialLinks = [
    { icon: Github,   label: 'GitHub',   url: 'https://github.com/gabbyygab',                                          gradient: 'from-gray-600 to-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-delicana-682ba8355/', gradient: 'from-blue-500 to-blue-700' },
    { icon: Mail,     label: 'Email',    url: 'mailto:delicanagabriel1212@gmail.com',         gradient: 'from-emerald-primary to-teal-500' },
  ];

  return (
    <section
      id="contact"
      className="py-14 md:py-16 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-40 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 dot-grid opacity-[0.025] dark:opacity-[0.04]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Me"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
        />

        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6 fade-in-up">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            const inner = (
              <div className="group flex flex-col items-center text-center p-6 bg-surface-light dark:bg-surface-dark rounded-2xl border border-gray-200/80 dark:border-gray-700/50 hover:border-emerald-primary/40 transition-all duration-300 hover:shadow-lg h-full">
                <div className={`w-12 h-12 bg-linear-to-br ${info.gradient} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5 text-emerald-primary" />
                </div>
                <p className="text-xs text-text-muted font-semibold uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-sm font-semibold text-text-primary dark:text-text-primary-dark leading-snug">{info.value}</p>
              </div>
            );
            return info.link ? (
              <a key={index} href={info.link} className="block fade-in-up" style={{ transitionDelay: `${index * 60}ms` }}>{inner}</a>
            ) : (
              <div key={index} className="fade-in-up" style={{ transitionDelay: `${index * 60}ms` }}>{inner}</div>
            );
          })}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4 fade-in-up" style={{ transitionDelay: '200ms' }}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`group flex items-center gap-2 px-5 py-2.5 bg-linear-to-r ${social.gradient} rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg`}
              >
                <Icon className="w-4 h-4" />
                {social.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
