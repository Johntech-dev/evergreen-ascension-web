import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SecondCTPSDiagram from '../components/SecondCTPSDiagram';

export default function SecondCTPS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The 2nd Cultural Time Perception Shift: The Pendulum Universe
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A radical transformation in humanity's relationship with time, marking the transition from natural rhythms to mechanical precision.
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
              Time has always been humanity's most powerful yet elusive resource. During the 1st Cultural Time Perception Shift (1st CTPS), people attuned their lives to the rhythms of nature—seasonal cycles, the sun, and the moon—often guided by holistic knowledge maintained by Indigenous communities, women's ancestral wisdom, and broader communal practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, the 2nd CTPS ushered in a radical new era, redefining our relationship with time and reshaping our world. This was the age of the "Pendulum Universe."
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="my-16">
            <SecondCTPSDiagram />
          </div>

          {/* Key Sections */}
          <div className="space-y-12">
            {/* Premise Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premise: Regulating Time</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The 2nd CTPS transformed time into a precise, measurable force. The pendulum clock, one of the most significant inventions of the early modern period, became the ultimate symbol of regulated timekeeping. Unlike sundials, water clocks, or even early mechanical timepieces, the pendulum clock offered unmatched precision, allowing humanity to impose a newfound structure on daily life.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  No longer dictated by the unpredictable variance of nature's cycles, societies could now organize themselves around an unerring, mechanical rhythm. The pendulum's steady, rhythmic oscillation mirrored a fundamental shift: time was no longer something merely observed—it was something controlled.
                </p>
              </div>
            </section>

            {/* Time as Engine Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Time as an Engine of Growth—and Extraction</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  Before the pendulum clock, time was measured in approximations—morning, midday, dusk—or through seasonal indicators tied to farming and communal rituals. Now, it was measured in exacting increments, turning time into a commodity that could be regulated, bought, and sold.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, regulating time also reinforced certain patterns of labor exploitation, resource extraction, and social stratification. With the ability to measure time in ever-smaller increments, factories could structure workdays down to the second, maximizing output while minimizing downtime.
                </p>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome: "Debt Is the New Freedom"</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  With time now harnessed as a tool for productivity, a new economic paradigm emerged: debt as the engine of progress. Just as a pendulum swings between two extremes, industrial societies oscillated between expansion and repayment, fueling economic mobility while tethering individuals and institutions to rigid financial cycles.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Yet this transformation came with its own paradox. While debt enabled innovation and social mobility, it also bound people to schedules, repayment timelines, and perpetual increases in productivity. The pendulum's rhythm, once a promise of order and synchronization, became an unforgiving metronome.
                </p>
              </div>
            </section>

            {/* Legacy Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Balancing Progress and Ecological Justice</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The 2nd CTPS profoundly impacted human society by standardizing time, fostering global coordination, and enabling remarkable scientific and industrial advancements. Yet its legacy remains complex when viewed through the lens of ecological sovereignty and social equity.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we live with both the benefits and the consequences of this shift. Global infrastructure, digital connectivity, and modern industry all owe their existence to the synchronization brought about by the pendulum's steady rhythm. But so too do environmental degradation, labor exploitation, and a culture that often prioritizes acceleration over balance.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              to="/first-ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous: 1st CTPS
            </Link>
            <Link
              to="/third-ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              Next: 3rd CTPS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 