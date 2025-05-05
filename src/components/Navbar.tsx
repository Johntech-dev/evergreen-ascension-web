
import React, { useEffect, useState } from 'react';
import { Home, BookOpen, Users, Info, Building, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: <Home className="w-4 h-4" /> },
  { name: 'Cybernetics & Cymatics', href: '#cybernetics', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Intelligence Amplification', href: '#ia', icon: <BookOpen className="w-4 h-4" /> },
  { name: '4th CTPS', href: '#ctps', icon: <Info className="w-4 h-4" /> },
  { name: '4th Gate Ventures', href: '#ventures', icon: <Users className="w-4 h-4" /> },
  { name: 'AKEA University', href: '#university', icon: <Building className="w-4 h-4" /> },
  { name: 'Evergreen Cities', href: '#cities', icon: <Building className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-black font-bold text-xl flex items-center">
            <span className="text-everblue">Evergreen</span> Initiative
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-everblue transition-colors flex items-center space-x-1"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t mt-4 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-everblue transition-colors flex items-center space-x-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
