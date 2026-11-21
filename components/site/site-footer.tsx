import Link from 'next/link';
import { Linkedin, Mail, MapPin, Phone, Twitter, Zap } from 'lucide-react';

const PRODUCT_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-600 to-teal-900 text-white">
                <Zap className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <span className="text-lg font-semibold text-white">
                Nexlify Labs ltd
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Nexlify Labs Ltd — AI-driven tools that help eCommerce brands
              collect, enhance, and showcase verified customer reviews.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="mailto:info@nexlifylabsltd.com"
                aria-label="Email Nexlify Labs Ltd"
                className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-teal-400"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800">
                  <Mail className="h-4 w-4" />
                </span>
                info@nexlifylabsltd.com
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-teal-500/50 hover:text-teal-400"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 text-slate-400 transition-colors hover:border-teal-500/50 hover:text-teal-400"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Get Started
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Ready to build trust with verified reviews?
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex rounded-lg bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
            >
              Request a Demo
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" />
                <span>
                  SIU OFFICES
                  <br />
                  4-6 GREATOREX STREET
                  <br />
                  LONDON
                  <br />
                  UNITED KINGDOM E1 5NF
                </span>
              </p>
              <a
                href="tel:+447828760930"
                className="flex items-center gap-2 transition-colors hover:text-teal-400"
              >
                <Phone className="h-4 w-4 shrink-0 text-teal-500" />
                +44 7828760930
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Nexlify Labs Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy" className="transition-colors hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition-colors hover:text-slate-300">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
