
import React, { useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const SectionLayout: React.FC<SectionProps> = ({ id, title, subtitle, children, className = '' }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          const elements = section.querySelectorAll('.reveal');
          
          elements.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('active');
            }, i * 100);
          });
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`min-h-screen flex flex-col justify-center section-padding ${className}`}
    >
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 reveal">
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-xl md:text-2xl text-gray-700 mb-16 reveal delay-100">
            {subtitle}
          </h3>
        )}
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionLayout;
