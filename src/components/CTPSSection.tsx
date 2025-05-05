
import React from 'react';
import SectionLayout from './SectionLayout';

const CTPSSection: React.FC = () => {
  const shifts = [
    {
      id: 1,
      name: 'Calendar',
      description: 'Marked humanity's ability to track cycles, organize societies, and cultivate a shared memory.',
      link: '#'
    },
    {
      id: 2,
      name: 'Pendulum Clock',
      description: 'Symbolized structured time, inspiring inquiry, organization, and knowledge expansion.',
      link: '#'
    },
    {
      id: 3,
      name: 'Atomic Clock',
      description: 'Introduced precision, driving industrialization and economic growth.',
      link: '#'
    },
    {
      id: 4,
      name: 'Personal Cognitive Computing',
      description: 'Supports adaptive, IA-enabled time perception, fostering individual mastery and ecological alignment.',
      link: '#'
    }
  ];

  return (
    <SectionLayout 
      id="ctps"
      title="The Story of the Awakening of Intelligence"
      subtitle="Humanity's Journey Through Cultural Time Perception Shifts"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 reveal">
          <h3 className="text-2xl font-bold mb-6">
            The Four Cultural Time Perception Shifts (CTPS)
          </h3>
          <p className="text-gray-700 mb-8">
            Each CTPS reflects humanity's evolving understanding of time and intelligence, culminating in the 4th CTPS:
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-12">
              {shifts.map((shift, index) => (
                <div key={shift.id} className={`relative pl-12 reveal delay-${index * 100}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-everblue flex items-center justify-center text-white font-bold">
                    {shift.id}
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10">
                    <h4 className="text-xl font-bold mb-2">
                      {shift.id}{shift.id === 1 ? 'st' : shift.id === 2 ? 'nd' : shift.id === 3 ? 'rd' : 'th'} CTPS: {shift.name}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {shift.description}
                    </p>
                    <a 
                      href={shift.link} 
                      className="text-everblue hover:underline inline-flex items-center"
                    >
                      <span>Link to more info & blog</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal delay-300">
          <p className="text-xl font-medium mb-8">
            Join Evergreen as we advance the 4th CTPS, creating a world where IA and humanity co-evolve in harmony with nature.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#ctps" className="btn btn-primary">
              Learn More about the 4th CTPS
            </a>
            <a href="#ventures" className="btn btn-outline">
              Support the Evergreen Initiative
            </a>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CTPSSection;
