
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTPSSection from '../components/CTPSSection';
import CTPSInteractiveDiagram from '../components/CTPSInteractiveDiagram';
import { motion } from 'framer-motion';

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
      <div className="pt-32 pb-20">
        <CTPSInteractiveDiagram />
        <CTPSSection />
      </div>
      <Footer />
    </motion.div>
  );
};

export default CTPSPage;
