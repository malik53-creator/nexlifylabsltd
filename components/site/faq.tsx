'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    question: 'How does Nexlify Labs ltd verify that reviews are authentic?',
    answer:
      'Every review is linked to a confirmed order in your store. When a customer submits feedback, we match it against your order data and attach a verified-purchase badge. Suspicious patterns — duplicate devices, unusual timing, incentivized submissions — are flagged by our fraud detection before anything is published.',
  },
  {
    question: 'Which eCommerce platforms do you support?',
    answer:
      'We offer native integrations for Shopify, WooCommerce, and BigCommerce, plus a REST API and JavaScript snippet for custom storefronts. Most stores are connected in under fifteen minutes with no developer help.',
  },
  {
    question: 'Will the review requests feel spammy to my customers?',
    answer:
      'No. Our AI sends a single, well-timed request after delivery and chooses the channel — email or SMS — each customer is most likely to respond to. Frequency is capped automatically, and customers can opt out with one click.',
  },
  {
    question: 'Can I moderate reviews before they go live?',
    answer:
      'Yes. You choose between automatic publishing, manual approval, or a hybrid mode where only low-rated reviews are held for review. You always own your review data and can export it at any time.',
  },
  {
    question: 'Does the AI change what customers write?',
    answer:
      'Never. The AI only guides customers with smart follow-up prompts to make their feedback more detailed. Published wording is always the customer’s own — we enhance quality, not sentiment.',
  },
  {
    question: 'What happens after my free trial ends?',
    answer:
      'You can pick a plan or do nothing — your account simply pauses and your existing reviews stay safely stored. There is no credit card required upfront and no automatic charge.',
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-700">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-slate-900 hover:text-teal-700 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
