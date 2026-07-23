'use client';

import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/constants';

interface ProjectsSectionProps {
  isDarkMode: boolean;
}

export default function ProjectsSection({ isDarkMode }: ProjectsSectionProps) {
  const projects = PROJECTS.filter((p) => p.featured);

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group rounded-xl overflow-hidden transition-all duration-300 flex flex-col ${
                isDarkMode
                  ? 'bg-gray-900 border border-gray-800 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-600/20'
                  : 'bg-gray-50 border border-gray-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20'
              }`}
            >
              <div className={`h-48 flex items-center justify-center text-center text-sm font-semibold transition-colors overflow-hidden ${
                isDarkMode
                  ? 'bg-gray-900 text-gray-400'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                <span className="px-4">{project.title}</span>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-950'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm mb-4 flex-grow ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full ${
                        isDarkMode
                          ? 'bg-blue-950 text-blue-300'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 2 }}
                    className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all text-center ${
                      isDarkMode
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Live Demo
                  </motion.a>
                  
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 2 }}
                      className={`flex-1 px-4 py-2 rounded-lg text-sm font-semibold transition-all text-center ${
                        isDarkMode
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                          : 'bg-gray-200 text-gray-800 hover:bg-gray-300 border border-gray-300'
                      }`}
                    >
                      GitHub
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
