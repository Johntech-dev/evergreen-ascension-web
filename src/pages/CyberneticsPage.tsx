
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowRight, Brain, Zap, RefreshCw, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CyberneticsHero from "../components/CyberneticsHero";
import Section from "../components/Section";

const CyberneticsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <CyberneticsHero />
        
        {/* Introduction Section */}
        <Section
          id="introduction"
          subtitle="Introduction"
          title="Introduction to Cybernetics and Cymatics"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <p className="text-lg leading-relaxed mb-6">
                The Evergreen Initiative unites <span className="text-everblue font-medium">Cybernetics</span>—adaptive feedback systems—and <span className="text-everblue font-medium">Cymatics</span>—the study of resonance, to create IA tools that support natural intelligence.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Cybernetics lays the foundation for IA's responsiveness to human input, while Cymatics aligns IA's design with human and ecological frequencies. This synergy, an essential part of a cybernetic ecology, enables IA to amplify human insight without overwhelming or controlling, attuning technology to earth's natural cycles and humanity's inherent rhythms.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black/10 flex items-center justify-center mr-4">
                    <RefreshCw className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Adaptive Feedback</h3>
                    <p>Cybernetics fosters collaboration by creating adaptable IA systems that respond to individual feedback.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black/10 flex items-center justify-center mr-4">
                    <Zap className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Frequency Alignment</h3>
                    <p>Cymatics tunes IA to human frequencies, ensuring harmony with cognitive and ecological rhythms.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-black/10 flex items-center justify-center mr-4">
                    <Leaf className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Ecological Harmony</h3>
                    <p>Together, they forge IA as a partnership that amplifies resilience, insight, and ecological harmony.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="aspect-square relative">
                <motion.div 
                  className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-black/20 to-transparent"
                  animate={{ 
                    boxShadow: ["0 0 20px rgba(0, 0, 0, 0.2)", "0 0 40px rgba(0, 0, 0, 0.4)", "0 0 20px rgba(0, 0, 0, 0.2)"]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative">
                    <Brain className="h-32 w-32 text-black/70" />
                    
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-black/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <motion.div 
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-black/20"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </Section>
        
        {/* Resonance Section */}
        <Section
          id="resonance"
          subtitle="Resonance & Feedback"
          title="Resonance and Feedback in Intelligence Amplification"
          className="bg-everblue/5"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg leading-relaxed mb-6">
                IA tools enhance, rather than replace, our natural capacities through resonance and feedback. Feedback makes IA adaptive to the user, while resonance allows IA to synchronize with individual temporal perception and natural cycles.
              </p>
              <p className="text-lg leading-relaxed">
                This approach turns technology into a partner in cognitive and emotional growth, elevating the human experience rather than imposing limitations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div 
                className="p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-medium mb-3">Adaptive Partnership</h3>
                <p>Feedback and resonance in IA foster a mutually enhancing partnership with technology.</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-medium mb-3">Natural Rhythms</h3>
                <p>IA adapts to human rhythms, extending our natural capacities with a light touch.</p>
              </motion.div>
              
              <motion.div 
                className="p-6 rounded-xl hover:shadow-lg transition-all duration-300 bg-white shadow"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="h-12 w-12 rounded-full bg-black/10 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-xl font-medium mb-3">Balanced Growth</h3>
                <p>By elevating rather than replacing human intelligence, IA promotes resilience and growth in a balanced, thermodynamically harmonious system.</p>
              </motion.div>
            </div>
          </motion.div>
        </Section>
        
        {/* Why Cybernetics Matter Now Section */}
        <Section
          id="why-now"
          subtitle="Current Relevance"
          title="Why Cybernetics and Cymatics Matter Now"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <div className="aspect-square relative overflow-hidden rounded-2xl">
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
                  >
                    <div className="h-40 w-40 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <Zap className="h-20 w-20 text-black/70" />
                    </div>
                    
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
              </div>
            </div>
                    
            <div>
              <p className="text-lg leading-relaxed mb-6">
                As the digital landscape rapidly advances, IA provides a human-centred alternative to AI by prioritizing human agency, ecological balance, and cognitive evolution.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The cybernetic ecology it creates ensures a resilient technological future where personal agency, natural rhythms, and ethical adaptability are at the forefront.
              </p>
              
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-everblue text-white hover:bg-everblue/90">
                  <a href="#ctps">
                    Explore the 4th CTPS
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </Section>
        
        {/* 4th CTPS Section */}
        <Section
          id="ctps"
          subtitle="Time Perception"
          title="Cybernetics and Cymatics in the 4th CTPS"
          className="bg-everblue/5"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-lg leading-relaxed mb-10">
                The 4th Cultural Time Perception Shift (4th CTPS) supports IA's role in aligning human potential with technology. This shift empowers individuals to cultivate resilience and cognitive mastery in ways that respect both personal and ecological rhythms.
              </p>
              
              <div className="p-8 rounded-xl backdrop-blur-md bg-white/80 border border-white/20 shadow-xl relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-everblue/10 rounded-full blur-3xl z-0"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium mb-4">Key Aspects of the 4th CTPS</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-black/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-black text-sm font-medium">1</span>
                      </div>
                      <p>Acknowledges the individual nature of time perception and its impact on cognitive processes.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-black/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-black text-sm font-medium">2</span>
                      </div>
                      <p>Recognizes the connection between personal time perception and ecological cycles.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-black/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-black text-sm font-medium">3</span>
                      </div>
                      <p>Provides a framework for IA to adapt to individual cognitive patterns while respecting ecological balance.</p>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-black/20 flex items-center justify-center mr-3 mt-1">
                        <span className="text-black text-sm font-medium">4</span>
                      </div>
                      <p>Enables a co-evolutionary approach where humans and technology grow together in harmony.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
        
        {/* Call to Action */}
        <Section
          id="support"
          subtitle="Join Us"
          title="Support Our Vision"
        >
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInVariants}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-lg leading-relaxed mb-8">
              Support Evergreen as we build IA tools that amplify human intelligence in alignment with natural principles, fostering a future where technology and humanity thrive together.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-everblue text-white hover:bg-everblue/90">
                <a href="/ventures">
                  Support the Initiative
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button variant="outline" asChild size="lg" className="rounded-full">
                <a href="/intelligence-amplification">
                  Learn More about IA
                </a>
              </Button>
            </div>
          </motion.div>
        </Section>
      </main>
      <Footer />
    </>
  );
};

export default CyberneticsPage;
