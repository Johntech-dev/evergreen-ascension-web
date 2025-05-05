
import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const hero = entry.target;
          const elements = hero.querySelectorAll('.reveal');
          
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('active');
            }, i * 200);
          });
        }
      });
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative pt-32 pb-20 px-6 md:px-12 lg:px-24"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-everblue/5 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-everblue/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight reveal">
            Mind, Body & <span className="text-everblue">the Alignment Problem</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto reveal delay-100">
            Unlocking Our True Potential with Intelligence Amplification
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row justify-center gap-4 reveal delay-300">
            <a href="#ia" className="btn btn-primary">
              Learn More about IA
            </a>
            <a href="#ventures" className="btn btn-outline">
              Support the Evergreen Initiative
            </a>
          </div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10 reveal">
            <h3 className="text-xl font-bold mb-4">
              Introduction to the Alignment Problem
            </h3>
            <p className="text-gray-700">
              The AI "alignment problem" highlights a fundamental disconnect: conventional AI lacks an understanding of the depth and fluidity of human intelligence. The Evergreen Initiative presents Intelligence Amplification (IA) as a breakthrough alternative—tools that expand cognitive, emotional, and physical intelligence by empowering natural human capacities.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10 reveal delay-100">
            <h3 className="text-xl font-bold mb-4">
              Why Behavioural Biometric Data Needs Protection
            </h3>
            <p className="text-gray-700">
              Your behavioural biometrics reflect your unique world-line and perception of time. This data, essential to creating IA tools that support your individual journey, is deeply personal. The Evergreen Initiative champions data sovereignty, where users control their data to preserve autonomy.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10 reveal delay-200">
            <h3 className="text-xl font-bold mb-4">
              Mind-Body Synchronization
            </h3>
            <p className="text-gray-700">
              Human intelligence flows from mind-body synchronization—the natural rhythms shaping our cognitive and emotional states. IA tools from Evergreen synchronize with these rhythms, optimizing mental and emotional energy in line with thermodynamic principles.
            </p>
          </div>
        </div>
        
        <div className="mt-16 reveal delay-300">
          <h3 className="text-2xl font-bold mb-6">
            Why IA is Fundamental for a Resilient Technological Future
          </h3>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto">
            IA offers a co-evolutionary model where humans and technology grow together, maintaining autonomy and resilience. Anchored in the 4th Cultural Time Perception Shift (4th CTPS), IA adapts to diverse needs, promoting a sustainable future that elevates human potential in alignment with nature.
          </p>
          
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a href="#ia" className="btn btn-primary">
              Learn More about IA
            </a>
            <a href="#ventures" className="btn btn-outline">
              Support the Initiative
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
