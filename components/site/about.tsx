import { Globe2, ShieldCheck, Sparkles, Users } from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Trust comes first',
    description:
      'We build every feature around genuine purchasing experiences and authentic customer voices.',
  },
  {
    icon: Sparkles,
    title: 'AI with purpose',
    description:
      'Our technology helps brands collect richer feedback and act on useful insights faster.',
  },
  {
    icon: Globe2,
    title: 'Built for commerce',
    description:
      'We create practical tools that fit modern storefronts, teams, and customer journeys.',
  },
  {
    icon: Users,
    title: 'Customer focused',
    description:
      'We believe better reviews build stronger relationships between brands and buyers.',
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
              About Us
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Making customer trust visible, valuable, and easy to grow
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Nexlify Labs Ltd is an AI-powered technology company helping
              eCommerce brands turn real customer experiences into clear,
              trustworthy social proof.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              We combine intelligent review collection, AI-assisted feedback
              enhancement, verification, and analytics in one focused platform.
              Our goal is simple: help businesses listen better, build confidence,
              and make more informed decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                  <value.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
