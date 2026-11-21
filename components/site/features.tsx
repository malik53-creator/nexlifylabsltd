import {
  BarChart3,
  BrainCircuit,
  MessageSquareQuote,
  ShieldCheck,
  Star,
  Workflow,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Workflow,
    title: 'Automated Review Collection',
    description:
      'AI-triggered, perfectly timed review requests across email and SMS — after delivery, at peak engagement moments, without any manual work.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Feedback Enhancement',
    description:
      'Our engine guides customers toward richer, more useful feedback with smart prompts, so you get insights instead of one-word ratings.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Authenticity',
    description:
      'Every review is tied to a real, confirmed purchase. Blockchain-style audit trails and fraud detection keep fake reviews out.',
  },
  {
    icon: Star,
    title: 'Trust Badges & Widgets',
    description:
      'Showcase verified ratings on your product pages with elegant, conversion-optimized widgets that shoppers instantly trust.',
  },
  {
    icon: BarChart3,
    title: 'Sentiment Analytics',
    description:
      'Understand what customers love — and what to fix — with AI-driven sentiment themes, trend alerts, and exportable reports.',
  },
  {
    icon: MessageSquareQuote,
    title: 'Smart Review Responses',
    description:
      'Draft on-brand replies to every review in one click. Respond faster, sound human, and turn feedback into loyalty.',
  },
];

export function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to win customer trust
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            One platform to collect, enhance, and showcase authentic reviews —
            built specifically for modern eCommerce brands.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:bg-white hover:shadow-xl hover:shadow-teal-900/5"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                <feature.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
