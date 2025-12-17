import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind lg breakpoint is 1024px. 
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-neutral-100 dark:bg-neutral-900 scroll-mt-20">
      <div className="max-w-[90rem] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
           <span className="uppercase tracking-widest text-sm font-medium mb-4 block">Services</span>
           <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight max-w-4xl">
            Comprehensive solutions for your e-commerce journey.
           </h2>
           <p className="mt-6 text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
            From the first pixel to the first sale, I've got you covered.
           </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-300 dark:border-neutral-800">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1, duration: 0.5 }
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: isDesktop ? 1.05 : 1.02, 
                zIndex: 50,
                boxShadow: isDesktop ? "0 40px 80px -20px rgba(0, 0, 0, 0.3)" : "0 10px 20px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 }
              }}
              className="border-r border-b border-neutral-300 dark:border-neutral-800 p-8 flex flex-col min-h-[400px] hover:bg-white dark:hover:bg-black transition-colors duration-200 relative origin-center"
            >
              <div>
                <span className="text-xs font-mono mb-8 block opacity-50">({service.id})</span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8">
                <ul className="space-y-3">
                    {service.tags.map(tag => (
                    <li key={tag} className="text-xs font-medium uppercase tracking-wider opacity-80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-current rounded-full"></span>
                        {tag}
                    </li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;