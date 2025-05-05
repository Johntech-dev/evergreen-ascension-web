
import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const parallaxBackground = {
    backgroundImage: `url('/placeholder.svg')`, // Replace with your actual image
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section 
      id="home" 
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden"
      style={parallaxBackground}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/90 z-0"></div>
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-everblue/5 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-everblue/10 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-2/3 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          y: [0, 20, 0]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            Mind, Body & <span className="text-everblue">the Alignment Problem</span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
            variants={itemVariants}
          >
            Unlocking Our True Potential with Intelligence Amplification
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-col md:flex-row justify-center gap-4"
            variants={itemVariants}
          >
            <Link to="/intelligence-amplification">
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 123, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Learn More about IA
              </motion.button>
            </Link>
            
            <Link to="/ventures">
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                Support the Evergreen Initiative
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
        
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Introduction to the Alignment Problem
            </motion.h3>
            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              The AI "alignment problem" highlights a fundamental disconnect: conventional AI lacks an understanding of the depth and fluidity of human intelligence. The Evergreen Initiative presents Intelligence Amplification (IA) as a breakthrough alternative—tools that expand cognitive, emotional, and physical intelligence by empowering natural human capacities.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Why Behavioural Biometric Data Needs Protection
            </motion.h3>
            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Your behavioural biometrics reflect your unique world-line and perception of time. This data, essential to creating IA tools that support your individual journey, is deeply personal. The Evergreen Initiative champions data sovereignty, where users control their data to preserve autonomy.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all"
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
          >
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              Mind-Body Synchronization
            </motion.h3>
            <motion.p 
              className="text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              Human intelligence flows from mind-body synchronization—the natural rhythms shaping our cognitive and emotional states. IA tools from Evergreen synchronize with these rhythms, optimizing mental and emotional energy in line with thermodynamic principles.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          variants={itemVariants}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">
            Why IA is Fundamental for a Resilient Technological Future
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            IA offers a co-evolutionary model where humans and technology grow together, maintaining autonomy and resilience. Anchored in the 4th Cultural Time Perception Shift (4th CTPS), IA adapts to diverse needs, promoting a sustainable future that elevates human potential in alignment with nature.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <Link to="/intelligence-amplification">
              <motion.button 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More about IA
              </motion.button>
            </Link>
            <Link to="/ventures">
              <motion.button 
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Support the Initiative
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          delay: 3
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center py-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
