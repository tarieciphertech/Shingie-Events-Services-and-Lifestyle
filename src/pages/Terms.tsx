import SEO from '../components/SEO';

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="Read the terms of service for Shingie Events Services and Lifestyle." />
      <section className="space-y-8 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Terms of Service</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Terms and conditions for event inquiries.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            By submitting an inquiry, you agree that Shingie Events Services and Lifestyle may contact you regarding your event request. This form does not constitute a booking or payment agreement.
          </p>
        </div>
        <div className="space-y-6 text-[#4a2a2f]">
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Quote inquiries</h2>
            <p className="mt-3 leading-8">
              Quotes are estimates based on the information you provide. Final pricing will be confirmed after a detailed discussion and event review.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Payment</h2>
            <p className="mt-3 leading-8">
              Payments are arranged directly with Shingie Events. EcoCash and cash are accepted for confirmed bookings; no payment is collected during inquiry submission.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Use of submitted data</h2>
            <p className="mt-3 leading-8">
              We use the information you provide to contact you, prepare a proposal, and manage your inquiry. We do not share your information with unrelated parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Contact for questions</h2>
            <p className="mt-3 leading-8">
              If you have questions about our terms, please contact us through WhatsApp or email.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
