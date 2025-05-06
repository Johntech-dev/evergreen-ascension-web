
import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "" 
}) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}
    >
      <div className="container mx-auto">
        {subtitle && (
          <p className="text-lg uppercase tracking-wider text-gray-500 mb-2 font-medium">
            {subtitle}
          </p>
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
