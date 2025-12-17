import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollIntoView = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-6 md:px-12 pt-32 pb-20 gap-12 max-w-[90rem] mx-auto relative overflow-hidden lg:overflow-visible"
    >
      {/* Typography Content */}
      <div className="w-full lg:w-3/5 order-2 lg:order-1 relative z-10 flex flex-col justify-center">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
           className="mb-8 flex items-center gap-3"
        >
          <span className="h-[1px] w-8 bg-current opacity-30"></span>
          <span className="uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold opacity-60">Visuals • Strategy • Results</span>
        </motion.div>

        {/* Big Impact Text - Elegantly Balanced Spacing */}
        <div className="flex flex-col mb-14">
            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1.1] font-black tracking-[-0.03em] uppercase block"
                >
                    Graphic &
                </motion.h1>
            </div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1.1] font-black tracking-[-0.03em] uppercase block"
                >
                    E-commerce
                </motion.h1>
            </div>

            <div className="overflow-hidden">
                <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[10vw] md:text-[6.5vw] lg:text-[5.5vw] leading-[1.1] font-black tracking-[-0.03em] uppercase block"
                >
                    Expert
                </motion.h1>
            </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="max-w-lg"
        >
          <div className="flex flex-wrap items-center gap-6">
            <motion.a 
              href="#work"
              onClick={(e) => scrollIntoView(e, 'work')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-foreground text-background text-xs font-bold uppercase tracking-widest rounded-full transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
            >
              View Work
            </motion.a>
            <motion.a 
              href="#contact"
              onClick={(e) => scrollIntoView(e, 'contact')}
              whileHover={{ x: 5, opacity: 0.7 }}
              className="text-xs font-bold uppercase tracking-widest border-b-2 border-current pb-1 transition-all"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Floating Image Section */}
      <motion.div 
         initial={{ opacity: 0, scale: 0.85 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
         className="w-full lg:w-2/5 h-[450px] md:h-[600px] flex justify-center items-center order-1 lg:order-2 relative"
      >
        <motion.div
           animate={{ 
             y: [-15, 15, -15],
             rotate: [0, 1, -1, 0],
           }}
           transition={{ 
             repeat: Infinity, 
             duration: 12, 
             ease: "easeInOut" 
           }}
           className="relative w-full h-full flex items-center justify-center group"
        >
            {/* Soft decorative background blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[70%] bg-neutral-300/40 dark:bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none transition-colors duration-1000" />
            
            <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
              <div className="w-full max-w-[450px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10 dark:border-white/5">
                <img 
                  src="https://i.imgur.com/7Camyxc.png" 
                  alt="Furqan Nazir" 
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 transform hover:scale-[1.05]"
                />
              </div>
            </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;