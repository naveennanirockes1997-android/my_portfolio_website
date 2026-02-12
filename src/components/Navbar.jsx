import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 glass border-b border-white/10 dark:border-white/10 border-gray-200' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter dark:text-white text-gray-900"
        >
          NV<span className="text-primary">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium dark:text-gray-300 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-4 ml-4 border-l dark:border-white/10 border-gray-200 pl-6"
          >
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-600 hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="https://github.com/naveennanirockes1997-android" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vasamsetti-naveen-86-814538390/" target="_blank" rel="noopener noreferrer" className="dark:text-gray-400 text-gray-600 dark:hover:text-white hover:text-gray-900 transition-colors">
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full dark:bg-white/5 bg-gray-100 dark:text-gray-400 text-gray-600 hover:text-primary transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="dark:text-white text-gray-900 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b dark:border-white/10 border-gray-200 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium dark:text-gray-300 text-gray-600 dark:hover:text-primary hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex space-x-6 pt-6 border-t dark:border-white/10 border-gray-200">
                <Github size={24} className="dark:text-gray-400 text-gray-600" />
                <Linkedin size={24} className="dark:text-gray-400 text-gray-600" />
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mail size={24} className="dark:text-gray-400 text-gray-600 hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
