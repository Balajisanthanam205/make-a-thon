import React from 'react';
import { Globe, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThemeSustainability: React.FC = () => {
  const problemStatements = [
    {
      title: 'Carbon Footprint Tracker',
      description: 'Build a comprehensive solution for tracking and reducing carbon footprint.',
      requirements: [
        'Personal carbon calculator',
        'Recommendations engine',
        'Progress tracking',
        'Community features'
      ],
      evaluation: [
        'Calculation accuracy',
        'User engagement',
        'Impact potential',
        'Technical implementation'
      ]
    },
    {
      title: 'Smart Energy Management',
      description: 'Develop a system for optimizing energy consumption in buildings.',
      requirements: [
        'Real-time monitoring',
        'Predictive analytics',
        'Automation features',
        'Mobile app integration'
      ],
      evaluation: [
        'Energy savings',
        'System reliability',
        'User interface',
        'Innovation level'
      ]
    },
    {
      title: 'Waste Management Solution',
      description: 'Create an innovative solution for efficient waste management and recycling.',
      requirements: [
        'Waste classification',
        'Collection optimization',
        'Recycling tracking',
        'Community engagement'
      ],
      evaluation: [
        'Environmental impact',
        'Scalability',
        'User adoption',
        'Technical feasibility'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Globe className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Sustainability Track</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Create innovative solutions that address environmental challenges and promote sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {problemStatements.map((problem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                  {problem.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {problem.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                    <ul className="space-y-2">
                      {problem.requirements.map((req, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Evaluation Criteria</h3>
                    <ul className="space-y-2">
                      {problem.evaluation.map((evalitem, i) => (
                        <li key={i} className="flex items-center text-gray-600 dark:text-gray-400">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {evalitem}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ThemeSustainability;