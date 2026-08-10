import QuoteForm from '../components/QuoteForm';
import SEO from '../components/SEO';

export default function QuotePage() {
  return (
    <>
      <SEO title="Request a Quote" description="Send your event inquiry and receive a custom quote from Shingie Events Services and Lifestyle." />
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Request a Quote</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Tell us about your event and we’ll follow up promptly.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Use the form below to share your event details, and we’ll contact you with a personalized quote, availability, and recommendations.
          </p>
        </div>
        <QuoteForm />
      </section>
    </>
  );
}
