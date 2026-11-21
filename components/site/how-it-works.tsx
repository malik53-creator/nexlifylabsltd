import { Plug, Rocket, ScanFace, Send } from 'lucide-react';

const STEPS = [
  {
    icon: Plug,
    step: 'Step 1',
    title: 'Connect your store',
    description:
      'Plug Nexlify into Shopify, WooCommerce, BigCommerce, or your custom storefront in minutes — no code required.',
  },
  {
    icon: ScanFace,
    step: 'Step 2',
    title: 'Verify every buyer',
    description:
      'Orders sync automatically, so each review request is tied to a real purchase and every published review is verified.',
  },
  {
    icon: Send,
    step: 'Step 3',
    title: 'AI collects & enhances',
    description:
      'Smart sequences ask at the right moment and coach customers toward detailed, high-quality feedback.',
  },
  {
    icon: Rocket,
    step: 'Step 4',
    title: 'Trust converts',
    description:
      'Verified ratings and reviews display across your store, boosting conversion and repeat purchases.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From order to trusted review in four steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Set it up once — Nexlify Labs Ltd runs quietly in the background,
            collecting authentic social proof around the clock.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <div key={step.title} className="relative">
              {index < STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-full top-8 hidden h-0.5 w-6 -translate-x-1/2 bg-gradient-to-r from-teal-300 to-teal-100 lg:block"
                />
              )}
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700 text-white">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
