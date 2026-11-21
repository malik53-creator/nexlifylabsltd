'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) return null;
  return createClient(url, anonKey);
}

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const company = String(data.get('company') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setErrorMessage('Please fill in your name, email, and message.');
      setFormState('error');
      return;
    }

    setFormState('submitting');
    setErrorMessage('');

    const supabase = getSupabase();
    if (!supabase) {
      setErrorMessage(
        'We could not reach our servers. Please try again in a moment.'
      );
      setFormState('error');
      return;
    }

    const { error } = await supabase.from('demo_requests').insert({
      name,
      email,
      company: company || null,
      message,
    });

    if (error) {
      setErrorMessage(
        'Something went wrong while sending your request. Please try again.'
      );
      setFormState('error');
      return;
    }

    form.reset();
    setFormState('success');
  }

  if (formState === 'success') {
    return (
      <div className="rounded-2xl border border-teal-200 bg-teal-50 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto h-12 w-12 text-teal-600" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900">
          Thank you — your request is in!
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
          Our team will reach out within one business day to schedule your
          personalized demo.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setFormState('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">
            Full name <span className="text-red-500">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Jane Smith" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Work email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="jane@yourbrand.com"
            required
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Your brand name" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">
            What are you looking for? <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your store, your monthly order volume, and what you'd like to improve…"
            required
          />
        </div>
      </div>

      {formState === 'error' && errorMessage && (
        <p className="mt-4 rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={formState === 'submitting'}
        className="mt-6 w-full sm:w-auto"
      >
        {formState === 'submitting' ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Request a Demo
          </>
        )}
      </Button>
    </form>
  );
}
