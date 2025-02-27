import React from 'react';
import { Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThemeAIML: React.FC = () => {
  const problemStatements = [
    {
      title: 'Natural Language Processing',
      description: 'Build an AI-powered language model that can understand and generate human-like text.',
      requirements: [
        'Implement sentiment analysis',
        'Extract key information from documents',
        'Support multiple languages',
        'Real-time processing capabilities'
      ],
      evaluation: [
        'Accuracy of language understanding',
        'Innovation in approach',
        'Practical applications',
        'Technical implementation'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Develop a computer vision system for real-time object detection and classification.',
      requirements: [
        'Real-time object detection',
        'Multiple object tracking',
        'Performance optimization',
        'Edge device compatibility'
      ],
      evaluation: [
        'Detection accuracy',
        'Processing speed',
        'System robustness',
        'Implementation quality'
      ]
    },
    {
      title: 'Predictive Analytics',
      description: 'Create a predictive analytics solution for business intelligence and forecasting.',
      requirements: [
        'Data preprocessing pipeline',
        'Multiple model support',
        'Visualization dashboard',
        'API integration'
      ],
      evaluation: [
        'Prediction accuracy',
        'Scalability',
        'User interface',
        'Business value'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-black">
      <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-purple-600 hover:text-purple-700">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Brain className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">AI & Machine Learning Track</h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Build innovative solutions using artificial intelligence and machine learning algorithms
              to solve real-world problems.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {problemStatements.map((problem, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
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
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
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
                          <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
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

export default ThemeAIML;