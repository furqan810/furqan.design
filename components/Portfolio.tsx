import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, X, ExternalLink, CheckCircle } from 'lucide-react';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null; // Prevent infinite loop
    // Set a subtle, abstract fallback image
    e.currentTarget.src = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop";
  };

  return (
    <section id="work" className="py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-[90rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-300 dark:border-neutral-800 pb-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Selected<br />Work
          </h2>
          <p className="md:text-right mt-6 md:mt-0 max-w-sm text-neutral-500 dark:text-neutral-400">
            A collection of projects focusing on brand identity, commerce, and digital interaction.
          </p>
        </motion.div>

        <div className="flex flex-col relative">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-container-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group block relative border-b border-neutral-200 dark:border-neutral-800 py-12 md:py-16 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 px-4 relative z-20">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-8 md:gap-20 text-sm md:text-base font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <span className="w-32">{project.category}</span>
                  <span>{project.year}</span>
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all">
                     <span className="sr-only">View Case Study</span>
                     <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Floating Image on Hover */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    transition={{ duration: 0.3 }}
                    className="hidden lg:block absolute z-30 top-1/2 right-[25%] w-[450px] h-[300px] -translate-y-1/2 pointer-events-none rounded-lg overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-700 bg-white"
                    >
                    <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover" 
                        onError={handleImageError}
                    />
                    </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div 
                layoutId={`project-container-${selectedProject.id}`}
                className="w-full max-w-5xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-2xl relative flex flex-col z-[110]"
            >
                {/* Header */}
                <div className="p-6 md:p-8 flex justify-between items-start border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-20">
                    <div>
                        <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                            {selectedProject.title}
                        </h3>
                        <div className="flex gap-4 text-sm uppercase tracking-widest text-neutral-500">
                            <span>{selectedProject.category}</span>
                            <span>•</span>
                            <span>{selectedProject.year}</span>
                        </div>
                    </div>
                    <button 
                        onClick={() => setSelectedProject(null)}
                        className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Scrollable Body */}
                <div className="overflow-y-auto p-6 md:p-8">
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-8 bg-neutral-100 dark:bg-neutral-800">
                        <img 
                            src={selectedProject.imageUrl} 
                            alt={selectedProject.title} 
                            className="w-full h-full object-cover"
                            onError={handleImageError}
                        />
                    </div>

                    {selectedProject.extendedDetails ? (
                      /* Rich Content Layout */
                      <div className="space-y-12">
                         {/* Meta Data Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Role</h4>
                                <p className="font-medium">{selectedProject.extendedDetails.role}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Platform</h4>
                                <p className="font-medium">{selectedProject.extendedDetails.platform}</p>
                            </div>
                             <div>
                                <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">Website</h4>
                                {selectedProject.link ? (
                                   <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                                     Visit Live Site <ExternalLink className="w-3 h-3" />
                                   </a>
                                ) : (
                                  <span className="opacity-50">Offline</span>
                                )}
                            </div>
                         </div>

                         {/* Client Overview */}
                         <div>
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-4">Client Overview</h4>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                              {selectedProject.extendedDetails.clientOverview}
                            </p>
                         </div>

                         {/* Challenge & Solution Grid */}
                         <div className="grid md:grid-cols-2 gap-12">
                            <div>
                               <h4 className="text-xl font-bold uppercase tracking-tight mb-4">The Challenge</h4>
                               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                 {selectedProject.extendedDetails.challenge}
                               </p>
                            </div>
                            <div>
                               <h4 className="text-xl font-bold uppercase tracking-tight mb-4">The Solution</h4>
                               <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                 {selectedProject.extendedDetails.solution}
                               </p>
                            </div>
                         </div>

                         {/* Features & Tech Stack */}
                         <div className="grid md:grid-cols-3 gap-12 p-8 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl">
                            <div className="md:col-span-2">
                               <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Key Features</h4>
                               <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  {selectedProject.extendedDetails.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                               </ul>
                            </div>
                            <div>
                               <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-6">Tools Used</h4>
                               <div className="flex flex-wrap gap-2">
                                  {selectedProject.extendedDetails.techStack.map((tech, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-white dark:bg-neutral-700 rounded-full text-xs font-medium border border-neutral-200 dark:border-neutral-600">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                            </div>
                         </div>

                         {/* Results */}
                         <div className="border-l-4 border-current pl-6 py-2">
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2">The Result</h4>
                            <p className="text-lg italic text-neutral-600 dark:text-neutral-300">
                              "{selectedProject.extendedDetails.result}"
                            </p>
                         </div>

                         {/* Gallery */}
                         {selectedProject.extendedDetails.images && (
                           <div className="space-y-4">
                             <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Project Gallery</h4>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {selectedProject.extendedDetails.images.map((img, idx, arr) => {
                                  // Layout Pattern: Wide (0) -> Split (1,2) -> Wide (3) -> Split (4,5)
                                  // We use simple modulo logic.
                                  // Standard full width indices: 0, 3, 6... (idx % 3 === 0)
                                  
                                  let isFullWidth = idx % 3 === 0;

                                  // Edge case: If the last item is in a "split" position (e.g., idx 4),
                                  // but there is no partner (idx 5 does not exist), make it full width to fill gap.
                                  const isLastItem = idx === arr.length - 1;
                                  if (isLastItem && idx % 3 === 1) {
                                    isFullWidth = true;
                                  }

                                  return (
                                    <div key={idx} className={`rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-800 ${isFullWidth ? 'md:col-span-2 aspect-[21/9]' : 'aspect-video'}`}>
                                      <img 
                                        src={img} 
                                        alt="Project detail" 
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                                        onError={handleImageError}
                                      />
                                    </div>
                                  )
                                })}
                             </div>
                           </div>
                         )}

                      </div>
                    ) : (
                      /* Fallback / Standard Layout for projects without extended details */
                      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                          <div className="md:col-span-2 space-y-6">
                              <h4 className="text-xl font-bold uppercase tracking-tight">Project Overview</h4>
                              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-lg">
                                  {selectedProject.caseStudy}
                              </p>
                          </div>

                          <div className="space-y-6">
                              {selectedProject.link && (
                                  <div className="space-y-2">
                                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Links</h4>
                                      <a 
                                          href={selectedProject.link} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium"
                                      >
                                          Visit Live Site <ExternalLink className="w-4 h-4" />
                                      </a>
                                  </div>
                              )}
                              <div className="space-y-2">
                                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Year</h4>
                                      <p>{selectedProject.year}</p>
                              </div>
                              <div className="space-y-2">
                                      <h4 className="text-sm font-bold uppercase tracking-widest text-neutral-500">Services</h4>
                                      <p>{selectedProject.category}</p>
                              </div>
                          </div>
                      </div>
                    )}
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;