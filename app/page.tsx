'use client';

import { useEffect, useState } from 'react';
import Navigation from '@/components/common/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/common/Footer';

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    } else {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode, mounted]);

  if (!mounted) {
    return null;
  }

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-950'}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <HeroSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <CertificationsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>
      
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
