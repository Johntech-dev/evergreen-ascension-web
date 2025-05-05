
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Navbar />
      <HeroSection />
      
      <motion.section 
        className="py-24 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Initiatives</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybernetics & Cymatics",
                description: "The Foundation of Human-Centred Intelligence",
                link: "/cybernetics",
                color: "from-blue-50 to-blue-100"
              },
              {
                title: "Intelligence Amplification",
                description: "The Future of Human-Machine Partnership",
                link: "/intelligence-amplification",
                color: "from-indigo-50 to-indigo-100"
              },
              {
                title: "4th CTPS",
                description: "Humanity's Journey Through Cultural Time Perception Shifts",
                link: "/ctps",
                color: "from-purple-50 to-purple-100"
              },
              {
                title: "4th Gate Ventures",
                description: "Investing in Humanity's Next Evolution",
                link: "/ventures",
                color: "from-green-50 to-green-100"
              },
              {
                title: "AKEA University",
                description: "Advancing Research in Intelligence Amplification",
                link: "/university",
                color: "from-yellow-50 to-yellow-100"
              },
              {
                title: "Evergreen Cities",
                description: "Embodying the Vision of Resilient, Technological Harmony",
                link: "/cities",
                color: "from-red-50 to-red-100"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-md overflow-hidden relative`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{item.description}</p>
                
                <Link to={item.link} className="relative z-10">
                  <motion.button
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
