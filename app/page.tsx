'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Navigation from '@/components/common/Navigation';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/common/Footer';

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
  { value: '10+', label: 'Years building software' },
  { value: '50+', label: 'Projects shipped' },
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
    accent: isDarkMode ? 'text-blue-300' : 'text-blue-600',
  };
}

function LandingHero({ isDarkMode }: ThemeProps) {
  const reduceMotion = useReducedMotion();
  const tone = sectionTone(isDarkMode);

  return (
    <section id="home" className={`relative isolate min-h-screen overflow-hidden pt-28 ${tone.shell}`}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 ${isDarkMode ? 'opacity-100' : 'opacity-90'}`}
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle at top left, rgba(59,130,246,0.16), transparent 32%), linear-gradient(180deg, rgba(15, 23, 42, 1), rgba(7, 12, 24, 0.96))'
            : 'radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 32%), linear-gradient(180deg, rgba(255,255,255,1), rgba(241,245,249,0.92))',
        }}
      />

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: reduceMotion ? 0 : 0.12 }}
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className={`mb-8 inline-flex border-b pb-2 text-sm font-semibold tracking-[0.18em] uppercase ${tone.accent} ${tone.line}`}
          >
            Nathaniel Patrick / TrianryTree
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Software that feels calm, intelligent, and built for the real world.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className={`mt-8 max-w-2xl text-lg leading-8 sm:text-xl ${tone.soft}`}
          >
            I help teams ship SaaS, machine learning products, and cloud systems with clarity, durable architecture, and predictable outcomes.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent active:translate-y-0 active:scale-[0.98]"
            >
              View selected work
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#contact"
              className={`inline-flex items-center justify-center rounded-2xl border px-7 py-4 text-sm font-semibold transition duration-300 ${
                isDarkMode
                  ? 'border-gray-700 text-gray-100 hover:border-blue-500 hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
                  : 'border-gray-300 text-gray-950 hover:border-blue-500 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent'
              } active:translate-y-0 active:scale-[0.98]`}
            >
              Start a conversation
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { label: 'Years experience', value: '10+' },
              { label: 'Projects shipped', value: '50+' },
              { label: 'Credential paths', value: '5' },
            ].map((item) => (
              <div key={item.label} className="rounded-3xl border border-gray-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-colors duration-300 dark:border-gray-800 dark:bg-gray-950/70">
                <p className="text-3xl font-semibold text-blue-600 dark:text-blue-300">{item.value}</p>
                <p className={`mt-2 text-sm ${tone.muted}`}>{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: 'easeOut' }}
          className="relative"
        >
          <div className={`rounded-[2rem] border p-4 shadow-2xl ${tone.card} ${isDarkMode ? 'shadow-black/30' : 'shadow-slate-300/40'}`}>
            <div className={`rounded-[1.4rem] border p-6 ${isDarkMode ? 'border-gray-800 bg-gray-950/80' : 'border-gray-200 bg-white'}`}>
              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${tone.muted}`}>Design + engineering</p>
                  <p className="mt-2 text-lg font-semibold">Dependable systems, clear decisions</p>
                </div>
                <div className="inline-flex h-12 min-w-[3rem] items-center justify-center rounded-3xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25">
                  NP
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ['01', 'Align product, engineering, and customer context first.'],
                  ['02', 'Ship the smallest useful system with reliable feedback.'],
                  ['03', 'Measure, tighten, and scale with confidence.'],
                ].map(([step, copy]) => (
                  <article
                    key={step}
                    className={`rounded-2xl border p-5 transition duration-300 ${
                      isDarkMode
                        ? 'border-gray-800 bg-gray-900/60 hover:border-blue-600'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className={`text-sm font-semibold ${tone.accent}`}>{step}</div>
                    <p className={`mt-3 text-sm leading-6 ${tone.soft}`}>{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
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
            <p className={`mb-4 text-sm font-semibold uppercase tracking-[0.2em] ${tone.accent}`}>Why this matters</p>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              When software is unclear, people stop trusting it.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="space-y-6">
            <p className={`text-lg leading-8 ${tone.soft}`}>
              Many teams build features before they build confidence. I focus on clarity, consistent state, and workflows that make each step obvious.
            </p>
            <p className={`text-lg leading-8 ${tone.muted}`}>
              As co-founder and Chief Software Officer at TrianryTree, I help teams move from messy ideas to dependable products that users can adopt without friction.
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
              className={`rounded-full border px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${
                isDarkMode
                  ? 'border-gray-800 bg-gray-900 text-gray-300 hover:border-blue-700'
                  : 'border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300'
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

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-950 text-gray-100' : 'bg-white text-gray-950'}`}>
      <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <LandingHero isDarkMode={isDarkMode} />
        <TrustNarrative isDarkMode={isDarkMode} />
        <CapabilityStrip isDarkMode={isDarkMode} />
        <WorkingMethod isDarkMode={isDarkMode} />
        <ProjectsSection isDarkMode={isDarkMode} />
        <CertificationsSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
