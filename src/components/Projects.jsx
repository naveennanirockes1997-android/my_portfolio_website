import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDarkMode } = useTheme();
  const projects = [
    {
      title: "Weather Watch",
      category: "Frontend Application",
      description: "Real-time weather dashboard with 7-day forecast, humidity, and wind speed tracking using OpenWeather API.",
      image: "https://img.freepik.com/free-vector/realistic-weather-widget_1284-4092.jpg?semt=ais_wordcount_boost&w=740&q=80",
      tags: ["React", "API Integration", "TailwindCSS"],
      github: "https://github.com/naveennanirockes1997-android/weather-watch",
      demo: "https://weather-watch-snowy.vercel.app/"
    },
    {
      title: "Ice Cream Animi",
      category: "3D Experience",
      description: " immersive 3D scrolling product showcase featuring dynamic GSAP animations and interactive 3D elements.",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "GSAP", "Three.js", "Framer Motion"],
      github: "https://github.com/naveennanirockes1997-android/my_portfolio_website",
      demo: "https://ice-cream-brands.onrender.com"
    },
    {
      title: "Kanban Task Board",
      category: "Productivity Tool",
      description: "Trello-style task management application with drag-and-drop capabilities for efficient workflow tracking.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "DnD Kit", "Redux Toolkit", "Tailwind"],
      github: "https://github.com/naveennanirockes1997-android/kanban-task-board",
      demo: "https://kanban-task-board-k63x.onrender.com/"
    },
    {
      title: "Admin Dashboard",
      category: "Data Visualization",
      description: "Comprehensive admin panel featuring dark mode, interactive charts, and user management modules.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "Recharts", "Sass", "Context API"],
      github: "https://github.com/naveennanirockes1997-android/Admin-Dashboard/tree/main",
      demo: "https://admin-dashboard-ivory-alpha-71.vercel.app/"
    },
    {
      title: "Production Level Sass",
      category: "CSS Architecture",
      description: "Advanced SCSS implementation demonstrating modular architecture, mixins, and scalable styling patterns.",
      image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
      tags: ["Sass/SCSS", "BEM", "CSS Variables", "Responsive"],
      github: "https://github.com/naveennanirockes1997-android/production-level-Sass",
      demo: "https://production-level-sass.vercel.app/"
    },
    {
      title: "Ecommerce Store",
       category: "State Management",
      description: "Lightweight shopping cart application focusing on efficient state updates and component reusability.",
      image: "https://usabilitygeek.com/wp-content/uploads/2014/05/ecommerce-sticky-lead.jpg",
     
      tags: ["React", "Hooks", "CSS Modules"],
      github: "https://github.com/naveennanirockes1997-android/ecommerce-store",
      demo: "https://ecommerce-store-kappa-pink.vercel.app/"
    },
    {
      title: "Etvwin Demo UI",
      category: "Streaming UI",
      description: "Pixel-perfect clone of a streaming platform interface with responsive carousels and smooth transitions.",
      image: "https://www.businessapac.com/wp-content/uploads/2025/01/OTT-Platforms-in-India.jpg",
      tags: ["React", "Vite", "TailwindCSS", "Swiper"],
      github: "https://github.com/naveennanirockes1997-android/etvwin-demo-ui-",
      demo: "https://etvwin-demo-ui.vercel.app/"
    },
    {
      title: "Small Basket React",
      category: "MERN Stack",
      description: "Full-featured online store with secure checkout, product filtering, and admin inventory management.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
      tags: ["MERN", "Redux", "Stripe", "JWT"],
      github: "https://github.com/naveenvasamsetti/MERN_project_small_basket_React",
      demo: "#"
    },
    {
      title: "Recrue Job Portal",
      category: "Full Stack Development",
      description: "Modern job exploration platform with advanced filtering, real-time search, and seamless application tracking functionality.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop",
      tags: ["React", "JavaScript", "TailwindCSS", "API"],
      github: "https://github.com/naveennanirockes1997-android/job-portal",
      demo: "https://job-portal-cd2a.onrender.com/"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w-16 mb-4 bg-primary rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white text-gray-900">Featured Projects</h2>
          <p className="dark:text-gray-400 text-gray-600 text-center max-w-2xl">
            A small selection of my favorite projects from the past few years. High quality, production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group h-full relative dark:bg-white/2 bg-white border dark:border-white/10 border-gray-100 shadow-sm"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
            >
              {/* Spotlight Overlay */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                   style={{
                     background: isDarkMode 
                      ? `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.15), transparent 80%)`
                      : `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(99, 102, 241, 0.05), transparent 80%)`
                   }}
              />

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden z-10">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t dark:from-dark from-[#000]/40 to-transparent opacity-60" />
                 
                 {/* Links on hover */}
                 <div className="absolute top-4 right-4 flex gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full glass hover:bg-primary transition-colors text-white">
                       <Github size={18} />
                    </a>
                 </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow z-10 relative">
                <div className="flex items-center gap-2 text-primary mb-3">
                   <Layers size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-wider">{project.category || "Development"}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors dark:text-white text-gray-900">{project.title}</h3>
                <p className="dark:text-gray-400 text-gray-600 text-sm mb-6 line-clamp-3">
                   {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                   {project.tags.map((tag, i) => (
                     <span key={i} className="px-3 py-1 dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 rounded-full text-xs dark:text-gray-400 text-gray-600">
                        {tag}
                     </span>
                   ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-primary/10 border border-primary/20 text-primary rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 dark:bg-white/5 bg-gray-100 border dark:border-white/10 border-gray-200 dark:text-white text-gray-700 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                     Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
