import { Button } from '@/components/ui/button';
import { ShieldCheck, Sparkles, Star, TrendingUp } from 'lucide-react';

const STATS = [
  { value: '4.9/5', label: 'Average review rating lift', icon: Star },
  { value: '38%', label: 'More collected reviews', icon: TrendingUp },
  { value: '100%', label: 'Verified & authentic', icon: ShieldCheck },
  { value: '15 min', label: 'Setup on your storefront', icon: Sparkles },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(13,148,136,0.35),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-sm font-medium text-teal-300">
          <Sparkles className="h-4 w-4" />
          AI-powered review automation for eCommerce
        </span>

        <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Turn every customer into a{' '}
          <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
            trusted reviewer
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Nexlify Labs ltd helps eCommerce brands automate customer review
          collection, enhance feedback quality, and increase buyer trust
          through verified, authentic reviews.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 px-8 text-base shadow-lg shadow-teal-500/25">
            <a href="#contact">Request a Demo</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-slate-700 bg-white/5 px-8 text-base text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>

        <dl className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-left backdrop-blur-sm transition-colors hover:border-teal-500/40"
            >
              <stat.icon className="h-5 w-5 text-teal-400" />
              <dd className="mt-3 text-3xl font-bold text-white">{stat.value}</dd>
              <dt className="mt-1 text-sm text-slate-400">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
