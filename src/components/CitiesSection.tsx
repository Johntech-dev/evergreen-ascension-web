
import React from 'react';
import SectionLayout from './SectionLayout';

const CitiesSection: React.FC = () => {
  const cities = [
    {
      name: "Copenhagen, Denmark",
      description: "Carbon-neutral by 2025 with green infrastructure, advanced cycling, and a sustainable culture."
    },
    {
      name: "Singapore",
      description: ""City in Nature" with green buildings, integrated transport, and harmonious urban-environmental design."
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

  return (
    <SectionLayout 
      id="cities"
      title="Pioneering Evergreen Cities"
      subtitle="Embodying the Vision of Resilient, Technological Harmony"
      className="bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <h3 className="text-2xl font-bold mb-4">
            Introduction to Evergreen Cities
          </h3>
          <p className="text-gray-700">
            Imagine cities that blend technology, resilience, and nature to create spaces where human potential and ecological balance thrive together. Evergreen Cities are designed to set a new global standard by embodying principles of sustainability, adaptive infrastructure, and cultural openness. We invite you to join us in supporting the world's first Evergreen cities—places that will act as prototypes of resilience and innovation.
          </p>
        </div>
        
        <div className="mb-16 reveal delay-100">
          <h3 className="text-2xl font-bold mb-8">
            Ideal Candidate Cities for the Evergreen Vision
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => (
              <div 
                key={city.name}
                className={`bg-white p-6 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10 hover:translate-y-[-5px] reveal delay-${index * 100 + 100}`}
              >
                <h4 className="text-lg font-bold mb-3">{city.name}</h4>
                <p className="text-gray-700 text-sm">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16 reveal delay-200">
          <h3 className="text-2xl font-bold mb-4">
            Invitation to Collaborate and Support
          </h3>
          <p className="text-gray-700">
            We're seeking partners, innovators, and visionaries to join us in turning these cities into the first Evergreen hubs—centers for resilient growth where technology, culture, and ecology thrive together. By supporting the Evergreen Initiative, you're contributing to a future where human intelligence and environmental sustainability lead the way.
          </p>
        </div>
        
        <div className="mb-16 reveal delay-300">
          <h3 className="text-2xl font-bold mb-4">
            Ways to Get Involved
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5">
              <h4 className="text-lg font-bold mb-3 text-everblue">Donate</h4>
              <p className="text-gray-700">
                Direct support for initiatives in Evergreen cities, funding research, technology, and community projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5">
              <h4 className="text-lg font-bold mb-3 text-everblue">Collaborate with Us</h4>
              <p className="text-gray-700">
                Open to sustainability experts, urban planners, technologists, and community leaders.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5">
              <h4 className="text-lg font-bold mb-3 text-everblue">Contact Us</h4>
              <p className="text-gray-700">
                Interested in partnerships, events, or investment? Reach out to learn more about the Evergreen city vision.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center reveal delay-300">
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Be a part of the movement toward Evergreen cities—places where innovation and resilience create lasting well-being.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#cities" className="btn btn-primary">
              Support Evergreen Cities
            </a>
            <a href="#cities" className="btn btn-outline">
              Explore Collaboration Opportunities
            </a>
            <a href="#cities" className="btn btn-outline">
              Contact Us for More Information
            </a>
          </div>
        </div>
        
        <div className="mt-20 text-center reveal delay-300">
          <p className="text-xl font-bold">
            Closing Statement
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            Together, we can transform cities into Evergreen leaders, creating a sustainable, harmonious future. Join us in making this vision a reality.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default CitiesSection;
