import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col md:flex-row items-center md:justify-between px-6 md:px-12 pt-32 pb-20 gap-12 max-w-[90rem] mx-auto overflow-hidden"
    >
      {/* Typography */}
      <div className="w-full md:w-1/2 order-2 md:order-1 relative z-10 flex flex-col justify-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl font-light mb-8 max-w-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
        >
          Specializing in crafting digital experiences that merge function with brutalist aesthetics.
        </motion.h2>

        {/* Staggered Text Reveal */}
        <div className="flex flex-col">
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    Graphic
                </motion.h1>
            </div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.35, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    <span className="text-neutral-400 dark:text-neutral-600">&</span> Web
                </motion.h1>
            </div>

             <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    className="text-[12vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.85] font-black tracking-tighter uppercase block"
                >
                    Designer
                </motion.h1>
            </div>
        </div>
          
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-10 flex items-center gap-4"
        >
             <div className="h-[1px] bg-current w-16"></div>
             <span className="uppercase tracking-widest text-xs font-medium">Scroll to explore</span>
        </motion.div>
      </div>

      {/* Floating Image Section */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
         className="w-full md:w-[50%] h-[400px] md:h-[600px] flex justify-center items-center order-1 md:order-2 relative z-0"
      >
        <motion.div
           animate={{ 
             y: [-20, 20, -20],
             rotate: [0, 5, -5, 0], // Subtle rotation
           }}
           transition={{ 
             repeat: Infinity, 
             duration: 8, 
             ease: "easeInOut" 
           }}
           className="relative w-full max-w-[500px] aspect-square flex items-center justify-center"
        >
             {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-200 to-transparent dark:from-neutral-800 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            <img 
              src="https://i.imgur.com/FmYJO3s.png" 
              alt="Portrait" 
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;