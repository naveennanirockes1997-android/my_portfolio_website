import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      period: "Jan 2025 – Present",
      location: "Remote",
      description: "Building production-ready applications with modern tech stacks.",
      achievements: [
        "Implemented JWT authentication systems and CRUD APIs",
        "Integrated payment gateways like Stripe & PayPal",
        "Deployed applications on Vercel and Netlify for production",
        "Optimized database queries for improved response times"
      ]
    },
    {
      title: "Frontend Developer",
      company: "ETV WIN",
      period: "Apr 2023 – Apr 2024",
      location: "Hyderabad, India",
      description: "Contributed to building high-traffic OTT platform features.",
      achievements: [
        "Built modular and reusable UI features for large-scale application",
        "Integrated authentication & subscription APIs with frontend logic",
        "Optimized frontend performance by reducing initial load time",
        "Collaborated with backend teams to refine API endpoints"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w-16 mb-4 bg-primary rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white text-gray-900">Professional Experience</h2>
          <p className="dark:text-gray-400 text-gray-600 text-center max-w-2xl">
            My journey in the tech world has been driven by a passion for solving problems and creating value.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto mt-20">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px dark:bg-white/10 bg-gray-200" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2 w-8 h-8 rounded-full dark:bg-dark bg-white border-4 border-primary z-10 hidden md:block" />
                
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="glass-card p-8 rounded-3xl hover:border-primary/30 transition-all duration-500 dark:bg-white/2 bg-white border dark:border-white/10 border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4 text-primary text-sm font-semibold">
                       <Calendar size={14} />
                       {exp.period}
                    </div>
                    <h3 className="text-2xl font-bold mb-1 dark:text-white text-gray-900">{exp.title}</h3>
                    <div className="flex items-center gap-2 dark:text-gray-400 text-gray-500 text-sm mb-6">
                       <span className="font-medium dark:text-white/80 text-gray-700">{exp.company}</span>
                       <span className="opacity-30">•</span>
                       <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                       </div>
                    </div>
                    
                    <ul className="space-y-3">
                       {exp.achievements.map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm dark:text-gray-400 text-gray-600">
                            <span className="text-primary mt-1">•</span>
                            {item}
                         </li>
                       ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Desktop Empty Spacer */}
                <div className="hidden md:block w-2/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
