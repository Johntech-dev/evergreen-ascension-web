
import React, { useState } from 'react';
import SectionLayout from './SectionLayout';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CTPSSection: React.FC = () => {
  const [expandedShift, setExpandedShift] = useState<number | null>(null);

  const shifts = [
    {
      id: 1,
      name: "Calendar",
      description: "Marked humanity's ability to track cycles, organize societies, and cultivate a shared memory.",
      link: '/first-ctps',
      fullContent: `The 1st Cultural Time Perception Shift (1st CTPS): From Instinct to Civilization

The 1st CTPS marked humanity's transition from immediate, survival-focused awareness into a structured sense of time rooted in natural cycles. Sparked by the advent of agriculture, this shift introduced early calendars—the first tools of temporal organization—and a shared understanding of linear time. These advancements enabled long-term planning, collaboration, and the growth of settlements, laying the foundation for organized societies, resource management, and the collective rhythms of early civilizations.

Outcome of the 1st Cultural Time Perception Shift: "Bondage is the New Salvation"

With the introduction of structured time, humanity exchanged the freedom of instinctual living for the constraints of shared temporal frameworks. This "bondage" to schedules, cycles, and communal rhythms became a form of salvation, as it allowed for the coordination and predictability necessary for survival and progress. The reliance on timekeeping tools and agricultural planning fostered interconnectedness and stability, enabling the birth of civilizations. Thus, the surrender to structured time liberated humanity from the chaos of uncertainty, transforming collective discipline into the cornerstone of growth and salvation.`
    },
    {
      id: 2,
      name: "Pendulum Clock",
      description: "Symbolized structured time, inspiring inquiry, organization, and knowledge expansion.",
      link: '/second-ctps',
      fullContent: `The 2nd Cultural Time Perception Shift: "The Pendulum Universe" and the Paradox of Progress

Time has always been humanity's most powerful yet elusive resource. During the 1st Cultural Time Perception Shift (1st CTPS), people attuned their lives to the rhythms of nature—seasonal cycles, the sun, and the moon—often guided by holistic knowledge maintained by Indigenous communities, women's ancestral wisdom, and broader communal practices. However, the 2nd CTPS ushered in a radical new era, redefining our relationship with time and reshaping our world. This was the age of the "Pendulum Universe."

The Premise: Regulating Time

The 2nd CTPS transformed time into a precise, measurable force. The pendulum clock, one of the most significant inventions of the early modern period, became the ultimate symbol of regulated timekeeping. Unlike sundials, water clocks, or even early mechanical timepieces, the pendulum clock offered unmatched precision, allowing humanity to impose a newfound structure on daily life.

The Outcome: "Debt Is the New Freedom"

With time now harnessed as a tool for productivity, a new economic paradigm emerged: debt as the engine of progress. Just as a pendulum swings between two extremes, industrial societies oscillated between expansion and repayment, fueling economic mobility while tethering individuals and institutions to rigid financial cycles.`
    },
    {
      id: 3,
      name: "Atomic Clock",
      description: "Introduced precision, driving industrialization and economic growth.",
      link: '/third-ctps',
      fullContent: `The 3rd Cultural Time Perception Shift (3rd CTPS): A Relativistic Reality

The 3rd Cultural Time Perception Shift marked humanity's transition from rigid, universal notions of time to a fluid, subjective, and interconnected understanding. Inspired by Einstein's theory of relativity, which showed that time varies with speed and gravity, and quantum mechanics, which revealed time's complex relationship with matter, this shift shattered the concept of absolute time.

Technological breakthroughs like the atomic clock brought unprecedented precision to timekeeping, enabling innovations like GPS, where relativity's effects are corrected in real-world applications. The rise of the internet and digital connectivity further transformed time into a multi-dimensional experience, collapsing boundaries between real-time, asynchronous, and virtual interactions.

Outcome of the 3rd Cultural Time Perception Shift: "Data is the New Power"

The 3rd Cultural Time Perception Shift not only redefined humanity's understanding of time but also ushered in a new paradigm where data became the ultimate currency of power. Tools and technologies like atomic clocks, GPS, and digital networks enabled the precise tracking, organization, and utilization of information across temporal and spatial boundaries.`
    },
    {
      id: 4,
      name: "Personal Cognitive Computing",
      description: "Supports adaptive, IA-enabled time perception, fostering individual mastery and ecological alignment.",
      link: '/fourth-ctps',
      fullContent: `The 4th Cultural Time Perception Shift (4th CTPS): Temporal Mastery in the Cybernetic Age

The 4th Cultural Time Perception Shift represents humanity's move from experiencing time as an external force to mastering it as a fluid, personalized, and co-evolving construct. This shift, driven by advanced cognitive technologies, artificial intelligence, and real-time feedback systems, transforms time from something we measure to something we optimize.

In this new paradigm, tools like biofeedback systems, personal cognitive computing, and intelligence amplification allow individuals to perceive, manipulate, and interact with time in profoundly personal ways. Time becomes dynamic, tailored to individual needs and contexts, and aligned with neurocognitive states.

Outcome of the 4th Cultural Time Perception Shift: "Digital Self-Sovereign Agency is Your Birthright"

The 4th CTPS heralds a profound transformation in humanity's relationship with time and agency. Empowered by tools that amplify cognitive and creative potential, individuals can fully align their actions and aspirations with their intrinsic values. This outcome represents the ultimate freedom—not merely to navigate time but to shape it. In a world where individuals own their data, craft their narratives, and design their temporal experiences, "Digital Self-Sovereign Agency is Your Birthright."`
    }
  ];

  const toggleExpand = (id: number) => {
    setExpandedShift(expandedShift === id ? null : id);
  };

  return (
    <SectionLayout 
      id="ctps"
      title="The Story of the Awakening of Intelligence"
      subtitle="Humanity's Journey Through Cultural Time Perception Shifts"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-2xl font-bold mb-6">
            The Four Cultural Time Perception Shifts (CTPS)
          </h3>
          <p className="text-gray-700 mb-8">
            Each CTPS reflects humanity's evolving understanding of time and intelligence, culminating in the 4th CTPS:
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <motion.div 
              className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            
            <div className="space-y-12">
              {shifts.map((shift, index) => (
                <motion.div 
                  key={shift.id} 
                  className="relative pl-12"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.5 }}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-everblue flex items-center justify-center text-white font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.3 + 0.3
                    }}
                  >
                    {shift.id}
                  </motion.div>
                  
                  <motion.div 
                    className="bg-white p-6 rounded-xl shadow-lg shadow-everblue/5 transition-all hover:shadow-xl hover:shadow-everblue/10"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h4 className="text-xl font-bold mb-2">
                      {shift.id}{shift.id === 1 ? 'st' : shift.id === 2 ? 'nd' : shift.id === 3 ? 'rd' : 'th'} CTPS: {shift.name}
                    </h4>
                    <p className="text-gray-700 mb-4">
                      {shift.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <motion.a 
                        href={shift.link} 
                        className="text-everblue hover:underline inline-flex items-center"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span>Link to more info & blog</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.a>
                      
                      <motion.button
                        onClick={() => toggleExpand(shift.id)}
                        className="text-everblue hover:text-everblue/80 flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedShift === shift.id ? (
                          <>
                            <span className="mr-1">Less</span>
                            <ChevronUp size={16} />
                          </>
                        ) : (
                          <>
                            <span className="mr-1">More</span>
                            <ChevronDown size={16} />
                          </>
                        )}
                      </motion.button>
                    </div>
                    
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: expandedShift === shift.id ? 'auto' : 0,
                        opacity: expandedShift === shift.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4"
                    >
                      <div className="bg-gray-50 p-4 rounded-lg text-sm whitespace-pre-line">
                        {shift.fullContent}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
        >
          <p className="text-xl font-medium mb-8">
            Join Evergreen as we advance the 4th CTPS, creating a world where IA and humanity co-evolve in harmony with nature.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a 
              href="#ctps" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More about the 4th CTPS
            </motion.a>
            <motion.a 
              href="#ventures" 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support the Evergreen Initiative
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
};

export default CTPSSection;
