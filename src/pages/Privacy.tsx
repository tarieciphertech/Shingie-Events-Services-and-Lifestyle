import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="Read the privacy policy for Shingie Events Services and Lifestyle." />
      <section className="space-y-8 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Privacy Policy</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Privacy and data protection.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Shingie Events Services and Lifestyle respects your privacy. We only collect contact details and event information necessary to respond to quote requests and provide services.
          </p>
        </div>
        <div className="space-y-6 text-[#4a2a2f]">
          <div>
            <h2 className="text-xl font-semibold text-burgundy">What we collect</h2>
            <p className="mt-3 leading-8">
              We may collect your name, phone number, email address, event details, and any additional message you provide when requesting a quote.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">How we use your information</h2>
            <p className="mt-3 leading-8">
              Your details are used to respond to your inquiry and coordinate our services. We do not sell your data and we keep it secure.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Third-party services</h2>
            <p className="mt-3 leading-8">
              We may use email providers to send inquiry notifications. We do not share your personal information with unrelated third parties.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-burgundy">Contact</h2>
            <p className="mt-3 leading-8">
              If you have questions about privacy, please contact us through our site or WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
