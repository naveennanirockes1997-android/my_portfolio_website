import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings, Terminal, ShieldCheck } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
        { name: "TailwindCSS", level: "Expert" },
        { name: "HTML5/CSS3", level: "Expert" }
      ]
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Express.js", level: "Advanced" },
        { name: "MongoDB", level: "Intermediate" },
        { name: "JWT Auth", level: "Advanced" }
      ]
    },
    {
      title: "Tools",
      icon: Settings,
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Vercel", level: "Advanced" },
        { name: "Docker", level: "Beginner" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w-16 mb-4 bg-primary rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white text-gray-900">Technical Skills</h2>
          <p className="dark:text-gray-400 text-gray-600 text-center max-w-2xl">
            My diverse toolkit allows me to build robust applications from scratch, focusing on performance and scalability.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              variants={itemVariants}
              className="glass-card p-8 rounded-3xl relative group dark:bg-white/2 bg-white border dark:border-white/10 border-gray-100 shadow-sm"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] dark:opacity-10 group-hover:opacity-20 transition-opacity">
                 <group.icon size={80} />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <group.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold mb-8 dark:text-white text-gray-900">{group.title}</h3>
                
                <div className="space-y-6">
                  {group.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                       <div className="flex justify-between items-center mb-1">
                          <span className="dark:text-gray-300 text-gray-700 font-medium">{skill.name}</span>
                          <span className="text-[10px] text-primary uppercase font-bold tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">{skill.level}</span>
                       </div>
                       <div className="h-1.5 w-full dark:bg-white/5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '85%' : '65%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                          />
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
