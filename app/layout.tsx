import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['600', '700'],
});

export const metadata: Metadata = {
  title: 'Nathaniel Patrick - Software Engineer & ML Specialist',
  description:
    'Portfolio of Nathaniel Patrick. Co-founder of TrianryTree, ML Engineer, and Full-Stack Developer specializing in cloud computing and next-generation technologies.',
  keywords: [
    'Software Developer',
    'Machine Learning',
    'Full Stack',
    'Cloud Computing',
    'TrianryTree',
    'Portfolio',
  ],
  authors: [{ name: 'Nathaniel Patrick' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nathanielpatrick.dev',
    title: 'Nathaniel Patrick - Software Engineer & ML Specialist',
    description:
      'Portfolio showcasing ML engineering, full-stack development, and cloud computing expertise.',
    siteName: 'Nathaniel Patrick',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nathaniel Patrick - Software Engineer',
    description: 'Explore my portfolio and projects.',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

/**
 * Root Layout Component
 * Provides global layout, fonts, theme provider, and metadata
 * Dark mode first approach using Tailwind CSS
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
