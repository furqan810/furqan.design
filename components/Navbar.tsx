import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS, USER_DATA } from '../constants';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset for fixed navbar (80px) plus a little breathing room
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
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-white/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-sm' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex justify-between items-start">
          
          {/* Logo Area */}
          <div className="flex flex-col relative z-50">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-xl font-bold tracking-tight uppercase"
            >
              {USER_DATA.name}
            </a>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 tracking-wide hidden md:block">
              {USER_DATA.role}
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium uppercase tracking-widest hover:opacity-50 transition-opacity cursor-pointer"
              >
                {item.label}
              </a>
            ))}
            <button 
              onClick={toggleTheme}
              className="w-4 h-4 rounded-full border border-current hover:bg-current transition-colors"
              aria-label="Toggle Theme"
            />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-sm font-medium uppercase tracking-widest relative z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900 z-40 flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-4xl font-bold uppercase tracking-tight hover:text-neutral-500 transition-colors"
                >
                  {item.label}
                </a>
              ))}
               <button 
                onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
                className="mt-8 text-sm uppercase tracking-widest border-b border-current pb-1"
              >
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;