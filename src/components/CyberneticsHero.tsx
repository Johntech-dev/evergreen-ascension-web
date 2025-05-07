import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CyberneticsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
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

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="block">Cybernetics and Cymatics</span>
            <motion.span 
              className="text-everblue text-2xl md:text-3xl lg:text-4xl font-normal mt-2 block"
              animate={{ 
                textShadow: ["0 0 8px rgba(0, 123, 255, 0.5)", "0 0 16px rgba(0, 123, 255, 0.3)", "0 0 8px rgba(0, 123, 255, 0.5)"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              The Foundation of Human-Centred Intelligence
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Discover how feedback systems and resonance create a new paradigm for technology
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button asChild size="lg" className="rounded-full">
                <a href="#introduction">
                  Learn More
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button variant="outline" asChild size="lg" className="rounded-full">
                <a href="#support">
                  Support the Initiative
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-gray-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div 
          className="w-[1px] h-8 bg-gray-400"
          animate={{ 
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          animate={{ y: [0, 5, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-1"
        >
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CyberneticsHero;
