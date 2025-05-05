
import React from 'react';
import SectionLayout from './SectionLayout';

const VenturesSection: React.FC = () => {
  return (
    <SectionLayout 
      id="ventures"
      title="4th Gate Ventures"
      subtitle="Investing in Humanity's Next Evolution"
      className="bg-gray-50"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="mb-12 reveal">
            <h3 className="text-2xl font-bold mb-4">
              The Vision of 4th Gate Ventures
            </h3>
            <p className="text-gray-700">
              4th Gate Ventures fuels IA technologies that amplify human intelligence and promote ecological balance, supporting the 4th CTPS. We seek visionary investors committed to a future where technology enhances personal autonomy and cognitive evolution.
            </p>
          </div>
          
          <div className="mb-12 reveal delay-100">
            <h3 className="text-2xl font-bold mb-4">
              Why Now? The Unique Opportunity of Early Investment
            </h3>
            <p className="text-gray-700">
              Investing in IA offers an unprecedented opportunity to shape a human-centred digital ecosystem focused on growth and sustainability. With applications spanning education, cognitive health, and ecological design, IA presents high-impact potential for investors dedicated to advancing humanity.
            </p>
          </div>
        </div>
        
        <div>
          <div className="mb-12 reveal delay-200">
            <h3 className="text-2xl font-bold mb-4">
              How 4th Gate Ventures Drives Innovation
            </h3>
            <p className="text-gray-700">
              Our investments target cognitive wellness, adaptive learning, and ecological IA applications, creating technology that resonates with diverse human and environmental needs for a resilient, balanced future.
            </p>
          </div>
          
          <div className="mb-12 reveal delay-300">
            <h3 className="text-2xl font-bold mb-4">
              Invitation to Visionary Investors
            </h3>
            <p className="text-gray-700">
              If you believe in the future of IA and a cybernetic ecology that promotes human intelligence, resilience, and ecological harmony, join 4th Gate Ventures.
            </p>
          </div>
          
          <div className="mt-12 reveal delay-300">
            <p className="text-xl font-medium mb-8">
              Invest in a sustainable, resilient future. Join 4th Gate Ventures to help lead the movement toward intelligence amplification and human-centred growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#ventures" className="btn btn-primary">
                Learn More About IA Investment
              </a>
              <a href="#ventures" className="btn btn-outline">
                Contact 4th Gate Ventures
              </a>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default VenturesSection;
