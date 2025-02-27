import React from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThemeHealthcare: React.FC = () => {
  const problemStatements = [
    {
      title: 'Telemedicine Platform',
      description: 'Create a comprehensive telemedicine solution for remote healthcare delivery.',
      requirements: [
        'Secure video consultations',
        'Electronic health records',
        'Prescription management',
        'Appointment scheduling'
      ],
      evaluation: [
        'Platform security',
        'User experience',
        'Feature completeness',
        'Technical implementation'
      ]
    },
    {
      title: 'Health Monitoring System',
      description: 'Develop a real-time health monitoring system for patients with chronic conditions.',
      requirements: [
        'Vital signs monitoring',
        'Alert system',
        'Data visualization',
        'Mobile app integration'
      ],
      evaluation: [
        'Monitoring accuracy',
        'Real-time capabilities',
        'User interface',
        'System reliability'
      ]
    },
    {
      title: 'Medical Data Analytics',
      description: 'Build an analytics platform for processing and analyzing medical data.',
      requirements: [
        'Data processing pipeline',
        'Machine learning models',
        'Visualization dashboard',
        'API integration'
      ],
      evaluation: [
        'Analysis accuracy',
        'Processing speed',
        'Visualization quality',
        'Practical utility'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-red-600 hover:text-red-700">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Healthcare Innovation Track</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Develop innovative healthcare solutions that improve patient care and medical service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {problemStatements.map((problem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">
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
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
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
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
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

export default ThemeHealthcare;