import React, { useEffect } from 'react';
import Home from './pages/Home';
import { useTheme } from './context/ThemeContext';

function App() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';

    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#050505] bg-gray-50 dark:text-white text-gray-900 selection:bg-primary/30 selection:text-primary relative transition-colors duration-300">
      <div 
        className="fixed inset-0 pointer-events-none z-[9999] opacity-100"
        style={{
          background: isDarkMode 
            ? `radial-gradient(circle 250px at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0.25) 100%)`
            : `radial-gradient(circle 250px at var(--mouse-x, -100px) var(--mouse-y, -100px), rgba(99, 102, 241, 0.08) 0%, rgba(255, 255, 255, 0) 100%)`
        }}
      />
      
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] dark:bg-primary/10 bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] dark:bg-secondary/10 bg-secondary/5 rounded-full blur-[100px] animate-pulse-slow delay-700" />
      </div>
      
      <Home />
    </div>
  );
}

export default App;
