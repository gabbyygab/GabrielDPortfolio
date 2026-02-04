import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form submission logic (integrate with Formspree, EmailJS, or your backend)
    setFormStatus({
      type: 'success',
      message: 'Thank you for your message! I will get back to you soon.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    // Clear status message after 5 seconds
    setTimeout(() => {
      setFormStatus({ type: '', message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'johngabriel@example.com',
      link: 'mailto:johngabriel@example.com',
      gradient: 'from-emerald-500/15 to-teal-500/15',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 XXX XXX XXXX',
      link: 'tel:+63XXXXXXXXXX',
      gradient: 'from-violet-500/15 to-purple-500/15',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Philippines',
      link: null,
      gradient: 'from-amber-500/15 to-orange-500/15',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/johngabriel',
      gradient: 'from-gray-700 to-gray-900',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/johngabrieldelicana',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:johngabriel@example.com',
      gradient: 'from-emerald-primary to-teal-500',
    },
  ];

  const inputClasses =
    'w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-emerald-primary focus:ring-2 focus:ring-emerald-primary/20 outline-none transition-all duration-200 text-text-primary dark:text-text-primary-dark placeholder:text-text-muted';

  return (
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-linear-to-bl from-emerald-primary/5 via-teal-400/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-linear-to-tr from-violet-500/5 via-purple-400/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mt-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="fade-in-up">
              <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-3">
                Let's Connect
              </h3>
              <p className="text-text-secondary dark:text-text-secondary-dark leading-relaxed">
                I'm currently looking for opportunities to contribute to exciting projects
                and collaborate with talented teams. Feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <div className="group flex items-center gap-4 p-4 bg-surface-light dark:bg-surface-dark rounded-xl hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 border border-gray-200 dark:border-gray-700/60 hover:border-emerald-primary/50 hover:shadow-md">
                    <div className={`w-11 h-11 bg-linear-to-br ${info.gradient} rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-5 h-5 text-emerald-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted font-medium mb-0.5">
                        {info.label}
                      </p>
                      <p className="text-sm font-semibold text-text-primary dark:text-text-primary-dark">
                        {info.value}
                      </p>
                    </div>
                  </div>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block fade-in-up" style={{ transitionDelay: `${index * 80}ms` }}>
                    {content}
                  </a>
                ) : (
                  <div key={index} className="fade-in-up" style={{ transitionDelay: `${index * 80}ms` }}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="fade-in-up">
              <h4 className="text-base font-bold text-text-primary dark:text-text-primary-dark mb-3">
                Follow Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`group w-11 h-11 bg-linear-to-br ${social.gradient} rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg text-white`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 fade-in-up">
            <form
              onSubmit={handleSubmit}
              className="relative bg-surface-light dark:bg-surface-dark rounded-2xl p-6 md:p-8 shadow-md border border-gray-200 dark:border-gray-700/60 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-emerald-500 via-teal-500 to-cyan-500" />

              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
                Send Me a Message
              </h3>

              {/* Status Message */}
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-xl text-sm font-medium ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-primary/10 text-emerald-primary border border-emerald-primary/30'
                      : 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    className={inputClasses}
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    rows="5"
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-linear-to-r from-emerald-primary via-emerald-500 to-teal-500 hover:from-emerald-dark hover:via-emerald-primary hover:to-teal-400 text-white rounded-xl font-medium transition-all duration-300 shadow-lg shadow-emerald-primary/20 hover:shadow-xl hover:shadow-emerald-primary/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
