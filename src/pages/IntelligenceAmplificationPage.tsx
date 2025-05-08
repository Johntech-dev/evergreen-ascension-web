import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Brain, Zap, RefreshCw, Lightbulb, Sparkles, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";

const IntelligenceAmplificationPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Parallax effects
  const y1 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      transition: { 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-everblue/5 to-transparent"
          style={{ opacity }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(0, 123, 255, 0)",
                  "0 0 20px rgba(0, 123, 255, 0.2)",
                  "0 0 0px rgba(0, 123, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Intelligence Amplification
              <br />
              <span className="text-everblue">
                Enhancing Human Potential Through Technology
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Discover how IA enhances human capabilities through adaptive technology and cognitive evolution.
            </motion.p>

            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-everblue hover:bg-everblue/90 text-white px-8 py-6 text-lg rounded-full">
                Explore IA Technology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full border border-everblue/10"
            style={{ y: y1 }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full border border-everblue/10"
            style={{ y: y2 }}
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-everblue/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                x: [0, Math.random() * 100 - 50],
                scale: [1, Math.random() * 2 + 1, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {/* What is IA Section */}
          <Section
            id="what-is-ia"
            subtitle="Understanding IA"
            title="What is Intelligence Amplification?"
          >
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative">
                <motion.div 
                  className="aspect-square relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-everblue/30 to-everblue/10 z-0"></div>
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotateZ: [0, 5, 0],
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="h-40 w-40 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20"
                        whileHover={{
                          boxShadow: "0 0 30px rgba(0, 123, 255, 0.3)",
                          borderColor: "rgba(255, 255, 255, 0.4)"
                        }}
                      >
                        <Brain className="h-20 w-20 text-everblue/70" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-white/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full border border-white/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="space-y-6">
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Intelligence Amplification (IA) represents a paradigm shift in how we approach human-machine collaboration. Rather than replacing human intelligence, IA enhances and extends our natural cognitive capabilities through technology.
                </motion.p>
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  At its core, IA focuses on creating symbiotic relationships between humans and machines, where technology acts as an extension of human capabilities rather than a replacement.
                </motion.p>
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  This approach emphasizes the importance of maintaining human agency while leveraging technological advancements to amplify our natural abilities.
                </motion.p>
              </div>
            </motion.div>
          </Section>

          {/* Key Principles Section */}
          <Section
            id="key-principles"
            subtitle="Core Concepts"
            title="Key Principles of IA"
          >
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: <Brain className="h-6 w-6 text-everblue" />,
                  title: "Human-Centric Design",
                  description: "Technology that adapts to human needs and enhances natural cognitive processes."
                },
                {
                  icon: <RefreshCw className="h-6 w-6 text-everblue" />,
                  title: "Adaptive Partnership",
                  description: "Continuous learning and adaptation between human and machine systems."
                },
                {
                  icon: <Sparkles className="h-6 w-6 text-everblue" />,
                  title: "Ethical Enhancement",
                  description: "Responsible development that prioritizes human well-being and agency."
                }
              ].map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  onHoverStart={() => setIsHovered(`card-${index}`)}
                  onHoverEnd={() => setIsHovered(null)}
                  className="glass-card p-6 rounded-xl hover:shadow-lg relative overflow-hidden group"
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-everblue/5 to-transparent opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative z-10">
                    <motion.div 
                      className="h-12 w-12 rounded-full bg-everblue/10 flex items-center justify-center mb-4"
                      animate={isHovered === `card-${index}` ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {card.icon}
                    </motion.div>
                    <h3 className="text-xl font-medium mb-3">{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Section>

          {/* Future of IA Section */}
          <Section
            id="future-of-ia"
            subtitle="Looking Ahead"
            title="The Future of Intelligence Amplification"
          >
            <motion.div 
              variants={itemVariants}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  The future of IA lies in creating more intuitive and seamless interactions between humans and technology. We're moving towards systems that understand and adapt to individual cognitive patterns.
                </motion.p>
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  As IA technology evolves, we'll see increasingly sophisticated ways to enhance human capabilities while maintaining the essential human elements of creativity, intuition, and emotional intelligence.
                </motion.p>
                <motion.p 
                  variants={itemVariants} 
                  className="text-lg text-gray-700"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  The goal is to create a future where technology serves as a natural extension of human potential, enabling us to achieve things we never thought possible while staying true to our humanity.
                </motion.p>
              </div>

              <div className="relative">
                <motion.div 
                  className="aspect-square relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-everblue/30 to-everblue/10 z-0"></div>
                  
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotateZ: [0, 5, 0],
                      }}
                      transition={{ 
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="relative"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <motion.div 
                        className="h-40 w-40 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20"
                        whileHover={{
                          boxShadow: "0 0 30px rgba(0, 123, 255, 0.3)",
                          borderColor: "rgba(255, 255, 255, 0.4)"
                        }}
                      >
                        <Lightbulb className="h-20 w-20 text-everblue/70" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-56 w-56 rounded-full border border-white/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full border border-white/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </Section>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default IntelligenceAmplificationPage;
