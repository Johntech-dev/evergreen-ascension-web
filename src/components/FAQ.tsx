
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "What is Intelligence Amplification (IA)?",
      answer: "Intelligence Amplification (IA) refers to tools and technologies that enhance human cognitive, emotional, and creative abilities rather than replacing them. Unlike AI that seeks to act autonomously, IA creates a partnership with users that respects individual agency and natural rhythms."
    },
    {
      question: "How does IA differ from AI?",
      answer: "While AI aims to simulate human intelligence and often works autonomously, IA focuses on enhancing natural human intelligence through adaptive feedback systems. IA tools respond to individual needs, working in harmony with human cognition rather than attempting to replace it."
    },
    {
      question: "What is the 4th Cultural Time Perception Shift (CTPS)?",
      answer: "The 4th CTPS represents an evolution in how humanity perceives and interacts with time, characterized by Personal Cognitive Computing that supports adaptive, IA-enabled time perception, fostering individual mastery and ecological alignment."
    },
    {
      question: "How can I get involved with the Evergreen Initiative?",
      answer: "You can support the Evergreen Initiative through investment via 4th Gate Ventures, research collaboration with AKEA University, or by participating in Evergreen Cities projects. Contact us through the website for specific opportunities."
    },
    {
      question: "What is data sovereignty and why does it matter?",
      answer: "Data sovereignty is the principle that individuals should maintain ownership and control over their personal data. In the context of IA, protecting behavioral biometric data is essential for preserving autonomy and ensuring that technology serves human needs rather than exploiting personal information."
    }
  ];

  return (
    <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center reveal">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-6 reveal delay-100">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none bg-white hover:bg-gray-50"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-everblue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-everblue" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-96 py-6 px-6' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
