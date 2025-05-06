
import React, { useRef } from 'react';
import { motion, useInView, useAnimationControls } from 'framer-motion';

const EticEmicComparison: React.FC = () => {
  const eticEmicRef = useRef<HTMLDivElement>(null);
  const eticEmicInView = useInView(eticEmicRef, { once: true, amount: 0.3 });
  const eticControls = useAnimationControls();
  const emicControls = useAnimationControls();
  
  React.useEffect(() => {
    if (eticEmicInView) {
      // Trigger the animations with a slight delay between them
      eticControls.start("visible");
      setTimeout(() => {
        emicControls.start("visible");
      }, 200);
    }
  }, [eticEmicInView, eticControls, emicControls]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.19, 1.0, 0.22, 1.0] // Ease out expo for more dynamic motion
      }
    }
  };
  
  // Content animation
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  // Background shape animation
  const shapeAnimation = {
    initial: {
      pathLength: 0,
      opacity: 0
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeInOut"
      }
    }
  };
  
  // Floating effect animation
  const floatAnimation = {
    y: [0, -15, 0],
    transition: { 
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
  
  // Pulse animation
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: { 
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div ref={eticEmicRef} className="max-w-6xl mx-auto mt-12 md:mt-16 lg:mt-20 px-4">
      <motion.h3 
        className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={eticEmicInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Etic vs Emic Approaches to Behavioral Science
      </motion.h3>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-8 mb-12"
        initial="hidden"
        animate={eticEmicInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Etic Approach Card */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/30 border border-blue-100 dark:border-blue-800/50"
          variants={cardVariants}
          initial="hidden"
          animate={eticControls}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          {/* Decorative background elements */}
          <motion.div 
            className="absolute -right-20 -top-20 w-40 h-40 bg-blue-200 rounded-full opacity-50 dark:opacity-20"
            animate={pulseAnimation}
          />
          <motion.div 
            className="absolute -left-10 -bottom-10 w-20 h-20 bg-blue-300 rounded-full opacity-30 dark:opacity-10"
            animate={floatAnimation}
          />
          
          {/* Content container */}
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-6">
              <motion.div 
                className="h-12 w-12 bg-blue-200 dark:bg-blue-700 rounded-full flex items-center justify-center mr-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg className="h-6 w-6 text-blue-700 dark:text-blue-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.div>
              <h4 className="text-xl font-bold relative z-10">Etic Approach</h4>
            </div>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-4 relative z-10"
              variants={contentVariants}
            >
              The Etic approach views human behavior from an outsider's perspective, analyzing patterns and behaviors across cultures using objective measurements and observations.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 relative z-10"
              variants={contentVariants}
              transition={{ delay: 0.2 }}
            >
              This approach leads to the development of AI systems that attempt to replicate human behavior through external observation and data collection, often missing the subtleties of human experience.
            </motion.p>
            
            <div className="mt-6">
              <motion.ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Objective, external observation</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Quantitative measurements</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Cross-cultural comparisons</span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute right-6 bottom-6 w-24 h-24 text-blue-300 dark:text-blue-700/50 opacity-50"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M100,20 C140,20 160,50 180,100 C160,150 140,180 100,180 C60,180 40,150 20,100 C40,50 60,20 100,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={shapeAnimation.initial}
                animate={shapeAnimation.animate}
              />
            </svg>
          </motion.div>
        </motion.div>
        
        {/* Emic Approach Card */}
        <motion.div 
          className="relative overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/30 border border-indigo-100 dark:border-indigo-800/50"
          variants={cardVariants}
          initial="hidden"
          animate={emicControls}
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          {/* Decorative background elements */}
          <motion.div 
            className="absolute -left-20 -top-20 w-40 h-40 bg-indigo-200 rounded-full opacity-50 dark:opacity-20"
            animate={pulseAnimation}
          />
          <motion.div 
            className="absolute -right-10 -bottom-10 w-20 h-20 bg-indigo-300 rounded-full opacity-30 dark:opacity-10"
            animate={floatAnimation}
          />
          
          {/* Content container */}
          <div className="p-8 relative z-10">
            <div className="flex items-center mb-6">
              <motion.div 
                className="h-12 w-12 bg-indigo-200 dark:bg-indigo-700 rounded-full flex items-center justify-center mr-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <svg className="h-6 w-6 text-indigo-700 dark:text-indigo-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z" />
                  <path d="M17.6 16.8C16.2 18.2 14.2 19 12 19s-4.2-.8-5.6-2.2c-1.4-1.4-2.2-3.3-2.2-5.5 0-2.3.8-4.2 2.2-5.6C7.8 4.2 9.8 3.4 12 3.4s4.2.8 5.6 2.2c1.4 1.4 2.2 3.3 2.2 5.5 0 2.3-.8 4.2-2.2 5.6z" />
                </svg>
              </motion.div>
              <h4 className="text-xl font-bold relative z-10">Emic Approach</h4>
            </div>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-4 relative z-10"
              variants={contentVariants}
            >
              The Emic approach studies behavior from within the cultural context, focusing on the insider's perspective and the subjective experience of individuals.
            </motion.p>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 relative z-10"
              variants={contentVariants}
              transition={{ delay: 0.2 }}
            >
              This approach forms the foundation of Intelligence Amplification (IA), which seeks to enhance human cognition by understanding and working with our natural mental processes rather than replacing them.
            </motion.p>
            
            <div className="mt-6">
              <motion.ul className="space-y-3">
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.3 }}
                >
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Subjective, internal perspective</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Qualitative understanding</span>
                </motion.li>
                <motion.li 
                  className="flex items-start"
                  variants={contentVariants}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-indigo-500 mr-2">•</span>
                  <span>Cultural context integration</span>
                </motion.li>
              </motion.ul>
            </div>
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute right-4 bottom-4 w-24 h-24 text-indigo-300 dark:text-indigo-700/50 opacity-50"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.path
                d="M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={shapeAnimation.initial}
                animate={shapeAnimation.animate}
              />
              <motion.path
                d="M100,40 C130,40 160,70 160,100 C160,130 130,160 100,160 C70,160 40,130 40,100 C40,70 70,40 100,40 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={shapeAnimation.initial}
                animate={shapeAnimation.animate}
                transition={{ delay: 0.5, duration: 3 }}
              />
              <motion.path
                d="M100,60 C120,60 140,80 140,100 C140,120 120,140 100,140 C80,140 60,120 60,100 C60,80 80,60 100,60 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={shapeAnimation.initial}
                animate={shapeAnimation.animate}
                transition={{ delay: 1, duration: 3 }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
      
      {/* VS Divider with animation */}
      <motion.div 
        className="flex items-center justify-center my-6"
        initial={{ opacity: 0, scale: 0 }}
        animate={eticEmicInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
        <motion.div 
          className="mx-6 h-12 w-12 rounded-full bg-everblue flex items-center justify-center text-white text-sm font-bold shadow-lg"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(0, 123, 255, 0.4)",
              "0 0 20px rgba(0, 123, 255, 0.6)",
              "0 0 0 rgba(0, 123, 255, 0.4)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          VS
        </motion.div>
        <div className="h-[1px] flex-1 bg-gray-200 dark:bg-gray-700"></div>
      </motion.div>
      
      {/* Comparison summary */}
      <motion.div 
        className="text-center mt-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={eticEmicInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This fundamental difference in approach explains why traditional AI often misses the essence of human experience, while Intelligence Amplification aims to work with our natural cognitive processes.
        </p>
      </motion.div>
    </div>
  );
};

export default EticEmicComparison;
