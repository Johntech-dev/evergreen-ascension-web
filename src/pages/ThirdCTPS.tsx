import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ThirdCTPSDiagram from '../components/ThirdCTPSDiagram';

export default function ThirdCTPS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The 3rd Cultural Time Perception Shift: A Relativistic Reality
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Humanity's transition from rigid, universal notions of time to a fluid, subjective, and interconnected understanding.
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
              The 3rd Cultural Time Perception Shift marked humanity's transition from rigid, universal notions of time to a fluid, subjective, and interconnected understanding. Inspired by Einstein's theory of relativity, which showed that time varies with speed and gravity, and quantum mechanics, which revealed time's complex relationship with matter, this shift shattered the concept of absolute time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Technological breakthroughs like the atomic clock brought unprecedented precision to timekeeping, enabling innovations like GPS, where relativity's effects are corrected in real-world applications. The rise of the internet and digital connectivity further transformed time into a multi-dimensional experience, collapsing boundaries between real-time, asynchronous, and virtual interactions.
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="my-16">
            <ThirdCTPSDiagram />
          </div>

          {/* Key Sections */}
          <div className="space-y-12">
            {/* Premise Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premise: The Shattering of Absolute Time</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Inspired by Einstein's theory of relativity—which demonstrates that time varies with speed and gravity—and by quantum mechanics, which reveals time's deep connections to matter and energy, this shift forever changed how we experience and measure the flow of existence.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Precision Meets Reality: Technological breakthroughs like the atomic clock brought extraordinary accuracy to timekeeping, enabling innovations such as GPS. Relativity's effects became practical considerations for everyday life, prompting questions of how best to govern these advanced tools for the common good.
                </p>
              </div>
            </section>

            {/* Elastic Timelines Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Elastic Timelines</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The internet and digital networks transformed time into a multidimensional experience, allowing interactions to occur in real time or asynchronously across the globe. As society discovered the elasticity of time—mixing real, virtual, and archived timelines—the potential for both collaboration and disruption became apparent.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This interconnectedness would demand careful foresight in how data, AI, and governance structures interact. The ability to transcend traditional temporal boundaries opened new possibilities for global collaboration while raising important questions about privacy, security, and digital sovereignty.
                </p>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome: "Data Is the New Power"</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  As humanity embraced a more fluid sense of time, the engines of the 3rd CTPS made data the cornerstone of influence and progress. Tools like GPS revolutionized navigation and logistics, while global digital networks provided instantaneous access to information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The ability to collect, interpret, and act upon data turned into a defining source of power. Governments, corporations, and even individuals who mastered analytics gained unparalleled capacity to shape economies, drive innovation, and address large-scale problems—ranging from climate challenges to public health.
                </p>
              </div>
            </section>

            {/* Legacy Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">A Legacy of Elastic Time and Forward-Thinking Governance</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The 3rd CTPS reshaped the world by evolving time from a rigid structure into a dynamic, multi-dimensional continuum. In doing so, it revealed that time and data are inseparably intertwined: precise timekeeping allowed humanity to harness data's full potential, yet it also exposed vulnerabilities requiring vigilant oversight.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Standing at the threshold of the 4th CTPS, we must now reflect on how to navigate the blurred boundaries of time and technology. This includes anticipating AI risks, designing global safeguards, and ensuring that powerful data tools serve collective well-being rather than narrow interests.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              to="/second-ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: 2nd CTPS
            </Link>
            <Link
              to="/fourth-ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              Next: 4th CTPS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 