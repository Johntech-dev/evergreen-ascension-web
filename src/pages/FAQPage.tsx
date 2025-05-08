import React, { useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqData = [
  {
    question: "What is Intelligence Amplification (IA)?",
    answer: "Intelligence Amplification (IA) is a field focused on enhancing human cognitive capabilities through technology. Unlike artificial intelligence, which aims to create autonomous systems, IA focuses on augmenting human intelligence through tools, interfaces, and systems that work in harmony with human cognition."
  },
  {
    question: "How does cybernetics relate to the Evergreen Initiative?",
    answer: "Cybernetics is a core component of the Evergreen Initiative, providing the theoretical framework for understanding and managing complex systems. It helps us model and optimize the interactions between technology, society, and the environment, enabling more sustainable and harmonious development."
  },
  {
    question: "What is data sovereignty and why is it important?",
    answer: "Data sovereignty refers to the right of individuals and communities to control their own data. It's crucial for protecting privacy, maintaining cultural integrity, and ensuring that technological development serves local needs rather than external interests."
  },
  {
    question: "How does the Evergreen Initiative approach sustainable development?",
    answer: "The Evergreen Initiative approaches sustainable development through a holistic lens that integrates technological innovation, cultural preservation, and environmental stewardship. We focus on creating systems that are not just environmentally sustainable but also socially and culturally sustainable."
  },
  {
    question: "What role does cultural evolution play in the initiative?",
    answer: "Cultural evolution is central to our approach. We recognize that technology must evolve in harmony with cultural values and traditions. This means developing solutions that respect and enhance local cultures while enabling them to adapt to changing circumstances."
  },
  {
    question: "How does the initiative address the digital divide?",
    answer: "We address the digital divide through inclusive design, local capacity building, and community-driven development. Our approach ensures that technological benefits are accessible to all, regardless of location or economic status."
  },
  {
    question: "What is the significance of the 4th CTPS?",
    answer: "The 4th CTPS (Cultural and Technological Progress Summit) represents a pivotal moment in our initiative, bringing together diverse stakeholders to address critical challenges in sustainable development and technological innovation."
  },
  {
    question: "How does the initiative ensure ethical AI development?",
    answer: "We ensure ethical AI development through rigorous governance frameworks, community engagement, and transparent development processes. Our approach prioritizes human well-being and cultural values in all AI applications."
  },
  {
    question: "What is the role of AKEA University in the initiative?",
    answer: "AKEA University serves as a research and education hub, developing new approaches to intelligence amplification and cultural evolution. It provides a space for interdisciplinary collaboration and innovation."
  },
  {
    question: "How does the initiative approach urban development?",
    answer: "Our urban development approach combines smart city technologies with cultural preservation and environmental sustainability. We focus on creating cities that are not just technologically advanced but also culturally rich and environmentally responsible."
  },
  {
    question: "What is the significance of the Evergreen Cities program?",
    answer: "The Evergreen Cities program represents our vision for sustainable urban development, combining technological innovation with cultural preservation and environmental stewardship to create cities that thrive in harmony with their natural and cultural environments."
  },
  {
    question: "How does the initiative address climate change?",
    answer: "We address climate change through a combination of technological innovation, cultural adaptation, and systemic change. Our approach focuses on creating resilient systems that can adapt to changing environmental conditions."
  },
  {
    question: "What is the role of community engagement in the initiative?",
    answer: "Community engagement is central to our approach. We believe that sustainable development must be driven by local communities, with technology serving as a tool to enhance their capabilities and preserve their cultural heritage."
  },
  {
    question: "How does the initiative approach technological innovation?",
    answer: "Our approach to technological innovation emphasizes harmony between technology, culture, and environment. We focus on developing technologies that enhance human capabilities while respecting cultural values and environmental limits."
  },
  {
    question: "What is the significance of the 4th Gate Ventures?",
    answer: "4th Gate Ventures represents our commitment to developing sustainable business models that support our mission. It focuses on creating enterprises that generate both social and environmental value."
  },
  {
    question: "How does the initiative ensure cultural preservation?",
    answer: "We ensure cultural preservation through community-driven development, documentation of cultural heritage, and the integration of cultural values into technological solutions. Our approach respects and enhances local traditions while enabling adaptation to changing circumstances."
  },
  {
    question: "What is the role of education in the initiative?",
    answer: "Education plays a crucial role in our initiative, providing the knowledge and skills needed for sustainable development. We focus on developing educational approaches that combine traditional wisdom with modern knowledge."
  },
  {
    question: "How does the initiative approach data privacy?",
    answer: "Our approach to data privacy emphasizes user control, transparency, and cultural sensitivity. We develop systems that protect individual privacy while enabling beneficial uses of data."
  },
  {
    question: "What is the significance of the Evergreen Initiative's global network?",
    answer: "Our global network enables knowledge sharing, collaboration, and mutual support among communities working towards sustainable development. It helps us learn from diverse experiences and adapt solutions to local contexts."
  },
  {
    question: "How does the initiative approach technological accessibility?",
    answer: "We approach technological accessibility through inclusive design, local capacity building, and community-driven development. Our goal is to ensure that technological benefits are available to all, regardless of location or economic status."
  },
  {
    question: "What is the role of research in the initiative?",
    answer: "Research plays a crucial role in our initiative, helping us understand complex challenges and develop effective solutions. We focus on interdisciplinary research that combines technological, cultural, and environmental perspectives."
  },
  {
    question: "How does the initiative approach sustainable business models?",
    answer: "Our approach to sustainable business models emphasizes the integration of social, environmental, and economic value. We develop enterprises that generate both profit and positive impact."
  },
  {
    question: "What is the significance of the initiative's partnerships?",
    answer: "Our partnerships enable us to leverage diverse expertise, resources, and perspectives in addressing complex challenges. They help us develop more effective and sustainable solutions."
  },
  {
    question: "How does the initiative approach technological governance?",
    answer: "Our approach to technological governance emphasizes transparency, accountability, and community participation. We develop frameworks that ensure technology serves human well-being and cultural values."
  },
  {
    question: "What is the role of innovation in the initiative?",
    answer: "Innovation plays a crucial role in our initiative, helping us develop new solutions to complex challenges. We focus on innovations that enhance human capabilities while respecting cultural values and environmental limits."
  },
  {
    question: "How does the initiative approach cultural adaptation?",
    answer: "Our approach to cultural adaptation emphasizes respect for local traditions while enabling communities to adapt to changing circumstances. We focus on preserving cultural heritage while supporting necessary evolution."
  },
  {
    question: "What is the significance of the initiative's focus on resilience?",
    answer: "Our focus on resilience helps communities adapt to changing circumstances while maintaining their cultural identity and environmental sustainability. We develop systems that can withstand and recover from various challenges."
  },
  {
    question: "How does the initiative approach technological education?",
    answer: "Our approach to technological education combines technical skills with cultural understanding and environmental awareness. We focus on developing educational programs that prepare people for sustainable development."
  },
  {
    question: "What is the role of community leadership in the initiative?",
    answer: "Community leadership plays a crucial role in our initiative, ensuring that development efforts are aligned with local needs and values. We support and empower local leaders in driving sustainable development."
  },
  {
    question: "How does the initiative approach technological infrastructure?",
    answer: "Our approach to technological infrastructure emphasizes sustainability, accessibility, and cultural sensitivity. We develop infrastructure that serves local needs while respecting environmental limits."
  },
  {
    question: "What is the significance of the initiative's focus on harmony?",
    answer: "Our focus on harmony reflects our belief that sustainable development requires balance between technology, culture, and environment. We strive to create systems where these elements work together seamlessly."
  },
  {
    question: "How does the initiative approach cultural documentation?",
    answer: "Our approach to cultural documentation emphasizes community participation and respect for local traditions. We develop methods for preserving cultural heritage while enabling its evolution."
  },
  {
    question: "What is the role of technology in cultural preservation?",
    answer: "Technology plays a crucial role in cultural preservation, providing tools for documenting, sharing, and enhancing cultural heritage. We develop technologies that support cultural preservation while respecting local values."
  },
  {
    question: "How does the initiative approach sustainable energy?",
    answer: "Our approach to sustainable energy emphasizes local solutions, cultural sensitivity, and environmental responsibility. We develop energy systems that meet local needs while minimizing environmental impact."
  },
  {
    question: "What is the significance of the initiative's focus on adaptation?",
    answer: "Our focus on adaptation reflects our understanding that sustainable development requires flexibility and resilience. We help communities adapt to changing circumstances while maintaining their cultural identity."
  },
  {
    question: "How does the initiative approach technological literacy?",
    answer: "Our approach to technological literacy emphasizes practical skills, cultural understanding, and critical thinking. We develop educational programs that prepare people to use technology effectively and responsibly."
  },
  {
    question: "What is the role of innovation in cultural evolution?",
    answer: "Innovation plays a crucial role in cultural evolution, providing new tools and methods for preserving and enhancing cultural heritage. We focus on innovations that support cultural development while respecting local values."
  },
  {
    question: "How does the initiative approach sustainable agriculture?",
    answer: "Our approach to sustainable agriculture combines traditional knowledge with modern technology. We develop farming methods that are both productive and environmentally responsible."
  },
  {
    question: "What is the significance of the initiative's focus on community?",
    answer: "Our focus on community reflects our belief that sustainable development must be driven by local needs and values. We work with communities to develop solutions that serve their specific circumstances."
  },
  {
    question: "How does the initiative approach technological ethics?",
    answer: "Our approach to technological ethics emphasizes human well-being, cultural values, and environmental responsibility. We develop frameworks that ensure technology serves these principles."
  },
  {
    question: "What is the role of education in cultural preservation?",
    answer: "Education plays a crucial role in cultural preservation, helping to pass on traditional knowledge and values to future generations. We develop educational programs that support cultural continuity while enabling adaptation."
  },
  {
    question: "How does the initiative approach sustainable transportation?",
    answer: "Our approach to sustainable transportation emphasizes local needs, environmental impact, and cultural values. We develop transportation systems that are efficient, accessible, and environmentally responsible."
  },
  {
    question: "What is the significance of the initiative's focus on innovation?",
    answer: "Our focus on innovation reflects our commitment to finding new solutions to complex challenges. We support innovations that enhance human capabilities while respecting cultural values and environmental limits."
  },
  {
    question: "How does the initiative approach cultural exchange?",
    answer: "Our approach to cultural exchange emphasizes mutual respect, learning, and collaboration. We create opportunities for communities to share knowledge and experiences while preserving their unique identities."
  },
  {
    question: "What is the role of technology in sustainable development?",
    answer: "Technology plays a crucial role in sustainable development, providing tools for addressing complex challenges. We develop technologies that support sustainable development while respecting cultural values and environmental limits."
  },
  {
    question: "How does the initiative approach environmental conservation?",
    answer: "Our approach to environmental conservation emphasizes local participation, cultural values, and technological innovation. We develop conservation methods that are both effective and culturally appropriate."
  },
  {
    question: "What is the significance of the initiative's focus on collaboration?",
    answer: "Our focus on collaboration reflects our belief that sustainable development requires diverse perspectives and resources. We work with various stakeholders to develop more effective and sustainable solutions."
  },
  {
    question: "How does the initiative approach technological accessibility?",
    answer: "Our approach to technological accessibility emphasizes inclusive design, local capacity building, and community participation. We develop technologies that are accessible to all, regardless of location or economic status."
  },
  {
    question: "What is the role of cultural values in technological development?",
    answer: "Cultural values play a crucial role in technological development, guiding the design and implementation of technology. We ensure that technological development respects and enhances local cultural values."
  },
  {
    question: "How does the initiative approach sustainable water management?",
    answer: "Our approach to sustainable water management combines traditional knowledge with modern technology. We develop water management systems that are both efficient and environmentally responsible."
  },
  {
    question: "What is the significance of the initiative's focus on resilience?",
    answer: "Our focus on resilience helps communities adapt to changing circumstances while maintaining their cultural identity and environmental sustainability. We develop systems that can withstand and recover from various challenges."
  }
];

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        className="fixed inset-0 pointer-events-none"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
      </motion.div>

      <main className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about the Evergreen Initiative
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="text-lg font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQPage; 