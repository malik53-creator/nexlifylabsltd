import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexlify Labs Ltd — AI-Driven Review Automation for eCommerce',
  description:
    'Nexlify Labs ltd helps eCommerce brands automate customer review collection, enhance feedback quality, and increase trust through verified, authentic reviews.',
  openGraph: {
    title: 'Nexlify Labs Ltd',
    description:
      'AI-driven review collection and trust automation for eCommerce brands.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
