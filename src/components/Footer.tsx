
import React from 'react';
import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 px-6 md:px-12 lg:px-24 border-t">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-everblue">Evergreen</span> Initiative
            </h3>
            <p className="text-gray-600 mb-6">
              Unlocking human potential through intelligence amplification and ecological harmony.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Navigation</h4>
            <div className="grid grid-cols-2 gap-4">
              <a href="#home" className="text-gray-600 hover:text-everblue">Home</a>
              <a href="#cybernetics" className="text-gray-600 hover:text-everblue">Cybernetics</a>
              <a href="#ia" className="text-gray-600 hover:text-everblue">Intelligence Amplification</a>
              <a href="#ctps" className="text-gray-600 hover:text-everblue">4th CTPS</a>
              <a href="#ventures" className="text-gray-600 hover:text-everblue">4th Gate Ventures</a>
              <a href="#university" className="text-gray-600 hover:text-everblue">AKEA University</a>
              <a href="#cities" className="text-gray-600 hover:text-everblue">Evergreen Cities</a>
              <a href="#faq" className="text-gray-600 hover:text-everblue">FAQ</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-3 text-everblue" />
              <a href="mailto:contact@evergreen-initiative.org" className="text-gray-600 hover:text-everblue">
                contact@evergreen-initiative.org
              </a>
            </div>
            
            <h4 className="font-bold text-lg mb-4 mt-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-everblue transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-everblue transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-everblue transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Evergreen Initiative. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-everblue text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-everblue text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
