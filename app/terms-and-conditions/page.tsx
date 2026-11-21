import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SiteFooter } from '@/components/site/site-footer';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Nexlify Labs Ltd',
  description: 'Terms and Conditions for Nexlify Labs Ltd.',
};

export default function TermsAndConditionsPage() {
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
              Terms &amp; Conditions
            </h1>
            <p className="mt-3 text-sm text-slate-500">Last updated: 21 November 2026</p>

            <div className="mt-8 space-y-8 text-[15px] leading-relaxed text-slate-600">
              <section>
                <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
                <p className="mt-3">By accessing or using Nexlify Labs Ltd&apos;s website or services, you agree to these Terms &amp; Conditions. If you do not agree, you must not use the services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">2. Services</h2>
                <p className="mt-3">Nexlify Labs provides tools for eCommerce review collection, feedback enhancement, verification, analytics, and related automation. Features and availability may vary based on the plan or agreement applicable to your account.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">3. Accounts and Responsibilities</h2>
                <p className="mt-3">You are responsible for maintaining the confidentiality of account credentials and for activity performed through your account. You must provide accurate information and use the services lawfully and in accordance with applicable platform policies.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">4. Acceptable Use</h2>
                <p className="mt-3">You may not use the services to publish false or misleading reviews, violate consumer or privacy laws, distribute harmful content, interfere with service operations, bypass security controls, or infringe another person&apos;s rights.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">5. Intellectual Property</h2>
                <p className="mt-3">The website, software, branding, and related materials are owned by Nexlify Labs Ltd or its licensors. You retain ownership of content you submit, but grant us the permissions needed to provide and operate the services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">6. Fees and Cancellation</h2>
                <p className="mt-3">Where a paid plan applies, fees, billing periods, renewal terms, and cancellation procedures will be presented in the applicable order or account agreement. Charges may be due in advance unless otherwise stated.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">7. Disclaimer and Liability</h2>
                <p className="mt-3">The services are provided as available without warranties beyond those required by law. To the maximum extent permitted by law, Nexlify Labs Ltd is not liable for indirect, incidental, special, or consequential losses arising from use of the services.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">8. Suspension and Termination</h2>
                <p className="mt-3">We may suspend or terminate access if these terms are breached, legal or security concerns arise, or access is no longer permitted. You may stop using the services at any time, subject to your applicable account obligations.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">9. Changes to These Terms</h2>
                <p className="mt-3">We may update these Terms &amp; Conditions from time to time. Continued use of the website or services after an updated version is posted constitutes acceptance of the revised terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-slate-900">10. Contact</h2>
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
