import { useState } from 'react';
import { Smartphone, Globe, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

// Bulsu-Handbook photos
import bulsu1 from '../../Bulsu-Handbook Photos/image.png';
import bulsu2 from '../../Bulsu-Handbook Photos/image copy.png';
import bulsu3 from '../../Bulsu-Handbook Photos/image copy 2.png';
import bulsu4 from '../../Bulsu-Handbook Photos/image copy 3.png';
import bulsu5 from '../../Bulsu-Handbook Photos/image copy 4.png';
import bulsu6 from '../../Bulsu-Handbook Photos/image copy 5.png';
import bulsu7 from '../../Bulsu-Handbook Photos/image copy 6.png';

// BookingNest photos
import booking1 from '../../BookingNest photos/image.png';
import booking2 from '../../BookingNest photos/image copy.png';
import booking3 from '../../BookingNest photos/image copy 2.png';
import booking4 from '../../BookingNest photos/image copy 3.png';
import booking5 from '../../BookingNest photos/image copy 4.png';
import booking6 from '../../BookingNest photos/image copy 5.png';

function ProjectModal({ project, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) return null;

  const images = project.images || [];
  const hasImages = images.length > 0;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white dark:bg-surface-dark rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Slideshow */}
        {hasImages ? (
          <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-2xl overflow-hidden">
            <img
              src={images[currentSlide]}
              alt={`${project.title} screenshot ${currentSlide + 1}`}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors duration-200"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                        idx === currentSlide
                          ? 'bg-white scale-110'
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 rounded-t-2xl flex items-center justify-center">
            <p className="text-text-secondary dark:text-text-secondary-dark text-sm">
              Photos coming soon
            </p>
          </div>
        )}

        {/* Info */}
        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-1">
            {project.title}
          </h3>
          <span
            className={`inline-block px-3 py-1 bg-linear-to-r ${project.gradient} bg-clip-text text-transparent text-xs font-bold mb-4 border border-gray-200 dark:border-gray-700 rounded-full`}
          >
            {project.category}
          </span>

          <p className="text-text-secondary dark:text-text-secondary-dark text-sm md:text-base leading-relaxed mb-5">
            {project.modalDescription || project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-text-secondary dark:text-text-secondary-dark text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Bulsu-E-Handbook',
      description: '',
      modalDescription: '',
      category: 'Mobile Application',
      icon: Smartphone,
      technologies: ['React Native', 'Firebase', 'Android', 'iOS', 'Mobile UI/UX'],
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      accentColor: 'emerald',
      image: bulsu1,
      images: [bulsu1, bulsu2, bulsu3, bulsu4, bulsu5, bulsu6, bulsu7],
      featured: true,
    },
    {
      id: 2,
      title: 'BookingNest',
      description: '',
      modalDescription: '',
      category: 'Web Application',
      icon: Globe,
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'REST API'],
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      accentColor: 'violet',
      image: booking1,
      images: [booking1, booking2, booking3, booking4, booking5, booking6],
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-28 relative overflow-hidden bg-white dark:bg-bg-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-linear-to-br from-violet-500/5 via-purple-400/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-linear-to-tl from-emerald-primary/5 via-teal-400/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Featured Projects"
          subtitle="Explore my recent work and development projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <article
                key={project.id}
                className="group fade-in-up cursor-pointer"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative bg-surface-light dark:bg-surface-dark rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-full flex flex-col border border-gray-200 dark:border-gray-700/60 hover:border-transparent">
                  {/* Gradient border glow on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm scale-[1.01]`}
                  />

                  {/* Top gradient accent bar */}
                  <div className={`h-1 bg-linear-to-r ${project.gradient}`} />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-5 right-4 z-10">
                      <span
                        className={`px-3 py-1 bg-linear-to-r ${project.gradient} text-white text-xs font-bold rounded-full shadow-md`}
                      >
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="w-full aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-12 h-12 text-gray-300 dark:text-gray-600" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex-1">
                    {/* Title and Category */}
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-2 group-hover:text-emerald-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-block px-3 py-1 bg-linear-to-r ${project.gradient} bg-clip-text text-transparent text-xs font-bold mb-4 border border-gray-200 dark:border-gray-700 rounded-full`}
                    >
                      {project.category}
                    </span>

                    {/* Description */}
                    <p className="text-text-secondary dark:text-text-secondary-dark text-sm md:text-base mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-white dark:bg-gray-800 text-text-secondary dark:text-text-secondary-dark text-xs font-medium rounded-md border border-gray-200 dark:border-gray-700 hover:border-emerald-primary/50 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
