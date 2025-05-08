import { useState, useEffect } from "react";
import { Zap, RefreshCw, GitBranch, Cpu, ArrowRight, Brain, Lightbulb, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const IntelligenceAmplification = () => {
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
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background video with parallax effect */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`, 
              transition: 'transform 0.1s ease-out'
            }}
          >
            {/* Adaptive overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/30 dark:from-black/80 dark:via-black/50 dark:to-black/40 z-10"></div>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/hero-video.webm" type="video/webm" />
              <source src="/hero-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Content */}
          <div className="container mt-24 mx-auto px-4 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Unlocking Intelligence Amplification
                <br />
                <span className="text-primary">
                  The Future of Human-Machine Partnership
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto">
                Discover how Intelligence Amplification enhances human potential through adaptive technology and cognitive evolution.
              </p>
            </motion.div>
          </div>

          {/* Decorative circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full border border-black/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/3 w-96 h-96 rounded-full border border-black/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>

        {/* What is IA Section */}
        <Section
          id="what-is-ia"
          subtitle="Introduction"
          title="What is Intelligence Amplification?"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
            <div>
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                IA represents a paradigm shift where technology enhances our cognitive, emotional, and creative abilities rather than seeking to act autonomously. Designed to resonate with human thought and experience, IA aligns with our natural capacities, creating a partnership that supports growth and mastery in an adaptive world.
              </p>
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Brain className="text-black h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm sm:text-base">Enhances cognitive abilities through adaptive technology</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Lightbulb className="text-black h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm sm:text-base">Fosters creativity and emotional intelligence</p>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="text-black h-5 w-5 sm:h-6 sm:w-6 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-sm sm:text-base">Creates a symbiotic partnership with human intelligence</p>
                </motion.div>
              </div>
            </div>
            <div>
              <motion.div 
                className="glass-card p-4 sm:p-6 rounded-2xl overflow-hidden aspect-square flex items-center justify-center relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Cpu className="h-24 sm:h-32 md:h-48 w-24 sm:w-32 md:w-48 text-black opacity-70" />
                <motion.div 
                  className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full border-2 border-black/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute w-32 sm:w-48 h-32 sm:h-48 rounded-full border border-black/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
        </Section>

        {/* Why IA Matters Section */}
        <Section
          id="why-ia-matters"
          title="Why Intelligence Amplification Matters Now"
          subtitle="The Critical Moment"
          className="bg-black/5"
        >
          <div className="max-w-3xl mx-auto">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              In an era where automation often outpaces human needs, IA provides a path for autonomy, resilience, and adaptation. IA allows us to shape our own experiences, ensuring that technology serves human potential and protects individual agency.
            </motion.p>
          </div>
        </Section>

        {/* Human-Machine Interaction Section */}
        <Section
          id="human-machine-interaction"
          title="How IA Supports Human-Machine Interaction"
          subtitle="Symbiotic Collaboration"
        >
          <div className="max-w-3xl mx-auto">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              IA fosters a symbiotic, real-time relationship with human intelligence, responsive to unique strengths and natural rhythms. IA is not merely a tool but a cognitive partner that enhances problem-solving, creativity, and resilience, opening up new dimensions in human-machine collaboration.
            </motion.p>
          </div>
        </Section>

        {/* Cognitive Evolution Section */}
        <Section
          id="cognitive-evolution"
          title="IA and Human Cognitive Evolution"
          subtitle="Expanding Human Potential"
          className="bg-black/5"
        >
          <div className="max-w-3xl mx-auto">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The potential of IA extends beyond individual benefit, acting as a catalyst for human cognitive evolution. By expanding our capacity for insight and adaptability, IA supports a future where human intelligence evolves with technology in alignment with the 4th CTPS.
            </motion.p>
          </div>
        </Section>

        {/* Call to Action Section */}
        <Section
          id="join-movement"
          title="Join the Evergreen Movement"
          subtitle="Unlock Human Potential"
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.p 
              className="text-lg leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Join the Evergreen movement to unlock human potential through IA, creating a resilient future grounded in cognitive empowerment and environmental balance.
            </motion.p>
            <motion.div 
              className="space-y-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div 
                className="p-4 border border-border rounded-lg hover:border-black/30 transition-all duration-300"
                variants={itemVariants}
              >
                <Button asChild size="lg" className="rounded-full group">
                  <Link to="/discover-ia">
                    Discover the Vision of IA
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div 
                className="p-4 border border-border rounded-lg"
                variants={itemVariants}
              >
                <Button asChild variant="outline" size="lg" className="rounded-full group text-white">
                  <Link to="/support-initiative">
                    Support the Initiative
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default IntelligenceAmplification; 