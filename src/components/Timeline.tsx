import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      time: '9:00 AM',
      date: 'May 1',
      title: 'Opening Ceremony',
      description: 'Kickoff and theme announcement'
    },
    {
      time: '10:00 AM',
      date: 'May 1',
      title: 'Team Formation',
      description: 'Form your dream team and start brainstorming'
    },
    {
      time: '12:00 PM',
      date: 'May 1',
      title: 'First Milestone',
      description: 'Initial project proposal submission'
    },
    {
      time: '9:00 AM',
      date: 'May 2',
      title: 'Final Submissions',
      description: 'Project submission deadline'
    },
    {
      time: '11:00 AM',
      date: 'May 2',
      title: 'Presentations',
      description: 'Present your project to the judges'
    },
    {
      time: '2:00 PM',
      date: 'May 2',
      title: 'Awards Ceremony',
      description: 'Winners announcement and prizes'
    }
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="timeline" className="py-20 px-4">
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
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900"></div>
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 pr-8 text-right">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  >
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
                <div className="w-1/2 pl-8"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;