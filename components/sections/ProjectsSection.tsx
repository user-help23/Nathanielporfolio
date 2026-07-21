'use client';

import { motion } from 'framer-motion';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export default function ProjectsSection({ isDarkMode }: ProjectsSectionProps) {
  const projects = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1} - Coming Soon`,
    description: 'Project description placeholder. Replace with your actual project details.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#',
    image: `Project ${i + 1}`,
  }));

  return (
    <section
      id="projects"
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
            Featured Projects
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Showcasing my recent work and technical achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group rounded-xl overflow-hidden transition-all duration-300 ${
                isDarkMode
                  ? 'bg-gray-900 border border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                  : 'bg-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
              }`}
            >
              <div className={`h-48 flex items-center justify-center px-6 text-center text-2xl font-bold transition-colors ${
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-gray-700 text-blue-300 group-hover:from-blue-900 group-hover:to-purple-900'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200 text-blue-600 group-hover:from-blue-100 group-hover:to-purple-100'
              }`}>
                {project.image}
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-950'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 line-clamp-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDarkMode
                          ? 'bg-blue-950 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    isDarkMode
                      ? 'text-blue-400 hover:text-blue-300'
                      : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 rounded-lg font-semibold transition-all bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            Talk about your project
          </a>
        </motion.div>
      </div>
    </section>
  );
}
