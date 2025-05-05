
import React from 'react';
import SectionLayout from './SectionLayout';
import { motion } from 'framer-motion';

const CitiesSection: React.FC = () => {
  const cities = [
    {
      name: "Copenhagen, Denmark",
      description: "Carbon-neutral by 2025 with green infrastructure, advanced cycling, and a sustainable culture."
    },
    {
      name: "Singapore",
      description: "'City in Nature' with green buildings, integrated transport, and harmonious urban-environmental design."
    },
    {
      name: "Tokyo, Japan",
      description: "Technologically advanced, sustainability-driven, with a deep respect for nature and urban innovation."
    },
    {
      name: "Stockholm, Sweden",
      description: "Fossil-free by 2040, European leader in clean energy, waste management, and sustainable transit."
    },
    {
      name: "Vancouver, Canada",
      description: "Progressively green policies, reduced emissions, and a strong commitment to community sustainability."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <SectionLayout 
      id="cities"
      title="Pioneering Evergreen Cities"
      subtitle="Embodying the Vision of Resilient, Technological Harmony"
      className="bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Introduction to Evergreen Cities
          </h3>
          <p className="text-gray-700">
            Imagine cities that blend technology, resilience, and nature to create spaces where human potential and ecological balance thrive together. Evergreen Cities are designed to set a new global standard by embodying principles of sustainability, adaptive infrastructure, and cultural openness. We invite you to join us in supporting the world's first Evergreen cities—places that will act as prototypes of resilience and innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8">
            Ideal Candidate Cities for the Evergreen Vision
          </h3>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {cities.map((city) => (
              <motion.div 
                key={city.name}
                className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10"
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
              >
                <h4 className="text-lg font-bold mb-3">{city.name}</h4>
                <p className="text-gray-700 text-sm">{city.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Invitation to Collaborate and Support
          </h3>
          <p className="text-gray-700">
            We're seeking partners, innovators, and visionaries to join us in turning these cities into the first Evergreen hubs—centers for resilient growth where technology, culture, and ecology thrive together. By supporting the Evergreen Initiative, you're contributing to a future where human intelligence and environmental sustainability lead the way.
          </p>
        </motion.div>
        
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Ways to Get Involved
          </h3>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0,123,255,0.15)" }}
            >
              <h4 className="text-lg font-bold mb-3 text-everblue">Donate</h4>
              <p className="text-gray-700">
                Direct support for initiatives in Evergreen cities, funding research, technology, and community projects.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0,123,255,0.15)" }}
            >
              <h4 className="text-lg font-bold mb-3 text-everblue">Collaborate with Us</h4>
              <p className="text-gray-700">
                Open to sustainability experts, urban planners, technologists, and community leaders.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(0,123,255,0.15)" }}
            >
              <h4 className="text-lg font-bold mb-3 text-everblue">Contact Us</h4>
              <p className="text-gray-700">
                Interested in partnerships, events, or investment? Reach out to learn more about the Evergreen city vision.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Be a part of the movement toward Evergreen cities—places where innovation and resilience create lasting well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#cities" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Evergreen Cities
            </motion.a>
            <motion.a 
              href="#cities" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Collaboration Opportunities
            </motion.a>
            <motion.a 
              href="#cities" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us for More Information
            </motion.a>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-xl font-bold">
            Closing Statement
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            Together, we can transform cities into Evergreen leaders, creating a sustainable, harmonious future. Join us in making this vision a reality.
          </p>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default CitiesSection;
