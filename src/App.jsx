import React, { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    // Smooth scroll behavior for the entire app
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-primary/30 selection:text-primary">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] animate-pulse-slow delay-700" />
      </div>
      
      <Home />
    </div>
  );
}

export default App;
