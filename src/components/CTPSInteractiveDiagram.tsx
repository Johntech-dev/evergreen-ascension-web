
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Clock, Calendar, BarChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';

type CTPSCardProps = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: 'top' | 'right' | 'bottom' | 'left' | 'center';
  isCenter?: boolean;
};

const CTPSCard: React.FC<CTPSCardProps> = ({ 
  id, 
  title, 
  description, 
  icon, 
  isCenter = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: id === '4' ? 0 : 0.2 * parseInt(id) }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card 
        className={`
          ${isCenter 
            ? 'bg-everblue text-white border-everblue/30 shadow-lg shadow-everblue/20'
            : 'bg-white hover:bg-everblue/5 border-gray-100'
          } 
          glass-card relative overflow-hidden transition-all duration-300 z-10
          ${isHovered ? 'translate-y-[-8px] shadow-xl' : ''}
        `}
      >
        {isCenter && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-everblue to-everblue/80 opacity-80 z-0"
            animate={{ 
              background: [
                'linear-gradient(135deg, rgba(71, 145, 97, 0.8) 0%, rgba(71, 145, 97, 0.6) 100%)',
                'linear-gradient(225deg, rgba(71, 145, 97, 0.8) 0%, rgba(71, 145, 97, 0.6) 100%)',
                'linear-gradient(315deg, rgba(71, 145, 97, 0.8) 0%, rgba(71, 145, 97, 0.6) 100%)',
                'linear-gradient(45deg, rgba(71, 145, 97, 0.8) 0%, rgba(71, 145, 97, 0.6) 100%)'
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        )}
        
        <CardHeader className="relative z-10">
          <motion.div 
            className={`
              w-12 h-12 rounded-full flex items-center justify-center mb-3
              ${isCenter 
                ? 'bg-white/20 text-white' 
                : 'bg-everblue/10 text-everblue'
              }
            `}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.div>
          <CardTitle className={`text-xl ${isCenter ? 'text-white' : ''}`}>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="relative z-10">
          <p className={isCenter ? 'text-white/90' : 'text-gray-600'}>
            {description}
          </p>
          
          <motion.div 
            className="mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href={`#ctps-${id}`} 
              className={`
                text-sm font-medium inline-flex items-center
                ${isCenter ? 'text-white' : 'text-everblue'}
              `}
            >
              Learn more 
              <svg 
                className="ml-1 w-4 h-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </a>
          </motion.div>
        </CardContent>

        {isHovered && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-everblue"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </Card>
    </motion.div>
  );
};

const CTPSInteractiveDiagram: React.FC = () => {
  const ctpsData: CTPSCardProps[] = [
    {
      id: '1',
      title: '1st CTPS: Calendar',
      description: 'Marked humanity\'s ability to track cycles, organize societies, and cultivate a shared memory.',
      icon: <Calendar className="h-6 w-6" />,
      position: 'top',
    },
    {
      id: '2',
      title: '2nd CTPS: Pendulum Clock',
      description: 'Symbolized structured time, inspiring inquiry, organization, and knowledge expansion.',
      icon: <Clock className="h-6 w-6" />,
      position: 'left',
    },
    {
      id: '4',
      title: '4th CTPS: Personal Cognitive Computing',
      description: 'Supports adaptive, IA-enabled time perception, fostering individual mastery and ecological alignment.',
      icon: <Brain className="h-6 w-6" />,
      position: 'center',
      isCenter: true,
    },
    {
      id: '3',
      title: '3rd CTPS: Atomic Clock',
      description: 'Introduced precision, driving industrialization and economic growth.',
      icon: <Zap className="h-6 w-6" />,
      position: 'right',
    },
    {
      id: '5',
      title: 'The Outcomes',
      description: 'Cultural Time Perception Shifts drive technological, economic, and social transformation over history.',
      icon: <BarChart className="h-6 w-6" />,
      position: 'bottom',
    },
  ];

  return (
    <div className="py-10 w-full max-w-6xl mx-auto">
      <div className="relative bg-gradient-to-b from-purple-50 to-blue-50 rounded-3xl p-8 overflow-hidden">
        {/* Decorative gradient circles in the background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-purple-100/50 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-100/50 blur-3xl"></div>
        </div>
        
        {/* Connection lines */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Radial connecting lines with animation */}
            <g transform="translate(50%, 50%)">
              {/* Top connection */}
              <motion.path 
                d="M 0,-20 L 0,-150" 
                stroke="rgba(71, 145, 97, 0.5)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              
              {/* Left connection */}
              <motion.path 
                d="M -20,0 L -180,0" 
                stroke="rgba(71, 145, 97, 0.5)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              
              {/* Right connection */}
              <motion.path 
                d="M 20,0 L 180,0" 
                stroke="rgba(71, 145, 97, 0.5)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.9 }}
              />
              
              {/* Bottom connection */}
              <motion.path 
                d="M 0,20 L 0,150" 
                stroke="rgba(71, 145, 97, 0.5)" 
                strokeWidth="2" 
                fill="none"
                strokeDasharray="5,5"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.1 }}
              />
              
              {/* Animated circles at connection points */}
              <motion.circle 
                cx="0" 
                cy="-150" 
                r="5" 
                fill="rgba(71, 145, 97, 0.8)"
                filter="url(#glow)"
                animate={{ 
                  r: [5, 8, 5],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.circle 
                cx="-180" 
                cy="0" 
                r="5" 
                fill="rgba(71, 145, 97, 0.8)"
                filter="url(#glow)"
                animate={{ 
                  r: [5, 8, 5],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.circle 
                cx="180" 
                cy="0" 
                r="5" 
                fill="rgba(71, 145, 97, 0.8)"
                filter="url(#glow)"
                animate={{ 
                  r: [5, 8, 5],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <motion.circle 
                cx="0" 
                cy="150" 
                r="5" 
                fill="rgba(71, 145, 97, 0.8)"
                filter="url(#glow)"
                animate={{ 
                  r: [5, 8, 5],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
            </g>
          </svg>
        </motion.div>
        
        {/* The actual cards layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Top Card - 1st CTPS */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-full max-w-md">
              {ctpsData.find(card => card.position === 'top') && 
                <CTPSCard {...ctpsData.find(card => card.position === 'top')!} />
              }
            </div>
          </div>
          
          {/* Left Card - 2nd CTPS */}
          <div className="flex justify-end items-center">
            <div className="w-full max-w-md">
              {ctpsData.find(card => card.position === 'left') && 
                <CTPSCard {...ctpsData.find(card => card.position === 'left')!} />
              }
            </div>
          </div>
          
          {/* Center Card - 4th CTPS */}
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-md">
              {ctpsData.find(card => card.position === 'center') && 
                <CTPSCard {...ctpsData.find(card => card.position === 'center')!} />
              }
            </div>
            
            {/* Center ornaments */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-everblue/10 pointer-events-none hidden md:block"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-everblue/20 pointer-events-none hidden md:block"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Right Card - 3rd CTPS */}
          <div className="flex justify-start items-center">
            <div className="w-full max-w-md">
              {ctpsData.find(card => card.position === 'right') && 
                <CTPSCard {...ctpsData.find(card => card.position === 'right')!} />
              }
            </div>
          </div>
          
          {/* Bottom Card - Outcomes */}
          <div className="md:col-span-3 flex justify-center">
            <div className="w-full max-w-md">
              {ctpsData.find(card => card.position === 'bottom') && 
                <CTPSCard {...ctpsData.find(card => card.position === 'bottom')!} />
              }
            </div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-everblue/10"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
                y: [
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                  `${Math.random() * 100}%`,
                ],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTPSInteractiveDiagram;
