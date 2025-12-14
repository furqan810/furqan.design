import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 pt-32 pb-20 gap-12 max-w-[90rem] mx-auto"
    >
      {/* Typography */}
      <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
           <h2 className="text-lg md:text-xl font-light mb-6 max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Specializing in crafting digital experiences that merge function with brutalist aesthetics.
          </h2>

          <h1 className="text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase break-words">
            Graphic<br />
            <span className="text-neutral-400 dark:text-neutral-600">&</span> Web<br />
            Designer
          </h1>
          
          <div className="mt-10 flex items-center gap-4">
             <div className="h-[1px] bg-current w-16"></div>
             <span className="uppercase tracking-widest text-xs font-medium">Scroll to explore</span>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
         className="w-full md:w-[40%] lg:w-[35%] order-1 md:order-2 flex justify-center md:justify-end"
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
            {/* 
               IMPORTANT: Ensure 'furqan.jpg' is saved in your project's public/root folder.
               We use ./furqan.jpg to support relative paths.
            */}
            <img 
                src="./furqan.jpg" 
                alt="Furqan Nazir" 
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  // Fallback to a placeholder if the local image is missing
                  target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop";
                }}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;