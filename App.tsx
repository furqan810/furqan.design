import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Initialize to dark mode by default for Keya Vadgama aesthetic
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('theme');
    // If no saved theme, default to true (Dark)
    if (!savedTheme) return true;
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-500 selection:bg-foreground selection:text-background">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main>
        {/* Order: About -> Work -> Services -> Contact */}
        <Hero />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;