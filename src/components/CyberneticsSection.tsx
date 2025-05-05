
import React from 'react';
import SectionLayout from './SectionLayout';

const CyberneticsSection: React.FC = () => {
  return (
    <SectionLayout 
      id="cybernetics"
      title="Cybernetics and Cymatics"
      subtitle="The Foundation of Human-Centred Intelligence"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="mb-12 reveal">
            <h3 className="text-2xl font-bold mb-4">
              Introduction to Cybernetics and Cymatics
            </h3>
            <p className="text-gray-700">
              The Evergreen Initiative unites Cybernetics—adaptive feedback systems—and Cymatics—the study of resonance, to create IA tools that support natural intelligence. Cybernetics lays the foundation for IA's responsiveness to human input, while Cymatics aligns IA's design with human and ecological frequencies.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>Cybernetics fosters collaboration by creating adaptable IA systems that respond to individual feedback.</span>
              </p>
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>Cymatics tunes IA to human frequencies, ensuring harmony with cognitive and ecological rhythms.</span>
              </p>
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>Together, they forge IA as a partnership that amplifies resilience, insight, and ecological harmony.</span>
              </p>
            </div>
          </div>
          
          <div className="mb-12 reveal delay-100">
            <h3 className="text-2xl font-bold mb-4">
              Resonance and Feedback in Intelligence Amplification
            </h3>
            <p className="text-gray-700">
              IA tools enhance, rather than replace, our natural capacities through resonance and feedback. Feedback makes IA adaptive to the user, while resonance allows IA to synchronize with individual temporal perception and natural cycles.
            </p>
            <div className="mt-6 space-y-2">
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>Feedback and resonance in IA foster a mutually enhancing partnership with technology.</span>
              </p>
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>IA adapts to human rhythms, extending our natural capacities with a light touch.</span>
              </p>
              <p className="flex items-start">
                <span className="text-everblue font-bold mr-2">•</span>
                <span>By elevating rather than replacing human intelligence, IA promotes resilience and growth in a balanced, thermodynamically harmonious system.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-12 reveal delay-200">
            <h3 className="text-2xl font-bold mb-4">
              Why Cybernetics and Cymatics Matter Now
            </h3>
            <p className="text-gray-700">
              As the digital landscape rapidly advances, IA provides a human-centred alternative to AI by prioritizing human agency, ecological balance, and cognitive evolution. The cybernetic ecology it creates ensures a resilient technological future where personal agency, natural rhythms, and ethical adaptability are at the forefront.
            </p>
          </div>
          
          <div className="mb-12 reveal delay-300">
            <h3 className="text-2xl font-bold mb-4">
              Cybernetics and Cymatics in the 4th CTPS
            </h3>
            <p className="text-gray-700">
              The 4th Cultural Time Perception Shift (4th CTPS) supports IA's role in aligning human potential with technology. This shift empowers individuals to cultivate resilience and cognitive mastery in ways that respect both personal and ecological rhythms.
            </p>
          </div>
          
          <div className="mt-12 reveal delay-300">
            <p className="text-xl font-medium mb-8">
              Support Evergreen as we build IA tools that amplify human intelligence in alignment with natural principles, fostering a future where technology and humanity thrive together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ia" className="btn btn-primary">
                Learn More about IA
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

export default CyberneticsSection;
