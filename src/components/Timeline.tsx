import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, Code2, Coffee, Presentation, Trophy, Users } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      time: '9:00 AM',
      date: 'May 1',
      title: 'Opening Ceremony',
      description: 'Kickoff and theme announcement',
      icon: Code2
    },
    {
      time: '10:00 AM',
      date: 'May 1',
      title: 'Team Formation',
      description: 'Form your dream team and start brainstorming',
      icon: Users
    },
    {
      time: '12:00 PM',
      date: 'May 1',
      title: 'First Milestone',
      description: 'Initial project proposal submission',
      icon: Coffee
    },
    {
      time: '9:00 AM',
      date: 'May 2',
      title: 'Final Submissions',
      description: 'Project submission deadline',
      icon: Code2
    },
    {
      time: '11:00 AM',
      date: 'May 2',
      title: 'Presentations',
      description: 'Present your project to the judges',
      icon: Presentation
    },
    {
      time: '2:00 PM',
      date: 'May 2',
      title: 'Awards Ceremony',
      description: 'Winners announcement and prizes',
      icon: Trophy
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="timeline" className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
          <p className="text-gray-600 dark:text-gray-400">24 hours of innovation and creativity</p>
        </motion.div>
        <div ref={ref} className="relative">
          {/* Mobile Timeline (< 768px) */}
          <div className="md:hidden space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg relative"
              >
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full">
                  <div className="w-4 h-4 bg-purple-600 rounded-full animate-ping absolute"></div>
                </div>
                <div className="flex items-start gap-4">
                  <event.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-purple-600 dark:text-purple-400 mb-1">
                      {event.time} - {event.date}
                    </div>
                    <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop Timeline (≥ 768px) */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900"></div>
            <div className="space-y-12">
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                      <event.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 mx-auto" />
                      <div className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                        {event.time} - {event.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-4 h-4 bg-purple-600 rounded-full relative z-10"
                  >
                    <div className="w-4 h-4 bg-purple-600 rounded-full animate-ping absolute"></div>
                  </motion.div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;