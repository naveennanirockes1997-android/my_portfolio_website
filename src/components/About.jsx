import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Rocket, User } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "2+", icon: Briefcase, color: "text-blue-400" },
    { label: "Projects Completed", value: "10+", icon: Rocket, color: "text-purple-400" },
    { label: "Production Apps", value: "3+", icon: Award, color: "text-orange-400" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w-16 mb-4 bg-primary rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
          <p className="text-gray-400 text-center max-w-2xl">
            A passionate MERN Stack Developer with a knack for building visually stunning and highly functional web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <User className="text-primary" /> Professional Summary
            </h3>
            <p className="text-gray-400 leading-relaxed">
              With over 2 years of experience in full-stack development, I specialize in the MERN stack (MongoDB, Express.js, React, Node.js). My expertise lies in creating responsive, user-centric interfaces and scalable server-side architectures.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I've had the privilege of working on high-traffic platforms like <strong>ETV WIN</strong> (an OTT platform), where I focused on optimizing UI performance and implementing complex authentication flows. I'm dedicated to writing clean, maintainable code and always staying ahead of the curve with modern technologies.
            </p>
            
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl glass-card text-center"
                >
                  <stat.icon className={`mx-auto mb-4 ${stat.color}`} size={28} />
                  <h4 className="text-3xl font-bold mb-1">{stat.value}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[3rem] rotate-6 scale-95 blur-sm" />
              <div className="absolute inset-0 border border-white/10 rounded-[3rem] -rotate-3 transition-transform hover:rotate-0 duration-500" />
              <div className="relative w-full h-full glass-card rounded-[3rem] overflow-hidden flex items-center justify-center group">
                 {/* Replace with actual image later or use a placeholder visual */}
                 <div className="absolute inset-0 bg-card p-12">
                   <div className="w-full h-full border border-primary/20 rounded-2xl overflow-hidden relative flex items-center justify-center bg-dark">
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary opacity-50 text-9xl font-black italic select-none"
                      >
                        NV
                      </motion.div>
                      <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-dark to-transparent">
                         <p className="text-xs font-mono text-primary mb-2">// console.log("Hello, World!")</p>
                         <h4 className="text-xl font-bold">Naveen Vasamsetti</h4>
                         <p className="text-sm text-gray-400">Software Engineer</p>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
