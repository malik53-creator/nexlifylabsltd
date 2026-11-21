import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SiteFooter } from '@/components/site/site-footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Nexlify Labs Ltd',
  description: 'Privacy Policy for Nexlify Labs Ltd.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-700 hover:text-teal-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <article className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: 21 November 2026</p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-600">
              <section>
                <h2 className="text-xl font-semibold text-slate-900">1. Introduction</h2>
                <p className="mt-3">
                  Nexlify Labs Ltd (&quot;Nexlify Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
                  respects your privacy. This Privacy Policy explains how we collect, use,
                  disclose, and protect personal information when you visit our website or
                  use our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">2. Information We Collect</h2>
                <p className="mt-3">We may collect:</p>
                <ul className="mt-3 list-disc space-y-2 pl-6">
                  <li>Information you submit through forms, including your name, email address, company name, and message.</li>
                  <li>Account and service information needed to provide and manage our platform.</li>
                  <li>Technical data such as IP address, browser type, device information, and usage activity.</li>
                  <li>Information from integrated commerce platforms or other authorized sources.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">3. How We Use Information</h2>
                <p className="mt-3">We use personal information to operate and improve our services, respond to enquiries, provide support, manage accounts, prevent fraud, comply with legal obligations, and communicate with you about relevant updates or service information.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">4. Sharing Information</h2>
                <p className="mt-3">We do not sell personal information. We may share information with trusted service providers that support our operations, with authorized platform integrations, when required by law, or in connection with a merger, acquisition, or transfer of business assets.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">5. Data Retention and Security</h2>
                <p className="mt-3">We retain personal information only for as long as necessary for the purposes described in this policy or as required by law. We use reasonable administrative, technical, and organizational measures to protect information, although no system can be guaranteed completely secure.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">6. Your Rights</h2>
                <p className="mt-3">Subject to applicable law, you may request access to, correction of, deletion of, or restriction of your personal information. You may also object to certain processing or request a copy of your data.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">7. Contact Us</h2>
                <p className="mt-3">For privacy questions or requests, contact us at:</p>
                <address className="mt-3 not-italic">
                  Nexlify Labs Ltd<br />
                  SIU OFFICES, 4-6 GREATOREX STREET<br />
                  LONDON, UNITED KINGDOM E1 5NF<br />
                  <a href="mailto:info@nexlifylabsltd.com" className="text-teal-700 hover:text-teal-800">info@nexlifylabsltd.com</a><br />
                  <a href="tel:+447828760930" className="text-teal-700 hover:text-teal-800">+44 7828760930</a>
                </address>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
