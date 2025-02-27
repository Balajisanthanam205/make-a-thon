import React from 'react';
import { Code2, Users, Trophy, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Code2,
      title: '24 Hours of Coding',
      description: 'Immerse yourself in a full day of innovative coding challenges and problem-solving.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Form teams of 2-4 members and work together to create impactful solutions.'
    },
    {
      icon: Trophy,
      title: 'Amazing Prizes',
      description: 'Win exciting prizes, including cash rewards, tech gadgets, and internship opportunities.'
    },
    {
      icon: Clock,
      title: 'Real-time Mentoring',
      description: 'Get guidance from industry experts and experienced mentors throughout the event.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Make-a-Thon 6.0</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Join us for an exciting 24-hour hackathon where innovation meets technology. 
            Make-a-Thon 6.0 brings together creative minds to solve real-world challenges 
            and shape the future of technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Why Participate?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                Learn & Grow
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Enhance your skills, learn new technologies, and get hands-on experience 
                with real-world projects.
              </p>
            </div>
            <div className="bg-purple-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-2 text-purple-600 dark:text-purple-400">
                Network & Connect
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Meet like-minded individuals, industry professionals, and potential 
                employers or collaborators.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;