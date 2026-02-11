import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import resume from '../assets/resumeAsDocument.pdf';

const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col space-y-8"
        >
          <motion.div variants={item}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Open for opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Hi, I'm <br />
              <span className="text-gradient">Naveen Vasamsetti</span>
            </h1>
            <div className="h-12 mt-2 flex items-center">
               <motion.p 
                 initial={{ width: 0 }}
                 animate={{ width: "fit-content" }}
                 transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
                 className="text-xl md:text-2xl text-gray-400 font-medium overflow-hidden whitespace-nowrap border-r-2 border-primary pr-2"
               >
                MERN Stack Developer
              </motion.p>
            </div>
          </motion.div>

          <motion.p variants={item} className="text-lg text-gray-400 max-w-lg">
            Building scalable web applications with React, Node.js & MongoDB. Specializing in high-performance frontend interfaces and robust backend architectures.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-primary rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={resume} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all glass"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-6 pt-4">
            {[
              { icon: Github, href: "https://github.com/naveenvasamsetti" },
              { icon: Linkedin, href: "https://linkedin.com/in/naveen-vasamsetti" },
              { icon: Mail, href: "mailto:naveenvasamsetti86@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-gray-400 hover:text-primary"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero Illustration / Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden md:flex justify-center items-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Decorative Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 border border-secondary/20 rounded-full"
            />
            
            {/* Visual Element */}
            <div className="absolute inset-10 rounded-3xl overflow-hidden glass-card flex items-center justify-center shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10" />
               <motion.div
                 animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="z-10 text-primary"
               >
                 <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                 </svg>
               </motion.div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg border border-white/10 text-sm font-medium"
            >
              React Specialist
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg border border-white/10 text-sm font-medium"
            >
              MERN Stack
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
