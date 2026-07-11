'use client';

import { motion } from 'framer-motion';

interface CertificationsSectionProps {
  isDarkMode: boolean;
}

export default function CertificationsSection({ isDarkMode }: CertificationsSectionProps) {
  const certifications = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Certification ${i + 1}`,
    issuer: 'Issuing Organization',
    date: '2024',
    icon: `C${i + 1}`,
    color: i % 2 === 0 ? 'blue' : 'purple',
  }));

  const colorClasses = {
    blue: {
      light: 'bg-blue-50 border-blue-200',
      dark: 'bg-blue-900/20 border-blue-800/30',
      text: 'text-blue-600',
      darkText: 'text-blue-400',
    },
    purple: {
      light: 'bg-purple-50 border-purple-200',
      dark: 'bg-purple-900/20 border-purple-800/30',
      text: 'text-purple-600',
      darkText: 'text-purple-400',
    },
  };

  return (
    <section
      id="certifications"
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
            Certifications & Credentials
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional credentials and industry recognition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {certifications.map((cert, index) => {
            const colors = colorClasses[cert.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 rounded-lg border transition-all duration-300 flex flex-col items-center text-center ${
                  isDarkMode ? colors.dark : colors.light
                }`}
              >
                <div className={`text-2xl font-bold mb-4 ${
                  isDarkMode ? colors.darkText : colors.text
                }`}>
                  {cert.icon}
                </div>

                <h3 className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-950'
                }`}>
                  {cert.title}
                </h3>

                <p className={`text-sm mb-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {cert.issuer}
                </p>

                <span className={`text-xs font-medium ${
                  isDarkMode ? colors.darkText : colors.text
                }`}>
                  {cert.date}
                </span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-4 text-xs font-medium px-3 py-1 rounded transition-colors ${
                    isDarkMode
                      ? 'hover:bg-gray-800 text-gray-300'
                      : 'hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  View Details
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-12 p-8 rounded-lg ${
            isDarkMode
              ? 'bg-gradient-to-r from-blue-900/10 to-purple-900/10 border border-gray-800'
              : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200'
          }`}
        >
          <p className={`text-center ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            All certifications are verified and current. For detailed information about specific credentials, please <a href="#contact" className="text-blue-500 hover:underline">contact me</a>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
