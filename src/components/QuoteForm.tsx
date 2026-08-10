import { useMemo, useState, type FormEvent } from 'react';
import { businessInfo, quoteOptions } from '../data/siteConfig';

const initialFormState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  location: '',
  guests: '',
  services: '',
  budget: '',
  requirements: '',
};

export default function QuoteForm() {
  const [form, setForm] = useState(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(
    () => form.name.trim() && form.phone.trim() && form.eventType && form.services,
    [form]
  );

  const handleChange = (field: string, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data?.message || 'Unable to send your request at this time.');
      }

      setSubmitted(true);
      setForm(initialFormState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="quote" className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Request a Quote</p>
        <h2 className="text-3xl font-semibold text-burgundy sm:text-4xl">Share your event details and we’ll reach out with a tailored plan.</h2>
        <p className="max-w-2xl text-base leading-8 text-[#4a2a2f]">
          Submit your event inquiry and we will contact you with a personal quote, availability, and service recommendations.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card bg-white/95">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b1320]">Why work with us</p>
          <div className="mt-6 rounded-[24px] border border-[#ecd8c3] bg-[#f8f0e7] p-5 text-sm text-ink shadow-soft">
            <p className="font-semibold text-ink">EcoCash: {businessInfo.payment.ecoCash}</p>
            <p className="mt-2">Pay via EcoCash once pricing is agreed. This is an informational payment option only — quote requests do not create a paid booking.</p>
          </div>
          <ul className="mt-5 space-y-4 text-sm leading-7 text-[#4a2a2f]">
            <li>Thoughtful planning that reflects your personal style.</li>
            <li>Elegant décor and catering designed to impress.</li>
            <li>Clear communication from inquiry through event day.</li>
            <li>Flexible arrangements based on your timeline and needs.</li>
          </ul>
          <div className="mt-8 rounded-[28px] border border-[#dcc7b7] bg-[#f9f1e9] p-6">
            <p className="max-w-sm text-sm leading-7 text-[#4a2a2f]">
              Final pricing is personalized based on your requirements and event details. Use this form to request a custom quote from Shingie Events Services and Lifestyle.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 rounded-[28px] border border-[#dcc7b7] bg-white/95 p-6 shadow-soft">
          {submitted && (
            <div className="rounded-3xl border border-[#d2b5aa] bg-[#f8e7e4] px-5 py-4 text-sm text-[#62222d]">
              Thank you! Your request has been received. We will contact you soon to discuss your event.
            </div>
          )}

          {error && (
            <div className="rounded-3xl border border-[#d2807b] bg-[#f9e7e4] px-5 py-4 text-sm text-[#7b1320]">
              {error}
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Full Name
              <input
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                placeholder="Enter your name"
                required
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Phone Number
              <input
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                placeholder="Enter your phone number"
                required
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Email
              <input
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                placeholder="Enter your email"
                type="email"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Event Type
              <select
                value={form.eventType}
                onChange={(e) => handleChange('eventType', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                required
              >
                <option value="">Select event type</option>
                {quoteOptions.eventTypes.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Event Date
              <input
                type="date"
                value={form.eventDate}
                onChange={(e) => handleChange('eventDate', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Event Location
              <input
                value={form.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                placeholder="Venue or city"
              />
            </label>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Number of Guests
              <input
                value={form.guests}
                onChange={(e) => handleChange('guests', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                placeholder="Estimated guest count"
              />
            </label>
            <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
              Services Required
              <select
                value={form.services}
                onChange={(e) => handleChange('services', e.target.value)}
                className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
                required
              >
                <option value="">Select service option</option>
                {quoteOptions.services.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
            Budget (optional)
            <input
              value={form.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              className="w-full rounded-3xl border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
              placeholder="Enter a budget range"
            />
          </label>

          <label className="space-y-2 text-sm font-medium text-[#4a2a2f]">
            Additional Requirements
            <textarea
              value={form.requirements}
              onChange={(e) => handleChange('requirements', e.target.value)}
              rows={5}
              className="w-full rounded-[28px] border border-[#dcc7b7] bg-[#faf4ef] p-3 text-sm text-burgundy outline-none transition focus:border-burgundy"
              placeholder="Share any details or special requests"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit || loading}
            className="inline-flex w-full items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? 'Sending…' : 'Request a Quote'}
          </button>
        </form>
      </div>
    </section>
  );
}
