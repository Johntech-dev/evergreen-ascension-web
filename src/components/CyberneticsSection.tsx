
import React from 'react';
import SectionLayout from './SectionLayout';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CyberneticsSection: React.FC = () => {
  // Animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6 }
    }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-16">
      <div>
        <motion.div 
          className="mb-12 reveal"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-2xl font-bold mb-4">
            Introduction to Cybernetics and Cymatics
          </h3>
          <p className="text-gray-700">
            The Evergreen Initiative unites Cybernetics—adaptive feedback systems—and Cymatics—the study of resonance, to create IA tools that support natural intelligence. Cybernetics lays the foundation for IA's responsiveness to human input, while Cymatics aligns IA's design with human and ecological frequencies.
          </p>
          
          <motion.div 
            className="mt-6 space-y-2"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <RefreshCw className="h-3 w-3 text-everblue" />
              </span>
              <span>Cybernetics fosters collaboration by creating adaptable IA systems that respond to individual feedback.</span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <Zap className="h-3 w-3 text-everblue" />
              </span>
              <span>Cymatics tunes IA to human frequencies, ensuring harmony with cognitive and ecological rhythms.</span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <Leaf className="h-3 w-3 text-everblue" />
              </span>
              <span>Together, they forge IA as a partnership that amplifies resilience, insight, and ecological harmony.</span>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mb-12 reveal delay-100"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-2xl font-bold mb-4">
            Resonance and Feedback in Intelligence Amplification
          </h3>
          <p className="text-gray-700">
            IA tools enhance, rather than replace, our natural capacities through resonance and feedback. Feedback makes IA adaptive to the user, while resonance allows IA to synchronize with individual temporal perception and natural cycles.
          </p>
          
          <motion.div 
            className="mt-6 space-y-2"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <RefreshCw className="h-3 w-3 text-everblue" />
              </span>
              <span>Feedback and resonance in IA foster a mutually enhancing partnership with technology.</span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <Zap className="h-3 w-3 text-everblue" />
              </span>
              <span>IA adapts to human rhythms, extending our natural capacities with a light touch.</span>
            </motion.div>
            
            <motion.div 
              className="flex items-start"
              variants={fadeInUpVariants}
            >
              <span className="flex items-center justify-center h-6 w-6 rounded-full bg-everblue/10 mr-2">
                <Leaf className="h-3 w-3 text-everblue" />
              </span>
              <span>By elevating rather than replacing human intelligence, IA promotes resilience and growth in a balanced, thermodynamically harmonious system.</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <div>
        <motion.div 
          className="mb-12 reveal delay-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-2xl font-bold mb-4">
            Why Cybernetics and Cymatics Matter Now
          </h3>
          <p className="text-gray-700">
            As the digital landscape rapidly advances, IA provides a human-centred alternative to AI by prioritizing human agency, ecological balance, and cognitive evolution. The cybernetic ecology it creates ensures a resilient technological future where personal agency, natural rhythms, and ethical adaptability are at the forefront.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-12 reveal delay-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <h3 className="text-2xl font-bold mb-4">
            Cybernetics and Cymatics in the 4th CTPS
          </h3>
          <p className="text-gray-700">
            The 4th Cultural Time Perception Shift (4th CTPS) supports IA's role in aligning human potential with technology. This shift empowers individuals to cultivate resilience and cognitive mastery in ways that respect both personal and ecological rhythms.
          </p>
        </motion.div>
        
        <motion.div 
          className="mt-12 reveal delay-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <p className="text-xl font-medium mb-8">
            Support Evergreen as we build IA tools that amplify human intelligence in alignment with natural principles, fostering a future where technology and humanity thrive together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link to="/intelligence-amplification">
                Learn More about IA
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/ventures">
                Support the Initiative
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CyberneticsSection;
