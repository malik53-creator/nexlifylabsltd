'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-900 text-white">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span
            className={`text-lg font-semibold tracking-tight transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            Nexlify Labs ltd
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                scrolled ? 'text-slate-600' : 'text-slate-100/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">Request a Demo</a>
          </Button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-6 pt-4 shadow-lg md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="mt-3">
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Request a Demo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
