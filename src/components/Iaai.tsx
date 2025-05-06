
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Iaai() {
  // Create refs for each element
  const mainCircleRef = useRef(null);
  const smallCirclesRef = useRef(null);
  const vsRef = useRef(null);

  // Check if elements are in view
  const mainCircleInView = useInView(mainCircleRef, { once: true });
  const smallCirclesInView = useInView(smallCirclesRef, { once: true });
  const vsInView = useInView(vsRef, { once: true });

  return (
    <div className="w-full overflow-x-hidden py-12">
      <div className="max-w-6xl mx-auto p-4 flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          {/* Top section with main circles */}
          <div className="w-full flex flex-col md:flex-row justify-center items-center relative gap-8 md:gap-0">
            {/* Left Side - A.I. /ETIC */}
            <motion.div 
              ref={mainCircleRef}
              initial={{ opacity: 0, y: -100 }}
              animate={mainCircleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center md:mr-[50px] lg:mr-[100px]"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-4 md:mb-6 text-center">A.I. /ETIC</h2>
              <div className="relative">
                <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden relative">
                  {/* Main circle image */}
                  <img
                    src="/human-computer.png"
                    alt="AI ETIC visualization showing business people"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full object-center"
                  />
                </div>

                {/* Small circles container */}
                <motion.div 
                  ref={smallCirclesRef}
                  initial={{ opacity: 0, y: -100 }}
                  animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                  className="relative"
                >
                  {/* Dopamine molecule circle - positioned to overlap with main circle */}
                  <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white border-2 border-gray-300 flex flex-col items-center justify-center overflow-hidden z-20"
                  >
                    <div className="w-full h-full relative flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 100 100">
                        {/* Simple representation of dopamine molecule structure */}
                        <path d="M30,50 L40,30 L50,50 L60,30 L70,50" stroke="black" fill="none" strokeWidth="2" />
                        <circle cx="30" cy="50" r="5" fill="black" />
                        <circle cx="40" cy="30" r="5" fill="black" />
                        <circle cx="50" cy="50" r="5" fill="black" />
                        <circle cx="60" cy="30" r="5" fill="black" />
                        <circle cx="70" cy="50" r="5" fill="black" />
                        <path d="M50,50 L50,70" stroke="black" fill="none" strokeWidth="2" />
                        <circle cx="50" cy="70" r="5" fill="black" />
                      </svg>
                      <p className="absolute bottom-1 text-[6px] md:text-[8px] font-bold">DOPAMINE</p>
                    </div>
                  </motion.div>

                  {/* Purple circle - positioned adjacent to the dopamine circle */}
                  <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                    className="absolute bottom-[-15px] right-[-15px] md:bottom-[-20px] md:right-[-20px] w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full bg-purple-600 overflow-hidden z-10"
                  >
                    <img
                      src="/man-talking.png"
                      alt="Purple element"
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Center VS - positioned between the two main circles */}
            <motion.div 
              ref={vsRef}
              initial={{ opacity: 0, y: -100 }}
              animate={vsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
              className="relative md:absolute md:transform md:-translate-x-1/2 md:-translate-y-1/2 z-30 my-8 md:my-0"
            >
              <div className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full flex items-center justify-center relative">
                {/* Earth/globe image */}
                <img
                  src="/vs.png"
                  alt="Globe"
                  width={150}
                  height={150}
                  className="object-cover rounded-full w-full h-full"
                />
                <span className="absolute text-white text-2xl md:text-4xl font-bold">VS</span>
              </div>
            </motion.div>

            {/* Right Side - I.A. /EMIC */}
            <motion.div 
              initial={{ opacity: 0, y: -100 }}
              animate={mainCircleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col items-center md:ml-[50px] lg:ml-[100px]"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold italic mb-4 md:mb-6 text-center">I.A. /EMIC</h2>
              <div className="relative">
                <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden relative bg-gradient-to-br from-gray-100 to-blue-200">
                  {/* Main circle image */}
                  <img
                    src="/human-project.jpg"
                    alt="IA EMIC visualization with abstract elements"
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                </div>

                {/* Small circles container */}
                <motion.div 
                  initial={{ opacity: 0, y: -100 }}
                  animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
                  className="relative"
                >
                  {/* Serotonin molecule circle - positioned to overlap with main circle */}
                  <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
                    className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full bg-white border-2 border-gray-300 flex flex-col items-center justify-center overflow-hidden z-20"
                  >
                    <div className="w-full h-full relative flex items-center justify-center">
                      <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 100 100">
                        {/* Simple representation of serotonin molecule structure */}
                        <path d="M30,30 L50,30 L50,50 L70,50" stroke="black" fill="none" strokeWidth="2" />
                        <circle cx="30" cy="30" r="5" fill="black" />
                        <circle cx="50" cy="30" r="5" fill="black" />
                        <circle cx="50" cy="50" r="5" fill="black" />
                        <circle cx="70" cy="50" r="5" fill="black" />
                        <path d="M30,30 L30,50 L50,70" stroke="black" fill="none" strokeWidth="2" />
                        <circle cx="30" cy="50" r="5" fill="black" />
                        <circle cx="50" cy="70" r="5" fill="black" />
                      </svg>
                      <p className="absolute bottom-1 text-[6px] md:text-[8px] font-bold">SEROTONIN</p>
                    </div>
                  </motion.div>

                  {/* Person walking circle - positioned adjacent to the serotonin circle */}
                  <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={smallCirclesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.4 }}
                    className="absolute bottom-[-15px] right-[-15px] md:bottom-[-20px] md:right-[-20px] w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden z-10"
                  >
                    <img
                      src="/woman-man.png"
                      alt="Person walking"
                      width={120}
                      height={120}
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Empathy Gap section */}
          <div className="w-full mt-8 md:mt-12">
            <div className="relative w-full h-[200px] md:h-[300px]">
              <svg 
                width="100%" 
                height="100%" 
                viewBox="0 0 800 300" 
                preserveAspectRatio="xMidYMid meet"
                className="w-full"
              >
                {/* Empathy Gap text and dot with vertical line */}
                <text x="400" y="30" textAnchor="middle" fontSize="14" fontWeight="bold">Empathy Gap</text>
                <line x1="400" y1="45" x2="400" y2="60" stroke="black" strokeWidth="1.5" />
                <circle cx="400" cy="45" r="3" fill="black" />

                {/* Horizontal line - increased width */}
                <line x1="150" y1="60" x2="650" y2="60" stroke="black" strokeWidth="1.5" />

                {/* Left and Right vertical lines with smaller arrows */}
                <line x1="150" y1="60" x2="150" y2="100" stroke="black" strokeWidth="1.5" />
                <line x1="650" y1="60" x2="650" y2="100" stroke="black" strokeWidth="1.5" />
                
                {/* Smaller arrow heads */}
                <path d="M 150,100 L 147,95 L 153,95 Z" fill="black" />
                <path d="M 650,100 L 647,95 L 653,95 Z" fill="black" />

                {/* Left side boxes - increased size */}
                <g transform="translate(50,120)">
                  <rect width="100" height="40" fill="white" stroke="black" strokeWidth="1" />
                  <text x="50" y="25" textAnchor="middle" fontSize="12">known</text>
                  
                  <text x="150" y="25" textAnchor="middle" fontSize="12">Doubt</text>
                  
                  <rect x="200" width="100" height="40" fill="white" stroke="black" strokeWidth="1" strokeDasharray="4" />
                  <text x="250" y="25" textAnchor="middle" fontSize="12">Unknown</text>
                </g>

                {/* Right side boxes - increased size */}
                <g transform="translate(450,120)">
                  <rect width="100" height="40" fill="white" stroke="black" strokeWidth="1" />
                  <text x="50" y="25" textAnchor="middle" fontSize="12">known</text>
                  
                  <rect x="100" width="100" height="40" fill="white" stroke="black" strokeWidth="1" />
                  <text x="150" y="25" textAnchor="middle" fontSize="12">Trust</text>
                  
                  <rect x="200" width="100" height="40" fill="#e0f2e9" stroke="#45b649" strokeWidth="1" strokeDasharray="4" />
                  <text x="250" y="25" textAnchor="middle" fontSize="12">Unknown</text>
                </g>

                {/* Uncertainty waves - adjusted position for larger boxes */}
                <g transform="translate(50,180)">
                  <text x="175" y="0" textAnchor="middle" fontSize="10" fill="black">Uncertainty</text>
                  <path d="M 0,20 Q 25,10 50,20 Q 75,30 100,20 Q 125,10 150,20 Q 175,30 200,20 Q 225,10 250,20 Q 275,30 300,20" 
                    fill="none" stroke="black" strokeWidth="1" />
                  <path d="M 0,25 Q 25,15 50,25 Q 75,35 100,25 Q 125,15 150,25 Q 175,35 200,25 Q 225,15 250,25 Q 275,35 300,25" 
                    fill="none" stroke="black" strokeWidth="1" />
                  <path d="M 0,30 Q 25,20 50,30 Q 75,40 100,30 Q 125,20 150,30 Q 175,40 200,30 Q 225,20 250,30 Q 275,40 300,30" 
                    fill="none" stroke="black" strokeWidth="1" />
                </g>

                {/* Right side uncertainty waves - adjusted position for larger boxes */}
                <g transform="translate(450,180)">
                  <text x="175" y="0" textAnchor="middle" fontSize="10" fill="black">Uncertainty</text>
                  <path d="M 0,20 Q 25,10 50,20 Q 75,30 100,20 Q 125,10 150,20 Q 175,30 200,20 Q 225,10 250,20 Q 275,30 300,20" 
                    fill="none" stroke="black" strokeWidth="1" />
                  <path d="M 0,25 Q 25,15 50,25 Q 75,35 100,25 Q 125,15 150,25 Q 175,35 200,25 Q 225,15 250,25 Q 275,35 300,25" 
                    fill="none" stroke="black" strokeWidth="1" />
                  <path d="M 0,30 Q 25,20 50,30 Q 75,40 100,30 Q 125,20 150,30 Q 175,40 200,30 Q 225,20 250,30 Q 275,40 300,30" 
                    fill="none" stroke="black" strokeWidth="1" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
