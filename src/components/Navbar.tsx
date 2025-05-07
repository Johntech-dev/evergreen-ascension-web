import React, { useEffect, useState } from 'react';
import { Home, BookOpen, Users, Info, Building, Menu, X, ChevronRight, Image, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
  name: string;
  href?: string;
  icon: React.ReactNode;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  {
    name: 'Research',
    icon: <BookOpen className="w-4 h-4" />,
    dropdown: [
      { name: 'Cybernetics & Cymatics', href: '/cybernetics', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Intelligence Amplification', href: '/intelligence-amplification', icon: <BookOpen className="w-4 h-4" /> },
    ]
  },
  {
    name: 'Initiatives',
    icon: <Info className="w-4 h-4" />,
    dropdown: [
      { name: '4th CTPS', href: '/ctps', icon: <Info className="w-4 h-4" /> },
      { name: '4th Gate Ventures', href: '/ventures', icon: <Users className="w-4 h-4" /> },
    ]
  },
  { name: 'AKEA University', href: '/university', icon: <Building className="w-4 h-4" /> },
  { name: 'Evergreen Cities', href: '/cities', icon: <Building className="w-4 h-4" /> },
  { name: 'Gallery', href: '/gallery', icon: <Image className="w-4 h-4" /> },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
    setActiveDropdown(null);
  }, [location]);

  const isActiveLink = (href: string) => location.pathname === href;
  const isActiveDropdown = (dropdown: NavItem[]) => dropdown.some(item => item.href && isActiveLink(item.href));

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
          <div className="hidden lg:flex gap-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center space-x-2 text-black hover:text-everblue transition-colors
                        ${isActiveDropdown(item.dropdown) ? 'text-everblue' : ''}
                      `}
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-3 w-56 bg-white rounded-lg shadow-lg py-3"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className={`block px-5 py-2.5 text-sm hover:bg-everblue/10 hover:text-everblue transition-colors
                                ${isActiveLink(dropdownItem.href) ? 'text-everblue bg-everblue/5' : 'text-gray-700'}
                              `}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`relative group text-black hover:text-everblue transition-colors flex items-center space-x-2
                      ${isActiveLink(item.href) ? 'text-everblue' : ''}
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
                      animate={isActiveLink(item.href) ? { width: '100%' } : {}}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </div>
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
                className="flex flex-col space-y-6"
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
                    {item.dropdown ? (
                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="w-full text-black hover:text-everblue transition-colors flex items-center space-x-3 py-2"
                        >
                          {item.icon}
                          <span>{item.name}</span>
                          <ChevronDown className={`ml-auto w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-10 space-y-3"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className={`block text-black hover:text-everblue transition-colors flex items-center space-x-3 py-2.5 ${
                                    isActiveLink(dropdownItem.href) ? 'text-everblue font-medium' : ''
                                  }`}
                                >
                                  {dropdownItem.icon}
                                  <span>{dropdownItem.name}</span>
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-black hover:text-everblue transition-colors flex items-center space-x-3 py-2.5 ${
                          isActiveLink(item.href) ? 'text-everblue font-medium' : ''
                        }`}
                      >
                        {item.icon}
                        <span>{item.name}</span>
                        <ChevronRight className="ml-auto w-4 h-4" />
                      </Link>
                    )}
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
