
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EticEmicComparison: React.FC = () => {
  const eticEmicRef = useRef<HTMLDivElement>(null);
  const eticEmicInView = useInView(eticEmicRef, { once: true, amount: 0.3 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation for pulsating effect
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7]
  };
  
  // Animation for floating effect
  const floatAnimation = {
    y: [0, -15, 0]
  };

  return (
    <div ref={eticEmicRef} className="max-w-6xl mx-auto mt-12 md:mt-16 lg:mt-20">
      <h3 className="text-2xl font-bold mb-8 text-center">Etic vs Emic Approaches to Behavioral Science</h3>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial="hidden"
        animate={eticEmicInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div 
          className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md relative overflow-hidden"
          variants={itemVariants}
        >
          <motion.div 
            className="absolute -right-20 -top-20 w-40 h-40 bg-blue-200 rounded-full opacity-50"
            animate={pulseAnimation}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -left-10 -bottom-10 w-20 h-20 bg-blue-300 rounded-full opacity-30"
            animate={floatAnimation}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <h4 className="text-xl font-bold mb-4 relative z-10">Etic Approach</h4>
          <p className="text-gray-700 mb-4 relative z-10">
            The Etic approach views human behavior from an outsider's perspective, analyzing patterns and behaviors across cultures using objective measurements and observations.
          </p>
          <p className="text-gray-700 relative z-10">
            This approach leads to the development of AI systems that attempt to replicate human behavior through external observation and data collection, often missing the subtleties of human experience.
          </p>
          
          <motion.div 
            className="absolute right-4 bottom-4 w-16 h-16 text-blue-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,20 C140,20 160,50 180,100 C160,150 140,180 100,180 C60,180 40,150 20,100 C40,50 60,20 100,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-xl shadow-md relative overflow-hidden"
          variants={itemVariants}
        >
          <motion.div 
            className="absolute -left-20 -top-20 w-40 h-40 bg-indigo-200 rounded-full opacity-50"
            animate={pulseAnimation}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -right-10 -bottom-10 w-20 h-20 bg-indigo-300 rounded-full opacity-30"
            animate={floatAnimation}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <h4 className="text-xl font-bold mb-4 relative z-10">Emic Approach</h4>
          <p className="text-gray-700 mb-4 relative z-10">
            The Emic approach studies behavior from within the cultural context, focusing on the insider's perspective and the subjective experience of individuals.
          </p>
          <p className="text-gray-700 relative z-10">
            This approach forms the foundation of Intelligence Amplification (IA), which seeks to enhance human cognition by understanding and working with our natural mental processes rather than replacing them.
          </p>
          
          <motion.div 
            className="absolute right-4 bottom-4 w-16 h-16 text-indigo-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M100,40 C130,40 160,70 160,100 C160,130 130,160 100,160 C70,160 40,130 40,100 C40,70 70,40 100,40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <path
                d="M100,60 C120,60 140,80 140,100 C140,120 120,140 100,140 C80,140 60,120 60,100 C60,80 80,60 100,60 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EticEmicComparison;
