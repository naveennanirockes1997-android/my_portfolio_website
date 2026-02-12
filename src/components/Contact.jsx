import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "a480134e-5262-4a59-82f6-3246afdc998e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: '', email: '', message: '' });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Something went wrong!");
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "naveenvasamsetti86@gmail.com", href: "mailto:naveenvasamsetti86@gmail.com" },
    { icon: Phone, label: "Phone", value: "7075158164", href: "tel:7075158164" },
    { icon: MapPin, label: "Location", value: "Kakinada, Andhra Pradesh", href: "#" }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-1 w-16 mb-4 bg-primary rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white text-gray-900">Get In Touch</h2>
          <p className="dark:text-gray-400 text-gray-600 text-center max-w-2xl">
            Have a project in mind? Let's build something amazing together. Reach out via the form or social media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 dark:text-white text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <a 
                    key={idx}
                    href={info.href}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-2xl dark:bg-primary/10 bg-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                       <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{info.label}</p>
                      <p className="text-lg font-medium dark:text-gray-200 text-gray-700 group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 dark:text-white text-gray-900">Follow Me</h3>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/naveennanirockes1997-android" },
                  { Icon: Linkedin, href: "https://www.linkedin.com/in/vasamsetti-naveen-86-814538390/" },
                  { Icon: Twitter, href: "#" }
                ].map((social, idx) => (
                  <motion.a 
                    key={idx}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass border dark:border-white/10 border-gray-200 flex items-center justify-center dark:text-gray-400 text-gray-600 hover:text-primary transition-colors"
                  >
                    <social.Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-[2.5rem] dark:bg-white/2 bg-white border dark:border-white/10 border-gray-100 shadow-xl"
          >
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold dark:text-gray-400 text-gray-600 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors placeholder-gray-400"
                    placeholder="enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold dark:text-gray-400 text-gray-600 ml-1">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors placeholder-gray-400"
                    placeholder="enter email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold dark:text-gray-400 text-gray-600 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full dark:bg-white/5 bg-gray-50 border dark:border-white/10 border-gray-200 dark:text-white text-gray-900 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder-gray-400"
                  placeholder="How can I help you?"
                />
              </div>
              
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-primary to-secondary rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
                >
                  Send Message
                  <Send size={20} />
                </motion.button>
                
                {result && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center text-sm font-medium ${result.includes("Successfully") ? "text-green-400" : "text-primary"}`}
                  >
                    {result}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
