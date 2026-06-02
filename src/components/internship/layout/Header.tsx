'use client';

import { motion } from 'framer-motion';

export const Header: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative z-10 text-center mb-12 px-4"
    >
      <div className="mb-6">
        <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-2">
          Join Our{' '}
          <span className="bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
            Internship
          </span>
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Begin your journey with AfriTech Bridge. Shape the future of technology in Africa.
        </p>
      </div>
    </motion.div>
  );
};
