import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code2, Brain, Globe, Heart } from 'lucide-react';

const Themes: React.FC = () => {
  const navigate = useNavigate();
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  const themes = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build innovative solutions using artificial intelligence and machine learning algorithms.',
      details: [
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Recommendation Systems'
      ],
      path: '/theme-aiml' // Add path for navigation
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Create technology solutions that address environmental challenges and promote sustainability.',
      details: [
        'Carbon Footprint Tracking',
        'Renewable Energy',
        'Waste Management',
        'Smart Cities'
      ],
      path: '/theme-Sustainability' // Add path for navigation
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Develop applications that improve healthcare delivery and patient care.',
      details: [
        'Telemedicine Solutions',
        'Health Monitoring',
        'Medical Data Analysis',
        'Patient Care Management'
      ],
      path: '/theme-Healthcare' // Add path for navigation
    },
    {
      icon: Code2,
      title: 'Open Innovation',
      description: 'Choose your own problem statement and build a creative solution.',
      details: [
        'Social Impact',
        'Education Technology',
        'Financial Technology',
        'Entertainment'
      ]
    }
  ];

  return (
    <section id="themes" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hackathon Themes</h2>
          <p className="text-gray-600 dark:text-gray-400">Choose your challenge and make an impact</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {themes.map((theme, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-300
              hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden"
              onClick={() => theme.path && navigate(theme.path)} // Navigate on click
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  theme.path && navigate(theme.path);
                }
              }}
            >
              <theme.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-center">{theme.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Themes;