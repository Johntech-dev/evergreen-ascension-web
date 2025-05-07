import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import FirstCTPSDiagram from '../components/FirstCTPSDiagram';

export default function FirstCTPS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The 1st Cultural Time Perception Shift: From Instinct to Civilization
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A pivotal transformation in humanity's relationship with time, marking the transition from instinctual awareness to structured temporal frameworks.
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
              Humanity's relationship with time has always been bound to survival and evolution. In many places around the globe, communities have nurtured and refined various forms of timekeeping for millennia. Among these, the 1st Cultural Time Perception Shift (1st CTPS) stands out as a pivotal turning point for numerous civilizations—a broad transition from instinctual, survival-based awareness to a more structured and shared concept of time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              However, this shift did not happen in a vacuum or uniformly across all societies. Many Indigenous nations have long practiced cyclical, land-based forms of timekeeping that remain vital to their cultural identity. When we speak of the 1st CTPS, we must remember these diverse timelines and acknowledge the impacts—both empowering and disruptive—that structured time would eventually have on various peoples.
            </p>
          </div>

          {/* Interactive Diagram */}
          <div className="my-16">
            <FirstCTPSDiagram />
          </div>

          {/* Key Sections */}
          <div className="space-y-12">
            {/* Premise Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Premise: The Birth of Structured Time</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  As certain agricultural societies emerged, they began to rely on visible natural cycles—day and night, seasons, and celestial patterns—to guide their lives. Observing these rhythms, some groups developed calendars and rudimentary tools to measure and organize time in more rigid ways. This shift was revolutionary in many contexts: time transformed from an abstract concept into a tangible resource that could be portioned and planned.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With the rise of structured time, communities could now plan for the future, coordinate large-scale agricultural efforts, and organize collective rituals that brought people together. This formalized approach—using calendars—served as a unifying tool, helping certain civilizations align their activities with natural rhythms to ensure survival and stability.
                </p>
              </div>
            </section>

            {/* Outcome Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Outcome: "Bondage Is the New Salvation"</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The 1st CTPS, in contexts where it took hold, introduced both blessings and burdens. Adhering to structured time created a new form of collective "bondage" to calendars, schedules, and cycles. For many groups, this brought salvation: the ability to collaborate en masse, support agricultural growth, and foster large-scale innovation. Through these synchronized frameworks, communities found stability in uncertainty, with predictability fueling prosperity and cultural growth.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  However, in places where these rigid frameworks were imposed—often through colonization and the displacement of Indigenous governance—structured time also became a tool of social control. The "bondage" aspect took on an oppressive quality when Indigenous peoples were forced to abandon their own timekeeping practices.
                </p>
              </div>
            </section>

            {/* Legacy Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">A Lasting Legacy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  The legacies of the 1st CTPS are still evident worldwide. Whether through digital calendars, clocks, or complex scheduling systems, we rely on a form of structured time that arose from this historical transformation. It has enabled global coordination, rapid technological evolution, and unprecedented collaboration across continents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Yet for many Indigenous nations—and indeed for anyone seeking a balanced approach to time—there remains the question of whether modern societies can acknowledge and honor the cyclical, land-based ways of being that have endured through colonization.
                </p>
              </div>
            </section>

            {/* Reflection Section */}
            <section className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Reflection: Balancing Bondage and Liberation</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  As we reflect on the 1st CTPS, we are reminded of how deeply our lives are shaped by the rhythms we choose—or are compelled—to follow. Structured time can be a powerful tool for liberation, collective growth, and innovation. Yet it also carries the potential for erasure when imposed without respect for existing cultural realities.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The enduring duality of "bondage" and "salvation" underscores the complexity of humanity's journey. As we move forward, the challenge is to recognize and respect diverse temporal frameworks, ensuring that structured time enhances rather than diminishes cultural identity and sovereignty.
                </p>
              </div>
            </section>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-between items-center mt-12 pt-8 border-t">
            <Link
              to="/"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Link
              to="/ctps"
              className="flex items-center text-everblue hover:text-everblue/80 transition-colors"
            >
              Learn about 4th CTPS
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 