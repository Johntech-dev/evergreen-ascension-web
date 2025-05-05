
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const CitiesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <div className="container mx-auto pt-32 pb-20 px-4">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pioneering Evergreen Cities
        </motion.h1>
        <motion.h2
          className="text-xl md:text-2xl text-gray-700 mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Embodying the Vision of Resilient, Technological Harmony
        </motion.h2>
        
        {/* Content will be populated from CitiesSection component */}
      </div>
      <Footer />
    </motion.div>
  );
};

export default CitiesPage;
