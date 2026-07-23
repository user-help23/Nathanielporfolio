'use client';

import { motion } from 'framer-motion';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const socialLinks = [
    {
      label: 'GitHub',
      icon: '🔗',
      link: 'https://github.com/user-help23',
    },
    {
      label: 'Email',
      icon: '✉️',
      link: 'mailto:nathanielpatrick1000@gmail.com',
    },
    {
      label: 'WhatsApp',
      icon: '💬',
      link: 'https://wa.me/2347026626565',
    },
    {
      label: 'LinkedIn',
      icon: '🔗',
      link: 'https://www.linkedin.com/in/nathaniel-patrick',
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-950' : 'bg-white'
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
            Let&apos;s Connect
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Reach out to me on any of these platforms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 flex-wrap"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl transition-all ${
                isDarkMode
                  ? 'bg-gray-900 border-2 border-gray-700 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                  : 'bg-gray-100 border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20'
              }`}
              title={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
