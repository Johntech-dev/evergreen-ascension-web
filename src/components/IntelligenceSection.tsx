
import React from 'react';
import SectionLayout from './SectionLayout';

const IntelligenceSection: React.FC = () => {
  return (
    <SectionLayout 
      id="ia"
      title="Unlocking Intelligence Amplification"
      subtitle="The Future of Human-Machine Partnership"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div className="reveal">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-xl shadow-everblue/5 p-1 mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-everblue/20 to-transparent opacity-20 rounded-xl"></div>
            <div className="bg-white p-8 rounded-xl relative">
              <h3 className="text-2xl font-bold mb-4">
                What is Intelligence Amplification?
              </h3>
              <p className="text-gray-700">
                IA represents a paradigm shift where technology enhances our cognitive, emotional, and creative abilities rather than seeking to act autonomously. Designed to resonate with human thought and experience, IA aligns with our natural capacities, creating a partnership that supports growth and mastery in an adaptive world.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-xl shadow-everblue/5 p-1 mb-8 reveal delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-everblue/20 to-transparent opacity-20 rounded-xl"></div>
            <div className="bg-white p-8 rounded-xl relative">
              <h3 className="text-2xl font-bold mb-4">
                Why Intelligence Amplification Matters Now
              </h3>
              <p className="text-gray-700">
                In an era where automation often outpaces human needs, IA provides a path for autonomy, resilience, and adaptation. IA allows us to shape our own experiences, ensuring that technology serves human potential and protects individual agency.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-xl shadow-everblue/5 p-1 mb-8 reveal delay-200">
            <div className="absolute inset-0 bg-gradient-to-br from-everblue/20 to-transparent opacity-20 rounded-xl"></div>
            <div className="bg-white p-8 rounded-xl relative">
              <h3 className="text-2xl font-bold mb-4">
                How IA Supports Human-Machine Interaction
              </h3>
              <p className="text-gray-700">
                IA fosters a symbiotic, real-time relationship with human intelligence, responsive to unique strengths and natural rhythms. IA is not merely a tool but a cognitive partner that enhances problem-solving, creativity, and resilience, opening up new dimensions in human-machine collaboration.
              </p>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-white to-gray-100 shadow-xl shadow-everblue/5 p-1 mb-8 reveal delay-300">
            <div className="absolute inset-0 bg-gradient-to-br from-everblue/20 to-transparent opacity-20 rounded-xl"></div>
            <div className="bg-white p-8 rounded-xl relative">
              <h3 className="text-2xl font-bold mb-4">
                IA and Human Cognitive Evolution
              </h3>
              <p className="text-gray-700">
                The potential of IA extends beyond individual benefit, acting as a catalyst for human cognitive evolution. By expanding our capacity for insight and adaptability, IA supports a future where human intelligence evolves with technology in alignment with the 4th CTPS.
              </p>
            </div>
          </div>
          
          <div className="mt-8 reveal delay-300">
            <p className="text-xl font-medium mb-8">
              Join the Evergreen movement to unlock human potential through IA, creating a resilient future grounded in cognitive empowerment and environmental balance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ctps" className="btn btn-primary">
                Discover the Vision of IA
              </a>
              <a href="#ventures" className="btn btn-outline">
                Support the Initiative
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default IntelligenceSection;
