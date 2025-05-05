
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import { motion } from 'framer-motion';

const GalleryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // You can add your actual images here
  const images = [
    {
      src: '/placeholder.svg', // Replace with your actual image
      alt: 'Evergreen Initiative Concept',
      caption: 'Conceptual visualization of Intelligence Amplification'
    },
    {
      src: '/placeholder.svg', // Replace with your actual image
      alt: 'CTPS Timeline',
      caption: 'Visual representation of the four Cultural Time Perception Shifts'
    },
    {
      src: '/placeholder.svg', // Replace with your actual image
      alt: 'Mind-Body Synchronization',
      caption: 'Illustration of human cognitive rhythms'
    },
    // Add more images as needed
  ];

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
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Image Gallery
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-700 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Visual explorations of the Evergreen Initiative concepts and projects
        </motion.p>
        
        <ImageGallery images={images} />
      </div>
      <Footer />
    </motion.div>
  );
};

export default GalleryPage;
