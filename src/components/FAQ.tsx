import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What is Make-a-Thon 6.0?',
      answer: 'Make-a-Thon 6.0 is a 24-hour coding competition where participants work in teams to build innovative solutions to real-world problems.'
    },
    {
      question: 'Who can participate?',
      answer: 'Anyone with a passion for coding and innovation can participate. Whether you\'re a student, professional, or enthusiast, you\'re welcome to join!'
    },
    {
      question: 'How do I form a team?',
      answer: 'Teams can have 2-4 members. You can either form a team with your friends or join our team formation session at the start of the event.'
    },
    {
      question: 'What should I bring?',
      answer: 'Bring your laptop, charger, and any other equipment you need. We\'ll provide food, drinks, and a comfortable working space.'
    },
    {
      question: 'Are there any prizes?',
      answer: 'Yes! We have exciting prizes for the top teams, including cash prizes, tech gadgets, and opportunities for internships with our sponsor companies.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-400">Everything you need to know about the event</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-48 py-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;