import React from 'react';
import { Users } from 'lucide-react';

const Speakers: React.FC = () => {
  const speakers = [
    {
      name: 'Sarah Johnson',
      role: 'AI Research Lead',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'InnovateLabs',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Director',
      company: 'FutureTech',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'David Kim',
      role: 'Engineering Lead',
      company: 'CodeWorks',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="speakers" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Users className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Speakers & Judges</h2>
          <p className="text-gray-600 dark:text-gray-400">Meet our distinguished panel of experts</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-purple-600 dark:text-purple-400 mb-1">{speaker.role}</p>
                <p className="text-gray-600 dark:text-gray-400">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;