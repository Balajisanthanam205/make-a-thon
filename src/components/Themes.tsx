import React, { useState } from 'react';
import { Code2, Brain, Globe, Heart } from 'lucide-react';

const Themes: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  const themes = [
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Build innovative solutions using artificial intelligence and machine learning algorithms.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Create technology solutions that address environmental challenges and promote sustainability.'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Develop applications that improve healthcare delivery and patient care.'
    },
    {
      icon: Code2,
      title: 'Open Innovation',
      description: 'Choose your own problem statement and build a creative solution.'
    }
  ];

  return (
    <section id="themes" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hackathon Themes</h2>
          <p className="text-gray-600 dark:text-gray-400">Choose your challenge and make an impact</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-300
              ${activeTheme === index ? 'scale-105 shadow-xl' : 'hover:scale-105 shadow-lg'}
              border-2 ${activeTheme === index ? 'border-purple-500' : 'border-transparent'}`}
              onClick={() => setActiveTheme(index)}
            >
              <theme.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">{theme.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{theme.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Themes;