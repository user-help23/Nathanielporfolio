'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendWhatsappMessage } from '@/lib/whatsapp';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export default function ContactSection({ isDarkMode }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppClick = () => {
    const message = `Hi Nathaniel, I would like to get in touch with you! My name is ${formData.name || 'there'}.`;
    sendWhatsappMessage(message);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: 'EM',
      title: 'Email',
      value: 'nathaniel@example.com',
      link: 'mailto:nathaniel@example.com',
    },
    {
      icon: 'WA',
      title: 'WhatsApp',
      value: 'Send Message',
      action: handleWhatsAppClick,
    },
    {
      icon: 'IN',
      title: 'LinkedIn',
      value: 'View Profile',
      link: 'https://linkedin.com',
    },
    {
      icon: 'GH',
      title: 'GitHub',
      value: 'View Projects',
      link: 'https://github.com',
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
            Let&apos;s Work Together
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Have a project in mind or want to collaborate? Get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactMethods.map((method) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {'link' in method ? (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 rounded-lg border transition-all duration-300 block ${
                    isDarkMode
                      ? 'bg-gray-900 border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                      : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
                  }`}
                >
                  <div className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {method.icon}
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-950'
                  }`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {method.value}
                  </p>
                </a>
              ) : (
                <button
                  onClick={method.action}
                  className={`w-full p-6 rounded-lg border transition-all duration-300 text-left ${
                    isDarkMode
                      ? 'bg-gray-900 border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                      : 'bg-gray-50 border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
                  }`}
                >
                  <div className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-blue-300' : 'text-blue-600'}`}>
                    {method.icon}
                  </div>
                  <h3 className={`font-semibold mb-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-950'
                  }`}>
                    {method.title}
                  </h3>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {method.value}
                  </p>
                </button>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className={`p-8 rounded-lg ${
            isDarkMode
              ? 'bg-gradient-to-br from-gray-900 to-gray-900 border border-gray-800'
              : 'bg-gradient-to-br from-gray-50 to-gray-50 border border-gray-200'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    isDarkMode
                      ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none'
                      : 'bg-white border border-gray-300 text-gray-950 placeholder-gray-400 focus:border-blue-600 focus:outline-none'
                  }`}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg transition-colors ${
                    isDarkMode
                      ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none'
                      : 'bg-white border border-gray-300 text-gray-950 placeholder-gray-400 focus:border-blue-600 focus:outline-none'
                  }`}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg transition-colors resize-none ${
                    isDarkMode
                      ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-blue-600 focus:outline-none'
                      : 'bg-white border border-gray-300 text-gray-950 placeholder-gray-400 focus:border-blue-600 focus:outline-none'
                  }`}
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
