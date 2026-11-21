import { CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'We tripled our review volume in six weeks. The AI prompts turn one-word ratings into detailed, genuinely helpful feedback our buyers actually read.',
    name: 'Amelia Hart',
    role: 'Founder, Verda Home Goods',
    initials: 'AH',
  },
  {
    quote:
      'The verified badge changed everything. Conversion on product pages with Nexlify reviews is up 24% — and our returns rate dropped because expectations are clearer.',
    name: 'Daniel Osei',
    role: 'Head of eCommerce, Loom & Lane',
    initials: 'DO',
  },
  {
    quote:
      'Setup took fifteen minutes. Since then it has been fully hands-off — review requests go out, quality feedback comes in, and the sentiment reports guide our roadmap.',
    name: 'Sofia Marin',
    role: 'COO, Bloomfield Skincare',
    initials: 'SM',
  },
];

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            Customer Stories
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Loved by brands that live on trust
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-900/5"
            >
              <CheckCircle2 className="h-6 w-6 text-teal-600" />
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-200 pt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700/10 text-sm font-semibold text-teal-700">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
