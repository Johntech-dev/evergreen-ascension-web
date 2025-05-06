
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const CyberneticsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`, 
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Adaptive overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-everblue/30 dark:from-black/80 dark:via-black/50 dark:to-everblue/40 z-10"></div>
        
        {/* Background image as fallback for video */}
        <div className="absolute inset-0 bg-black/60">
          <img 
            src="/placeholder.svg" 
            alt="Cybernetics background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center text-white"
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
                textShadow: ["0 0 8px rgba(71, 145, 97, 0.5)", "0 0 16px rgba(71, 145, 97, 0.3)", "0 0 8px rgba(71, 145, 97, 0.5)"]
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
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto"
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
            <Button asChild size="lg" className="rounded-full">
              <a href="#introduction">
                Learn More
              </a>
            </Button>
            
            <Button variant="outline" asChild size="lg" className="rounded-full text-white border-white/20 bg-white/10 hover:bg-white/20">
              <a href="#support">
                Support the Initiative
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white/60"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
        <motion.div 
          className="w-[1px] h-8 bg-white/40"
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
          <ChevronDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CyberneticsHero;
