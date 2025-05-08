import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { Building2, Leaf, TreePine, Users, Globe, ArrowRight, MapPin, Heart, Sparkles, Lightbulb, Hand, CheckIcon, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const EvergreenCitiesPage: React.FC = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Enhanced parallax effects
  const y1 = useTransform(smoothProgress, [0, 1], [0, 150]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -150]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.1]);

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
    initial: { 
      scale: 1,
      y: 0,
      opacity: 0.8
    },
    hover: { 
      scale: 1.02,
      y: -10,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const cityData = [
    {
      name: "Copenhagen",
      country: "Denmark",
      image: "/images/cities/copenhagen.jpg",
      highlights: [
        "Carbon-neutral by 2025",
        "Green infrastructure",
        "Advanced cycling network",
        "Sustainable culture"
      ],
      icon: <TreePine className="h-10 w-10 text-white" />,
      color: "from-green-500/30 to-green-600/30"
    },
    {
      name: "Singapore",
      country: "Singapore",
      image: "/images/cities/singapore.jpg",
      highlights: [
        "City in Nature vision",
        "Green buildings",
        "Integrated transport",
        "Urban-environmental harmony"
      ],
      icon: <Building2 className="h-10 w-10 text-white" />,
      color: "from-blue-500/30 to-blue-600/30"
    },
    {
      name: "Tokyo",
      country: "Japan",
      image: "/images/cities/tokyo.jpg",
      highlights: [
        "Technological advancement",
        "Sustainability initiatives",
        "Respect for nature",
        "Urban innovation"
      ],
      icon: <Sparkles className="h-10 w-10 text-white" />,
      color: "from-red-500/30 to-red-600/30"
    },
    {
      name: "Stockholm",
      country: "Sweden",
      image: "/images/cities/stockholm.jpg",
      highlights: [
        "Fossil-free by 2040",
        "European leader in clean energy",
        "Advanced waste management",
        "Sustainable transit"
      ],
      icon: <Leaf className="h-10 w-10 text-white" />,
      color: "from-yellow-500/30 to-yellow-600/30"
    },
    {
      name: "Vancouver",
      country: "Canada",
      image: "/images/cities/vancouver.jpg",
      highlights: [
        "Progressive green policies",
        "Reduced emissions",
        "Strong community engagement",
        "Commitment to sustainability"
      ],
      icon: <Globe className="h-10 w-10 text-white" />,
      color: "from-purple-500/30 to-purple-600/30"
    }
  ];

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-white to-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-everblue/10 to-transparent"
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
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-8"
              animate={{ 
                textShadow: [
                  "0 0 0px rgba(0, 123, 255, 0)",
                  "0 0 30px rgba(0, 123, 255, 0.3)",
                  "0 0 0px rgba(0, 123, 255, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Pioneering Evergreen Cities
              <br />
              <span className="text-everblue bg-clip-text text-transparent bg-gradient-to-r from-everblue to-blue-600">
                Embodying the Vision of Resilient, Technological Harmony
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-12"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              Imagine cities that blend technology, resilience, and nature to create spaces where human potential and ecological balance thrive together.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-everblue hover:bg-everblue/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Support Evergreen Cities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-everblue text-everblue hover:bg-everblue/10 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                Explore Collaboration Opportunities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full border border-everblue/10"
            style={{ y: y1 }}
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/3 w-[32rem] h-[32rem] rounded-full border border-everblue/10"
            style={{ y: y2 }}
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          {/* Enhanced floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-everblue/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 200 - 100],
                x: [0, Math.random() * 200 - 100],
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-32"
        >
          {/* Introduction Section */}
          <Section
            id="introduction"
            subtitle="Our Vision"
            title="Introduction to Evergreen Cities"
            className="bg-primary/5 relative overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <motion.div 
                  className="aspect-square relative overflow-hidden rounded-3xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-everblue/40 to-everblue/20 z-0"></div>
                  
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
                        className="h-48 w-48 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20"
                        whileHover={{
                          boxShadow: "0 0 40px rgba(0, 123, 255, 0.4)",
                          borderColor: "rgba(255, 255, 255, 0.5)"
                        }}
                      >
                        <Building2 className="h-24 w-24 text-white/90" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full border border-white/10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      />
                      
                      <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full border border-white/5"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="space-y-8">
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  Evergreen Cities are designed to set a new global standard by embodying principles of sustainability, adaptive infrastructure, and cultural openness.
                </motion.p>
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  We invite you to join us in supporting the world's first Evergreen cities—places that will act as prototypes of resilience and innovation.
                </motion.p>
                <motion.p 
                  className="text-xl text-gray-700 leading-relaxed"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  By supporting the Evergreen Initiative, you're contributing to a future where human intelligence and environmental sustainability lead the way.
                </motion.p>
              </div>
            </div>
          </Section>

          {/* Cities Section */}
          <Section
            id="candidates"
            subtitle="Leading Cities"
            title="Ideal Candidate Cities for the Evergreen Vision"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {cityData.map((city, index) => (
                <motion.div 
                  key={city.name}
                  className={`glass-card rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg bg-gradient-to-br ${city.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={city.image} 
                      alt={`${city.name}, ${city.country}`} 
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-black/80 text-white text-xs rounded-full">{city.country}</span>
                    </div>
                  </AspectRatio>
                  <div className="p-6">
                    <div className="flex items-start">
                      <div className="h-14 w-14 rounded-xl bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                        {city.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium mb-1">{city.name}</h3>
                        <p className="text-white/80 text-sm mb-4">{city.country}</p>
                        <ul className="space-y-2">
                          {city.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-center">
                              <div className="h-5 w-5 rounded-full bg-white/10 flex items-center justify-center mr-3 flex-shrink-0">
                                <CheckIcon className="text-white h-3 w-3" />
                              </div>
                              <span className="text-sm text-white/90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Collaboration Section */}
          <Section
            id="collaboration"
            subtitle="Get Involved"
            title="Invitation to Collaborate and Support"
            className="bg-primary/5 relative overflow-hidden"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-8 text-center">
                We're seeking partners, innovators, and visionaries to join us in turning these cities into the first Evergreen hubs—centers for resilient growth where technology, culture, and ecology thrive together. By supporting the Evergreen Initiative, you're contributing to a future where human intelligence and environmental sustainability lead the way.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <motion.div 
                  className="glass-card rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-16 w-16 rounded-full bg-everblue/10 flex items-center justify-center mx-auto mb-4">
                    <Hand className="text-everblue h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-2">Donate</h3>
                  <p className="text-muted-foreground text-sm">Direct support for initiatives in Evergreen cities, funding research, technology, and community projects.</p>
                </motion.div>
                
                <motion.div 
                  className="glass-card rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-16 w-16 rounded-full bg-everblue/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-everblue h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-2">Collaborate With Us</h3>
                  <p className="text-muted-foreground text-sm">Open to sustainability experts, urban planners, technologists, and community leaders.</p>
                </motion.div>
                
                <motion.div 
                  className="glass-card rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="h-16 w-16 rounded-full bg-everblue/10 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="text-everblue h-8 w-8" />
                  </div>
                  <h3 className="font-medium mb-2">Contact Us</h3>
                  <p className="text-muted-foreground text-sm">Interested in partnerships, events, or investment? Reach out to learn more about the Evergreen city vision.</p>
                </motion.div>
              </div>
            </div>
          </Section>

          {/* CTA Section */}
          <Section
            id="cta"
            subtitle="Take Action"
            title="Be Part of the Movement"
          >
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg leading-relaxed mb-8">
                Be a part of the movement toward Evergreen cities—places where innovation and resilience create lasting well-being.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <Button size="lg" className="rounded-full bg-everblue text-white hover:bg-everblue/90" asChild>
                  <a href="#donate" className="flex items-center">
                    Support Evergreen Cities
                    <ArrowRight className="ml-2 h-4 w-4 text-white" />
                  </a>
                </Button>
                
                <Button variant="outline" size="lg" className="rounded-full border-everblue text-everblue hover:bg-everblue/10" asChild>
                  <a href="#collaborate" className="flex items-center">
                    Explore Collaboration Opportunities
                    <ArrowRight className="ml-2 h-4 w-4 text-everblue" />
                  </a>
                </Button>
                
                <Button variant="ghost" size="lg" className="rounded-full text-everblue hover:bg-everblue/10" asChild>
                  <a href="mailto:contact@evergreen-cities.org" className="flex items-center">
                    Contact Us for More Information
                    <ArrowRight className="ml-2 h-4 w-4 text-everblue" />
                  </a>
                </Button>
              </div>
              
              <div className="mt-16 py-8 px-4 sm:px-8 bg-everblue/5 backdrop-blur-sm rounded-2xl max-w-xl mx-auto border border-everblue/10">
                <h3 className="text-xl font-medium mb-4">Together, we can transform cities</h3>
                <p className="mb-6">Join us in creating Evergreen leaders for a sustainable, harmonious future.</p>
                <Button size="lg" className="rounded-full bg-everblue text-white hover:bg-everblue/90" asChild>
                  <a href="mailto:join@evergreen-cities.org">Get Started</a>
                </Button>
              </div>
            </div>
          </Section>
        </motion.div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default EvergreenCitiesPage; 