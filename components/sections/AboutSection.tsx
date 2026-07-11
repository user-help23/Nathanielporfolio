'use client';

import { motion } from 'framer-motion';

interface AboutSectionProps {
  isDarkMode: boolean;
}

export default function AboutSection({ isDarkMode }: AboutSectionProps) {
  const skills = [
    { icon: 'ML', name: 'Machine Learning & AI', desc: 'ML models, deep learning, NLP' },
    { icon: 'PY', name: 'Python Frameworks', desc: 'Django, FastAPI, Flask' },
    { icon: 'CL', name: 'Cloud Development', desc: 'AWS, GCP, Azure, DevOps' },
    { icon: 'SA', name: 'Full-Stack Architecture', desc: 'System design, databases' },
    { icon: 'FE', name: 'Frontend Development', desc: 'React, TypeScript, Tailwind' },
    { icon: 'BE', name: 'Backend Systems', desc: 'APIs, microservices, databases' },
  ];

  return (
    <section
      id="about"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-950'
          }`}>
            About Me
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Building the future with cutting-edge technology and a passion for innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`lg:col-span-2 p-8 rounded-xl ${
              isDarkMode
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-200'
            }`}
          >
            <p className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              I&apos;m Nathaniel Patrick, co-founder and Chief Software Officer at TrianryTree, where we&apos;re building intelligent SaaS and ML platforms designed to solve complex, real-world problems. My expertise spans full-stack software architecture, machine learning engineering, and cloud infrastructure, with a proven track record of shipping production systems at scale.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              At TrianryTree, I lead technical strategy and product development, focusing on delivering robust, scalable solutions that combine cutting-edge ML capabilities with enterprise-grade software engineering. I&apos;m passionate about bridging the gap between theoretical AI and practical, impactful applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`p-8 rounded-xl ${
              isDarkMode
                ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-800/30'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'
            }`}
          >
            <h3 className={`text-xl font-bold mb-6 ${
              isDarkMode ? 'text-blue-300' : 'text-blue-600'
            }`}>
              Quick Facts
            </h3>
            <ul className={`space-y-4 text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {[
                ['CS', 'Advanced studies in ML & Computer Science'],
                ['TT', 'Founded TrianryTree in 2020'],
                ['10+', '10+ years in tech industry'],
                ['GL', 'Working on global impact projects'],
              ].map(([badge, text]) => (
                <li key={text} className="flex items-start gap-3">
                  <span className={`text-sm font-bold ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>{badge}</span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className={`text-2xl font-bold mb-8 ${
            isDarkMode ? 'text-white' : 'text-gray-950'
          }`}>
            Core Expertise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-800 border border-gray-700 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                    : 'bg-white border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
                }`}
              >
                <div className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                  {skill.icon}
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-950'
                }`}>
                  {skill.name}
                </h4>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
