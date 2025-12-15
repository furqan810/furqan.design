import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
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
           <span className="uppercase tracking-widest text-sm font-medium mb-4 block">Capabilities</span>
           <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight max-w-3xl">
            We build digital products from concept to launch.
           </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-300 dark:border-neutral-800">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-r border-b border-neutral-300 dark:border-neutral-800 p-8 flex flex-col justify-between min-h-[300px] hover:bg-white dark:hover:bg-black transition-colors duration-300"
            >
              <div>
                <span className="text-xs font-mono mb-8 block opacity-50">({service.id})</span>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
              </div>
              
              <ul className="space-y-1">
                {service.tags.map(tag => (
                   <li key={tag} className="text-xs uppercase tracking-wider opacity-60">• {tag}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;