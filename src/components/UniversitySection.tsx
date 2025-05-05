
import React from 'react';
import SectionLayout from './SectionLayout';

const UniversitySection: React.FC = () => {
  const researchAreas = [
    {
      title: "Cognitive Science & Adaptive Learning",
      description: "Research focused on personal growth and cognitive enhancement."
    },
    {
      title: "Ecological Design & Sustainability",
      description: "Integrating IA with natural systems for sustainable development."
    },
    {
      title: "Cultural Intelligence & Resilience",
      description: "Preserving cultural heritage and fostering adaptive intelligence."
    },
    {
      title: "Behavioural Biometrics & Data Sovereignty",
      description: "Ensuring ethical use and autonomy in data collection and application."
    }
  ];

  return (
    <SectionLayout 
      id="university"
      title="AKEA University"
      subtitle="Advancing Research in Intelligence Amplification and Cultural Evolution"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold mb-4">
            The Mission of AKEA University
          </h3>
          <p className="text-gray-700">
            AKEA University unites global researchers to advance IA and the 4th CTPS, aligning technology with ecological and human needs. Our mission fosters research that supports personal mastery, cognitive resilience, and ecological balance.
          </p>
        </div>
        
        <div className="mb-16 reveal delay-100">
          <h3 className="text-2xl font-bold mb-8">
            Areas of Research and Collaboration
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div 
                key={area.title}
                className={`bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10 reveal delay-${index * 100 + 100}`}
              >
                <h4 className="text-xl font-bold mb-3">{area.title}</h4>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="mb-12 reveal delay-300">
            <h3 className="text-2xl font-bold mb-4">
              Global Collaboration and Knowledge Exchange
            </h3>
            <p className="text-gray-700">
              Through open-source programs, AKEA University connects global researchers to accelerate IA development and foster cross-cultural insights for sustainable growth.
            </p>
          </div>
          
          <div className="mb-12 reveal delay-300">
            <h3 className="text-2xl font-bold mb-4">
              Turning Research into Real-World Impact
            </h3>
            <p className="text-gray-700">
              Our research extends beyond theory, creating IA solutions that support community resilience and ecological harmony—from cognitive wellness to sustainable design tools.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal delay-300">
          <h3 className="text-2xl font-bold mb-4">
            Call for Collaborators
          </h3>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join us to advance IA in ways that empower human potential, ecological resilience, and cultural depth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#university" className="btn btn-primary">
              Explore Research Opportunities
            </a>
            <a href="#university" className="btn btn-outline">
              Collaborate with AKEA University
            </a>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default UniversitySection;
