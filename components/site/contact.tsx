import { CalendarCheck, Headset, Mail, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/site/contact-form';

const PERKS = [
  {
    icon: CalendarCheck,
    title: '30-minute personalized walkthrough',
    description: 'See the product on your own storefront, not a canned demo.',
  },
  {
    icon: ShieldCheck,
    title: 'Free 14-day trial',
    description: 'Full access, no credit card, cancel anytime.',
  },
  {
    icon: Headset,
    title: 'Migration support included',
    description: 'We move your existing reviews over at no extra cost.',
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_80%_100%,rgba(13,148,136,0.25),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-400">
              Request a Demo
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              See Nexlify Labs ltd in action
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              Tell us a little about your store and we&apos;ll show you exactly
              how automated, verified reviews would work for your brand.
            </p>

            <ul className="mt-10 space-y-6">
              {PERKS.map((perk) => (
                <li key={perk.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400">
                    <perk.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{perk.title}</p>
                    <p className="mt-0.5 text-sm text-slate-400">
                      {perk.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="mailto:info@nexlifylabsltd.com"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-teal-300 transition-colors hover:text-teal-200"
            >
              <Mail className="h-4 w-4" />
              info@nexlifylabsltd.com
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
