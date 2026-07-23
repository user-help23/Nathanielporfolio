'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/common/Navigation';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';

type ThemeProps = {
  isDarkMode: boolean;
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const principles = [
  {
    label: '01',
    title: 'Products that earn trust before asking for it',
    body: 'I design systems around clarity, visible state, and honest constraints so users always know what is happening and why.',
  },
  {
    label: '02',
    title: 'Engineering that can survive real customers',
    body: 'Architecture decisions are made for scale, observability, maintainability, and the quiet confidence of production reliability.',
  },
  {
    label: '03',
    title: 'Machine learning with a job to do',
    body: 'ML belongs where it improves a workflow, reduces uncertainty, or unlocks insight, not where it only decorates a feature list.',
  },
];

const metrics = [
  { value: '2', label: 'Years building software' },
  { value: '10', label: 'Projects deployed and run' },
  { value: '5', label: 'Credential paths' },
];

const capabilities = [
  'SaaS architecture',
  'ML product strategy',
  'Cloud infrastructure',
  'Secure backend systems',
  'Interface engineering',
  'Technical leadership',
];

function sectionTone(isDarkMode: boolean) {
  return {
    shell: isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-950',
    band: isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-950',
    card: isDarkMode
      ? 'border-gray-800 bg-gray-900/70 text-gray-100'
      : 'border-gray-200 bg-white text-gray-950',
    muted: isDarkMode ? 'text-gray-400' : 'text-gray-600',
    soft: isDarkMode ? 'text-gray-300' : 'text-gray-700',
    line: isDarkMode ? 'border-gray-800' : 'border-gray-200',
    accent: isDarkMode ? 'text-white' : 'text-black',
  };
}

function LandingHero() {
  const [displayedText, setDisplayedText] = useState('');
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const typingState = useRef({
    timer: null as ReturnType<typeof setTimeout> | null,
    textIndex: 0,
    isDeleting: false,
    currentText: '',
  });

  const roles = useMemo(() => ['Co-Founder · Chief Software Officer'], []);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayedText(roles[0] ?? '');
      return;
    }

    const run = () => {
      const state = typingState.current;
      const phrase = roles[state.textIndex];
      if (!phrase) return;

      if (!state.isDeleting && state.currentText === phrase) {
        state.timer = setTimeout(() => {
          state.isDeleting = true;
          run();
        }, 2200);
        setDisplayedText(state.currentText);
        return;
      }

      if (state.isDeleting && state.currentText === '') {
        state.isDeleting = false;
        state.textIndex = (state.textIndex + 1) % roles.length;
        run();
        return;
      }

      state.currentText = state.isDeleting
        ? phrase.slice(0, state.currentText.length - 1)
        : phrase.slice(0, state.currentText.length + 1);

      setDisplayedText(state.currentText);
      state.timer = setTimeout(run, state.isDeleting ? 30 : 75);
    };

    run();

    return () => {
      if (typingState.current.timer) clearTimeout(typingState.current.timer);
    };
  }, [reducedMotion, roles]);

  useEffect(() => {
    if (reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        setMouseOffset({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent pt-28"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none transition-transform duration-100 ease-out"
        style={{ transform: `translate(${mouseOffset.x * -20}px, ${mouseOffset.y * -20}px)` }}
      >
        <div
          className="absolute left-1/2 top-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(148,163,184,0.03) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
            animation: reducedMotion ? 'none' : 'breathe 8s ease-in-out infinite',
          }}
        />

        {!reducedMotion && (
          <>
            <div className="signal-ring" />
            <div className="signal-ring" style={{ animationDelay: '2s' }} />
            <div className="signal-ring" style={{ animationDelay: '4s' }} />
          </>
        )}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-5">
            Nathaniel Patrick
          </h1>
          <div className="h-8 md:h-9 flex items-center">
            <span className="text-xl md:text-2xl font-light text-white/80 relative inline-block min-w-[10ch]">
              {displayedText}
              <span className="inline-block w-[1.5px] h-[0.85em] ml-1 bg-white/40 align-middle animate-pulse" />
            </span>
          </div>
        </div>

        <h2 className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
          Software that feels calm, intelligent, and built for the real world.
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl text-lg text-neutral-400 md:text-xl mb-10 leading-relaxed"
        >
          I help teams ship SaaS, machine learning products, and cloud systems with clarity, durable architecture, and predictable outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center bg-white text-black font-medium px-8 py-4 rounded-full transition-all hover:bg-gray-100 hover:scale-[1.02]"
          >
            View selected work →
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-neutral-900 text-white border border-neutral-800 px-8 py-4 rounded-full transition-all hover:bg-neutral-800 hover:scale-[1.02]"
          >
            <span className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
              N
            </span>
            Start a conversation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function TrustNarrative({ isDarkMode }: ThemeProps) {
  const tone = sectionTone(isDarkMode);

  return (
    <section id="about" className={`py-24 ${tone.band}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${tone.accent}`}>About the work</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              The best systems feel simple because someone absorbed the complexity.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="space-y-6">
            <p className={`text-lg leading-8 ${tone.soft}`}>
              I work at the intersection of product judgment and backend discipline: shaping interfaces people can trust, then backing them with systems that handle pressure gracefully.
            </p>
            <p className={`text-lg leading-8 ${tone.muted}`}>
              As co-founder and Chief Software Officer at TrianryTree, I focus on software that can move from prototype to production without losing its human center.
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {principles.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`group rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${tone.card}`}
            >
              <span className={`text-sm font-bold ${tone.accent}`}>{item.label}</span>
              <h3 className="mt-8 text-xl font-semibold leading-7">{item.title}</h3>
              <p className={`mt-4 text-sm leading-6 ${tone.muted}`}>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip({ isDarkMode }: ThemeProps) {
  const tone = sectionTone(isDarkMode);

  return (
    <section className={`border-y py-12 ${tone.shell} ${tone.line}`}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className={`text-4xl font-bold ${tone.accent}`}>{metric.value}</p>
              <p className={`mt-2 text-sm leading-5 ${tone.muted}`}>{metric.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {capabilities.map((capability) => (
            <span
              key={capability}
              className={`rounded-full border px-4 py-2 text-sm font-medium               transition duration-300 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-gray-800 bg-gray-900 text-gray-300 hover:border-gray-700'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300'
              }`}
            >
              {capability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkingMethod({ isDarkMode }: ThemeProps) {
  const tone = sectionTone(isDarkMode);

  return (
    <section className={`py-24 ${tone.shell}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${tone.accent}`}>How I build</p>
            <h2 className="max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
              A restrained process for ambitious software.
            </h2>
          </div>
          <p className={`text-lg leading-8 ${tone.muted}`}>
            Less spectacle, more signal: each phase removes ambiguity and creates something users, founders, and engineers can evaluate clearly.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {[
            ['Listen', 'Map the real workflow, constraints, and trust gaps.'],
            ['Shape', 'Turn messy intent into a focused product surface.'],
            ['Engineer', 'Build the backend contracts and UI states together.'],
            ['Refine', 'Measure behavior, remove friction, and scale what works.'],
          ].map(([title, copy], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className={`rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 ${tone.card}`}
            >
              <div className={`mb-10 h-px w-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`} />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className={`mt-3 text-sm leading-6 ${tone.muted}`}>{copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

    return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gray-950 text-gray-100'
          : 'bg-white text-gray-950'
      }`}
    >
      <div className="relative z-10">
          <Navigation />

        <main>
          <LandingHero />
          <TrustNarrative isDarkMode={isDarkMode} />
          <CapabilityStrip isDarkMode={isDarkMode} />
          <WorkingMethod isDarkMode={isDarkMode} />
          <ProjectsSection isDarkMode={isDarkMode} />
          <CertificationsSection isDarkMode={isDarkMode} />
          <ContactSection isDarkMode={isDarkMode} />
        </main>
      </div>
    </div>
  );
}