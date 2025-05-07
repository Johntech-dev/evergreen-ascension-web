
import React, { useEffect, useState } from 'react';
import { Home, BookOpen, Users, Info, Building, Menu, X, ChevronRight, Image } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'Cybernetics & Cymatics', href: '/cybernetics', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Intelligence Amplification', href: '/intelligence-amplification', icon: <BookOpen className="w-4 h-4" /> },
  { name: '4th CTPS', href: '/ctps', icon: <Info className="w-4 h-4" /> },
  { name: '4th Gate Ventures', href: '/ventures', icon: <Users className="w-4 h-4" /> },
  { name: 'AKEA University', href: '/university', icon: <Building className="w-4 h-4" /> },
  { name: 'Evergreen Cities', href: '/cities', icon: <Building className="w-4 h-4" /> },
  { name: 'Gallery', href: '/gallery', icon: <Image className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-black font-bold text-xl flex items-center">
            <motion.span 
              className="text-everblue"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              TheEvergreen
            </motion.span> 
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Initiative
            </motion.span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-3">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative group text-black hover:text-everblue transition-colors flex items-center space-x-1
                  ${location.pathname === item.href ? 'text-everblue' : ''}
                `}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.span>
                
                {/* Animated underline */}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-everblue group-hover:w-full"
                  initial={false}
                  animate={location.pathname === item.href ? { width: '100%' } : {}}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ rotate: isMenuOpen ? 0 : 5 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="lg:hidden bg-white border-t mt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <motion.div 
                className="flex flex-col space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: { staggerChildren: 0.08 }
                  },
                  hidden: {}
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    variants={{
                      visible: { opacity: 1, x: 0 },
                      hidden: { opacity: 0, x: -20 }
                    }}
                  >
                    <Link
                      to={item.href}
                      className={`text-black hover:text-everblue transition-colors flex items-center space-x-2 py-2 ${
                        location.pathname === item.href ? 'text-everblue font-medium' : ''
                      }`}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronRight className="ml-auto w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
