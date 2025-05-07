import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FourthCTPSDiagram from '../components/FourthCTPSDiagram';

export default function FourthCTPS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The 4th Cultural Time Perception Shift: Temporal Mastery in the Cybernetic Age
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Humanity's move from experiencing time as an external force to mastering it as a fluid, personalized, and co-evolving construct.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-700 leading-relaxed">
              The 4th Cultural Time Perception Shift represents humanity's move from experiencing time as an external force to mastering it as a fluid, personalized, and co-evolving construct. This shift, driven by advanced cognitive technologies, artificial intelligence, and real-time feedback systems, transforms time from something we measure to something we optimize.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In this new paradigm, tools like biofeedback systems, personal cognitive computing, and intelligence amplification allow individuals to perceive, manipulate, and interact with time in profoundly personal ways. Time becomes dynamic, tailored to individual needs and contexts, and aligned with neurocognitive states.
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="my-16">
            <FourthCTPSDiagram />
          </div>

          {/* Key Sections */}
          <div className="space-y-12">
            {/* Premise Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reimagining Time: From Fixed to Fluid</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The 4th CTPS represents a fundamental shift in our perception of time. No longer confined to rigid calendars or ticking clocks, time becomes an adaptive, co-evolving construct shaped by three key dynamics:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-700">Intelligence Amplification: Through wearable devices, biofeedback tools, and AI-driven systems, we gain unparalleled insight into our mental and emotional states.</li>
                  <li className="text-gray-700">Cybernetic Ecology: The interplay between humans, machines, and environments forms a symbiotic relationship where dynamic feedback loops adapt and evolve.</li>
                  <li className="text-gray-700">Temporal Elasticity: By understanding and shaping our perceptions of time, we can expand peak moments of creativity and flow while reclaiming periods for rest and renewal.</li>
                </ul>
              </div>
            </section>

            {/* From Chronos to Kairos Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">From Chronos to Kairos: Redefining How We Live and Create</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Time has often been measured in Chronos—sequential, chronological time. The 4th CTPS invites us to prioritize Kairos—moments of meaning, creativity, and peak performance. Imagine designing your life around these transformational moments, where every task, interaction, and experience aligns with your highest potential.
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-700">Peak Performance: Align work and goals with your cognitive and emotional peaks, turning tasks into opportunities for brilliance.</li>
                  <li className="text-gray-700">Enhanced Environments: Create spaces that enhance relaxation, focus, or collaboration, depending on your immediate needs.</li>
                  <li className="text-gray-700">Flow Expansion: Enter the "zone" more easily and remain there longer, amplifying creativity, enjoyment, and achievement.</li>
                </ul>
              </div>
            </section>

            {/* Digital Self-Sovereignty Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Digital Self-Sovereignty: Reclaiming Time as a Personal Resource</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  At the core of the 4th CTPS lies the principle of Digital Self-Sovereignty—the empowerment of individuals to own and shape their temporal experiences. By combining intelligence amplification with personalized insights, we can unlock new dimensions of freedom and agency:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-700">Owning Your Narrative: Data-driven tools allow us to align our schedules and activities with personal values, turning each day into a curated journey of growth.</li>
                  <li className="text-gray-700">The Creative Continuum: Human and machine intelligence collaborate to generate innovative solutions, explore new ideas, and create art, pushing the boundaries of possibility.</li>
                  <li className="text-gray-700">Freedom through Agency: True liberation lies not in escaping constraints but in having the agency to design lives filled with purpose, curiosity, and intentionality.</li>
                </ul>
              </div>
            </section>

            {/* Legacy Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Promise of the 4th CTPS: Time as an Infinite Canvas</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  This shift challenges us to rethink the very fabric of our lives. Time, once seen as a finite resource, becomes an infinite canvas for exploration, innovation, and growth. With this new understanding, the 4th CTPS offers us:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li className="text-gray-700">A Deeper Connection to the Present: Embrace the richness of the moment by aligning your awareness with your cognitive and emotional peaks.</li>
                  <li className="text-gray-700">An Enhanced Future: Use intelligence amplification to shape goals and aspirations, transforming dreams into actionable realities.</li>
                  <li className="text-gray-700">A Harmonious Legacy: Balance personal and communal growth with ecological sustainability, ensuring a thriving world for generations to come.</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              to="/third-ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: 3rd CTPS
            </Link>
            <Link
              to="/"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 