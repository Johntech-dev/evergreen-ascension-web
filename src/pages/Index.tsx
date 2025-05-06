
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { motion, useInView, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Brain, Zap, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Iaai from '../components/Iaai';
import EticEmicComparison from '../components/EticEmicComparison';

const Index: React.FC = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    controls.start("visible");
  }, [controls]);

  const mainCircleRef = useRef(null);
  const vsRef = useRef(null);
  
  const mainCircleInView = useInView(mainCircleRef, { once: true });
  const vsInView = useInView(vsRef, { once: true });

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0.6]);

  const pageTransition = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.5 } }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-white overflow-hidden"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
    >
      <Navbar />
      <HeroSection />
      
      {/* Introduction Section */}
      <motion.section 
        className="py-24 px-6 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction to the Alignment Problem</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The AI "alignment problem" highlights a fundamental disconnect: conventional AI lacks an understanding of the depth and fluidity of human intelligence. The Evergreen Initiative presents Intelligence Amplification (IA) as a breakthrough alternative—tools that expand cognitive, emotional, and physical intelligence by empowering natural human capacities.
            </p>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-semibold mb-4 text-center"
              variants={itemVariants}
            >
              Understanding the Emergence of AP
            </motion.h3>
            <motion.p 
              className="text-base leading-relaxed mb-6 text-center"
              variants={itemVariants}
            >
              AP is an emergent property of the Etic approach to Behavioral Science Research. The historical development of Artificial Personhood (AP) reveals a crucial distinction in foundational perspectives.
            </motion.p>
          </motion.div>

          {/* McCarthy vs Wiener Section */}
          <div className="w-full flex flex-col items-center mb-20">
            <div className="w-full flex flex-col md:flex-row justify-center items-center relative gap-8 md:gap-0">
              {/* Left side - McCarthy */}
              <motion.div 
                ref={mainCircleRef}
                initial={{ opacity: 0, y: 50 }}
                animate={mainCircleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="flex flex-col items-center md:mr-[50px] lg:mr-[100px] w-full md:w-auto"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 md:mb-6 text-center">John McCarthy</h3>
                <p className="italic mb-4 md:mb-6 text-center text-sm sm:text-base">AI as a discovery</p>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden relative shadow-lg bg-gradient-to-br from-blue-50 to-blue-100"
                >
                  <img
                    src="/johnmcharty.jpeg"
                    alt="John McCarthy"
                    className="object-cover w-full h-full object-center"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-blue-500/10"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </motion.div>

              {/* Middle - VS globe */}
              <motion.div 
                ref={vsRef}
                initial={{ opacity: 0, scale: 0 }}
                animate={vsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative md:absolute md:transform md:-translate-x-1/2 md:translate-y-0 z-30 my-8 md:my-0"
              >
                <motion.div 
                  className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] rounded-full flex items-center justify-center bg-everblue text-white shadow-lg"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(0, 123, 255, 0.4)",
                      "0 0 20px rgba(0, 123, 255, 0.6)",
                      "0 0 0 rgba(0, 123, 255, 0.4)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-xl sm:text-2xl font-bold">VS</span>
                </motion.div>
              </motion.div>

              {/* Right side - Wiener */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={mainCircleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                className="flex flex-col items-center md:ml-[50px] lg:ml-[100px] w-full md:w-auto"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold italic mb-4 md:mb-6 text-center">Norbert Wiener</h3>
                <p className="italic mb-4 md:mb-6 text-center text-sm sm:text-base">AI as a product of Behavioral Science research</p>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden shadow-lg bg-gradient-to-br from-indigo-50 to-indigo-100"
                >
                  <img
                    src="/nobert.jpeg"
                    alt="Norbert Wiener"
                    className="object-cover w-full h-full"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-indigo-500/10"
                    animate={{ opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Etic vs Emic Approaches */}
          <EticEmicComparison />
        </div>
      </motion.section>

      {/* IAAI Comparison */}
      <motion.section
        className="py-12 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Iaai />
      </motion.section>

      {/* Biometric Data Section */}
      <motion.section 
        className="py-24 px-6 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-everblue/5 rounded-full blur-3xl"
          style={{ y: y1 }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-everblue/5 rounded-full blur-3xl"
          style={{ y: y2 }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Why Behavioural Biometric Data Needs Protection</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <p className="text-lg leading-relaxed mb-6">
                Your behavioural biometrics reflect your unique world-line and perception of time. This data, essential to creating IA tools that support your individual journey, is deeply personal.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The Evergreen Initiative champions data sovereignty, where users control their data to preserve autonomy, personal growth, and digital identity in an evolving cybernetic landscape.
              </p>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-everblue h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                  <p>Behavioural biometric data personalizes IA by adapting it to individual cognitive and temporal patterns.</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-everblue h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                  <p>Evergreen prioritizes data sovereignty to ensure ethical, empowering interactions with IA.</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-everblue h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                  <p>This commitment to privacy and control fosters IA as a true partner in personal and ecological harmony.</p>
                </motion.div>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <motion.div 
                className="bg-white p-8 rounded-2xl shadow-xl overflow-hidden w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-70"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                />
                <Shield className="h-32 w-32 md:h-40 md:w-40 text-everblue relative z-10" />
                <motion.div 
                  className="absolute w-full h-full rounded-full border-2 border-everblue/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-[120%] h-[120%] rounded-full border border-everblue/10"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mind-Body Section */}
      <motion.section 
        className="py-24 px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-gray-50/50 -z-10"
          style={{ opacity: opacity1 }}
        />
        
        <div className="container mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Mind-Body Synchronization</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Amplifying Intelligence from Within
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <motion.div 
                className="bg-white p-6 rounded-2xl shadow-xl overflow-hidden w-64 h-64 md:w-80 md:h-80 flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-70"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                  }}
                />
                <Brain className="h-32 w-32 md:h-40 md:w-40 text-everblue relative z-10" />
                <motion.div 
                  className="absolute w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-everblue/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-52 h-52 md:w-64 md:h-64 rounded-full border border-everblue/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-60 h-60 md:w-72 md:h-72 rounded-full border border-everblue/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Particle effects */}
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full bg-everblue/30"
                    initial={{ 
                      x: (Math.random() - 0.5) * 150, 
                      y: (Math.random() - 0.5) * 150,
                      scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{ 
                      x: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150],
                      y: [(Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{ 
                      duration: Math.random() * 5 + 5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Human intelligence flows from mind-body synchronization—the natural rhythms shaping our cognitive and emotional states. IA tools from Evergreen synchronize with these rhythms, optimizing mental and emotional energy in line with thermodynamic principles.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This technology, seamlessly integrating with personal and ecological cycles, enhances creativity, resilience, and well-being without disrupting our natural balance.
              </p>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-everblue h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                  <p>IA fosters harmony between human cognition and technological interaction.</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="text-everblue h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                  <p>Aligning with personal rhythms promotes balance, emotional resilience, and adaptive growth.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Resilient Future Section */}
      <motion.section 
        className="py-24 px-6 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why IA is Fundamental for a Resilient Technological Future</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg leading-relaxed mb-12 text-center">
              IA offers a co-evolutionary model where humans and technology grow together, maintaining autonomy and resilience. Anchored in the 4th Cultural Time Perception Shift (4th CTPS), IA adapts to diverse needs, promoting a sustainable future that elevates human potential in alignment with nature.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild size="lg" className="rounded-md">
                  <Link to="/intelligence-amplification" className="flex items-center justify-center">
                    Learn More About IA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild variant="outline" size="lg" className="rounded-md">
                  <Link to="/ctps" className="flex items-center justify-center">
                    Explore the 4th CTPS
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Background decorative elements with advanced animations */}
          <div className="absolute top-20 left-10 w-20 h-20">
            <motion.div
              animate={{ 
                y: [0, -15, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
              }}
            >
              <Leaf className="text-everblue/40 h-full w-full" />
            </motion.div>
          </div>
          
          <div className="absolute bottom-20 right-10 w-16 h-16">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 5, 0, -5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{ 
                duration: 7, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
            >
              <Zap className="text-everblue/30 h-full w-full" />
            </motion.div>
          </div>
          
          {/* Floating circles background */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-everblue/5"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 30 - 15],
                x: [0, Math.random() * 30 - 15],
                scale: [1, Math.random() * 0.3 + 0.9, 1],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </motion.section>
      
      {/* Initiative Overview */}
      <motion.section 
        className="py-24 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Initiatives</h2>
          </div>
          
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Cybernetics & Cymatics",
                description: "The Foundation of Human-Centred Intelligence",
                link: "/cybernetics",
                color: "from-blue-50 to-blue-100"
              },
              {
                title: "Intelligence Amplification",
                description: "The Future of Human-Machine Partnership",
                link: "/intelligence-amplification",
                color: "from-indigo-50 to-indigo-100"
              },
              {
                title: "4th CTPS",
                description: "Humanity's Journey Through Cultural Time Perception Shifts",
                link: "/ctps",
                color: "from-purple-50 to-purple-100"
              },
              {
                title: "4th Gate Ventures",
                description: "Investing in Humanity's Next Evolution",
                link: "/ventures",
                color: "from-green-50 to-green-100"
              },
              {
                title: "AKEA University",
                description: "Advancing Research in Intelligence Amplification",
                link: "/university",
                color: "from-yellow-50 to-yellow-100"
              },
              {
                title: "Evergreen Cities",
                description: "Embodying the Vision of Resilient, Technological Harmony",
                link: "/cities",
                color: "from-red-50 to-red-100"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className={`bg-gradient-to-br ${item.color} p-8 rounded-xl shadow-md overflow-hidden relative`}
                variants={itemVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.2 } 
                }}
              >
                <motion.div
                  className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-white/20 blur-xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                <p className="text-gray-600 mb-6 relative z-10">{item.description}</p>
                
                <Link to={item.link} className="relative z-10">
                  <motion.button
                    className="bg-everblue hover:bg-everblue/90 text-white px-4 py-2 rounded transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More
                  </motion.button>
                </Link>
                
                {/* Dynamic particle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/40"
                    style={{
                      width: Math.random() * 10 + 5,
                      height: Math.random() * 10 + 5,
                      bottom: `${Math.random() * 60}%`,
                      left: `${Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20],
                      x: [0, Math.random() * 10 - 5],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: Math.random() * 3 + 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
