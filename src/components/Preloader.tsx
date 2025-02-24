import React from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600"
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="text-white text-center"
      >
        <Code2 className="w-24 h-24 mb-4 mx-auto" />
        <h1 className="text-4xl font-bold">Make-a-Thon 6.0</h1>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;