'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  isDarkMode: boolean;
}

export default function HeroSection({ isDarkMode }: HeroSectionProps) {
  const [displayName, setDisplayName] = useState('');
  const [isNameVisible, setIsNameVisible] = useState(false);

  useEffect(() => {
    const fullName = 'Nathaniel Patrick';
    let typingTimer: ReturnType<typeof setTimeout>;
    let cycleTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      setDisplayName('');
      setIsNameVisible(false);

      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex <= fullName.length) {
          setDisplayName(fullName.slice(0, currentIndex));
          setIsNameVisible(true);
          currentIndex += 1;
          typingTimer = setTimeout(typeNextChar, 110);
        } else {
          cycleTimer = setTimeout(() => {
            setIsNameVisible(false);
            setDisplayName('');
            resetTimer = setTimeout(() => {
              runCycle();
            }, 400);
          }, 5000);
        }
      };

      typeNextChar();
    };

    runCycle();

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(cycleTimer);
      clearTimeout(resetTimer);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className={`min-h-screen pt-32 pb-20 flex items-center transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'
          : 'bg-gradient-to-br from-white via-gray-50 to-blue-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                  isDarkMode
                    ? 'bg-blue-950 text-blue-300 border border-blue-800'
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}
              >
                Welcome to my portfolio
              </motion.div>

              <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-950'
              }`}>
                Hi, I&apos;m{' '}
                <span className={`inline-flex min-h-[1.2em] items-center bg-clip-text text-transparent bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-blue-400 to-purple-400'
                    : 'from-blue-600 to-purple-600'
                }`}>
                  <span className="inline-block min-w-[11ch]">
                    {isNameVisible ? displayName : ''}
                  </span>
                  <span className={`ml-0.5 inline-block h-8 w-[0.35rem] rounded-full align-middle ${isNameVisible ? 'animate-pulse bg-current' : 'bg-transparent'}`} />
                </span>
              </h1>

              <p className={`text-xl md:text-2xl font-medium mb-3 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Co-Founder & Chief Software Officer at TrianryTree
              </p>

              <p className={`text-lg leading-relaxed mb-8 max-w-2xl ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building intelligent SaaS and ML solutions that drive real-world impact. Specializing in scalable architecture, machine learning engineering, and cloud infrastructure.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-600/30"
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 border-2 ${
                  isDarkMode
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-950'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}
              >
                Get in Touch
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-700/50"
            >
              {[
                { number: '10+', label: 'Years Experience' },
                { number: '50+', label: 'Projects Shipped' },
                { number: '5', label: 'Certifications' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative h-96 lg:h-full">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-800/30'
                  : 'bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200'
              }`}
            >
              <div className={`absolute inset-0 ${
                isDarkMode
                  ? 'bg-gradient-to-tr from-blue-600/20 to-transparent'
                  : 'bg-gradient-to-tr from-blue-400/10 to-transparent'
              }`} />

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="text-6xl font-bold opacity-10"
                >
                  NP
                </motion.div>
              </div>

              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className={`absolute w-12 h-12 rounded-lg opacity-50 ${
                    i === 0 ? 'top-10 left-10 bg-blue-500' :
                    i === 1 ? 'top-1/2 right-10 bg-purple-500' :
                    'bottom-10 left-1/2 bg-pink-500'
                  }`}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
