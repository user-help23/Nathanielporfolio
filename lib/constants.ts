/**
 * Portfolio Constants & Data
 * Centralized configuration for skills, projects, and social links
 */

export const PORTFOLIO_DATA = {
  name: 'Nathaniel Patrick',
  title: 'Software Engineer & ML Specialist',
  email: 'nathanielpatrick1000@gmail.com',
  phone: '+2347026626565',
  location: 'Nigeria',
  bio: 'Co-founder of TrianryTree | Machine Learning Engineer | Full-Stack Developer | Cloud Computing Specialist',
  description: `I'm passionate about building scalable, intelligent software solutions that make a meaningful global impact. 
    With expertise in machine learning, cloud computing, and full-stack development, I specialize in creating next-generation technologies 
    that solve real-world problems.`,
};

/**
 * Skills organized by category
 * Used in About section
 */
export const SKILLS = [
  {
    category: 'Frontend',
    items: [
      'React/Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Shadcn UI',
    ],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'ML & AI',
    items: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision', 'Data Science'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'CI/CD'],
  },
];

/**
 * Featured Projects
 * Used in Projects section
 * Replace with actual project data as needed
 */
export const PROJECTS = [
  {
    id: 1,
    title: 'TrianryTree Platform',
    description:
      'Enterprise SaaS platform combining machine learning with cloud infrastructure for data processing and analytics.',
    technologies: ['Next.js', 'Python', 'TensorFlow', 'AWS'],
    link: 'https://trianrytree.com',
    status: 'In Progress',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description:
      'Intelligent content generation tool powered by fine-tuned language models for marketing and creative writing.',
    technologies: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    link: '#',
    status: 'Completed',
    featured: true,
  },
  {
    id: 3,
    title: 'Cloud Data Pipeline',
    description:
      'Scalable ETL pipeline for processing and transforming large datasets with real-time monitoring and alerting.',
    technologies: ['Python', 'Airflow', 'Spark', 'GCP'],
    link: '#',
    status: 'Completed',
    featured: false,
  },
  {
    id: 4,
    title: 'ML Model API',
    description:
      'Production-ready REST API for deploying and serving machine learning models with versioning and monitoring.',
    technologies: ['FastAPI', 'Docker', 'PostgreSQL', 'Redis'],
    link: '#',
    status: 'Completed',
    featured: false,
  },
];

/**
 * Social Media Links
 * Used in Header/Footer components
 */
export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    url: 'https://user-help23github.com',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://nathanielpatrick.linkedin.com',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:nathanielpatrick1000@gmail.com',
    icon: 'mail',
  },
];

/**
 * Navigation Links
 * Used in Header/Navigation component
 */
export const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

/**
 * Contact Form Placeholders
 * Used in Contact Form component
 */
export const CONTACT_PLACEHOLDERS = {
  fullName: 'Enter your full name',
  email: 'your.email@example.com',
  subject: 'Project inquiry, collaboration, etc.',
  message: 'Tell me about your project or inquiry...',
};

/**
 * Animation Delays (in seconds)
 * Used for staggered animations
 */
export const ANIMATION_DELAYS = {
  stagger: 0.1,
  hero: 0.2,
  section: 0.15,
};

/**
 * API Rate Limiting Configuration
 * Prevents spam submissions
 */
export const RATE_LIMIT_CONFIG = {
  maxRequests: 3,
  windowMs: 5 * 60 * 1000, // 5 minutes
};
