import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="work" className="py-24 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-neutral-300 dark:border-neutral-800 pb-8">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tight">
            Selected<br />Work
          </h2>
          <p className="md:text-right mt-6 md:mt-0 max-w-sm text-neutral-500 dark:text-neutral-400">
            A collection of projects focusing on brand identity, commerce, and digital interaction.
          </p>
        </div>

        <div className="flex flex-col">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              href={project.link}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group block relative border-b border-neutral-200 dark:border-neutral-800 py-12 md:py-16 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900/50 cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 px-4">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight group-hover:translate-x-4 transition-transform duration-300">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-8 md:gap-20 text-sm md:text-base font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                  <span className="w-32">{project.category}</span>
                  <span>{project.year}</span>
                  <ArrowUpRight className={`w-6 h-6 transform transition-transform duration-300 ${project.link ? 'group-hover:rotate-45' : ''}`} />
                </div>
              </div>
              
              {/* Optional: Floating Image on Desktop */}
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  layoutId="projectImage"
                  className="hidden lg:block absolute z-10 top-1/2 right-[20%] w-[400px] h-[250px] -translate-y-1/2 pointer-events-none overflow-hidden rounded-lg shadow-2xl"
                >
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                </motion.div>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;