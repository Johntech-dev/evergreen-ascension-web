
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTPSSection from '../components/CTPSSection';
import CTPSInteractiveDiagram from '../components/CTPSInteractiveDiagram';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTPSPage: React.FC = () => {
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
      <div className="pt-32">
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-12 lg:px-24">
          <div className="container mx-auto text-center max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Cultural Time Perception Shifts
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-12"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              The story of humanity's evolving relationship with time and intelligence
            </motion.p>
            
            {/* Interactive CTPS Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <CTPSInteractiveDiagram />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-12"
            >
              <Button 
                asChild 
                size="lg" 
                className="rounded-full bg-everblue text-white hover:bg-everblue/90"
              >
                <a href="#ctps-details">
                  Explore the CTPS in Detail
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Detailed CTPS Content */}
        <div id="ctps-details">
          <CTPSSection />
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default CTPSPage;
