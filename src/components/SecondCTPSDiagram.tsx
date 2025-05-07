import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, Factory, Scale, Coins, Brain } from "lucide-react";

export default function SecondCTPSDiagram() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            2nd CTPS: The Pendulum Universe
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The transformation of time into a precise, mechanical force that shaped modern society
          </p>
        </div>

        <div 
          className="relative w-full mx-auto flex items-center justify-center overflow-hidden mb-8 rounded-xl" 
          style={{
            height: "800px",
            minHeight: "500px"
          }}
        >
          {/* Connection lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 650"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle */}
            <circle cx="500" cy="325" r="200" stroke="rgba(71, 145, 97, 0.3)" strokeWidth="1" strokeDasharray="6 4" fill="none" />

            {/* Connection lines */}
            <line x1="500" y1="125" x2="500" y2="75" stroke="rgba(71, 145, 97, 0.5)" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="500" y1="525" x2="500" y2="575" stroke="rgba(71, 145, 97, 0.5)" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="300" y1="325" x2="250" y2="325" stroke="rgba(71, 145, 97, 0.5)" strokeWidth="2" strokeDasharray="6 4" />
            <line x1="700" y1="325" x2="750" y2="325" stroke="rgba(71, 145, 97, 0.5)" strokeWidth="2" strokeDasharray="6 4" />
          </svg>

          {/* Central hub - The Pendulum Clock */}
          <motion.div 
            className="absolute -translate-x-1/2 -translate-y-1/2 h-[170px] md:h-[250px] w-[200px] md:w-[200px] bg-white rounded-xl shadow-lg z-10 overflow-hidden border-2 border-everblue"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-4 bg-everblue rounded-t-xl">
              <h3 className="text-center font-semibold text-white">The Pendulum Clock</h3>
            </div>
            <div className="p-6">
              <p className="text-[15px] text-gray-600 mb-4">
                The mechanical heart of the 2nd CTPS, bringing unprecedented precision to timekeeping.
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-10 h-10 rounded-full bg-everblue/10 flex items-center justify-center text-everblue">
                  <Clock size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Top card - Industrial Revolution */}
          <motion.div 
            className="absolute top-2 -translate-x-1/2 w-[260px] sm:w-[280px] md:w-[300px] bg-white rounded-xl shadow-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Industrial Revolution</h2>
              <p className="text-sm text-gray-600 mb-4">
                The transformation of production through mechanized time.
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-12 h-12 rounded-full bg-everblue/10 flex items-center justify-center text-everblue">
                  <Factory size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom card - Economic Systems */}
          <motion.div 
            className="absolute bottom-[-20px] -translate-x-1/2 w-[260px] sm:w-[280px] md:w-[300px] bg-white rounded-xl shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ y: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Economic Systems</h2>
              <p className="text-sm text-gray-600 mb-4">
                The rise of debt-based economies and financial cycles.
              </p>
              <div className="flex justify-center mt-2">
                <div className="w-12 h-12 rounded-full bg-everblue/10 flex items-center justify-center text-everblue">
                  <Coins size={24} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Left card - Social Organization */}
          <motion.div 
            className="absolute left-[20px] sm:left-[30px] md:left-[-20px] -translate-y-1/2 w-[220px] sm:w-[230px] md:w-[250px] bg-white rounded-xl shadow-lg"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ x: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-everblue/10 flex items-center justify-center text-everblue mb-3">
                <Scale size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Social Balance</h2>
              <p className="text-sm text-gray-600">The tension between progress and exploitation.</p>
            </div>
          </motion.div>

          {/* Right card - Human Adaptation */}
          <motion.div 
            className="absolute right-[20px] sm:right-[30px] md:right-[-20px] -translate-y-1/2 w-[220px] sm:w-[230px] md:w-[250px] bg-white rounded-xl shadow-lg"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            whileHover={{ x: 5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-everblue/10 flex items-center justify-center text-everblue mb-3">
                <Brain size={24} />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Human Adaptation</h2>
              <p className="text-sm text-gray-600">The psychological impact of mechanical time.</p>
            </div>
          </motion.div>

          {/* Animated connection indicators */}
          {isAnimating && (
            <>
              <motion.div
                className="absolute top-[125px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-everblue"
                animate={{
                  y: [0, -25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-[125px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-everblue"
                animate={{
                  y: [0, 25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 left-[175px] w-3 h-3 rounded-full bg-everblue"
                animate={{
                  x: [0, -25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 right-[175px] w-3 h-3 rounded-full bg-everblue"
                animate={{
                  x: [0, 25, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </>
          )}

          {/* Rotating circles for center decoration */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-everblue/10 rounded-full pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-everblue/5 rounded-full pointer-events-none"
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
} 