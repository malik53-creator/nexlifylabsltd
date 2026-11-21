import { SiteHeader } from '@/components/site/site-header';
import { Hero } from '@/components/site/hero';
import { About } from '@/components/site/about';
import { Features } from '@/components/site/features';
import { HowItWorks } from '@/components/site/how-it-works';
import { Testimonials } from '@/components/site/testimonials';
import { Faq } from '@/components/site/faq';
import { Contact } from '@/components/site/contact';
import { SiteFooter } from '@/components/site/site-footer';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
