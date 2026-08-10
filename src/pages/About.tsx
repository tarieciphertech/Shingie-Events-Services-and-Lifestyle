import SEO from '../components/SEO';
import { businessInfo } from '../data/siteConfig';

export default function About() {
  return (
    <>
      <SEO title="About" description="Learn more about Shingie Events Services and Lifestyle and our premium event design approach." />
      <section className="space-y-8 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">About Us</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Professional event styling, catering, coordination and custom cakes.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Shingie Events Services and Lifestyle blends premium décor, polished catering presentation, and thoughtful planning to create celebrations that feel truly special. We support weddings, birthdays, anniversaries, corporate functions and private events with a warm, attentive approach.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6 text-[#4a2a2f]">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Our promise</p>
            <ul className="space-y-4 text-sm leading-8">
              <li>Elegant event concepts shaped around your vision.</li>
              <li>Clear timelines, transparent communication, and professional support.</li>
              <li>Customized décor, catering and cake selections for every celebration.</li>
              <li>Reliable execution so you can enjoy your event with confidence.</li>
            </ul>
          </div>
          <div className="space-y-6 rounded-[28px] border border-[#e8d8c4] bg-[#f8ede4] p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Contact details</p>
            <p className="text-base leading-7 text-[#4a2a2f]">WhatsApp and phone: {businessInfo.whatsapp}</p>
            <p className="text-base leading-7 text-[#4a2a2f]">EcoCash: {businessInfo.payment.ecoCash}</p>
            <p className="text-base leading-7 text-[#4a2a2f]">Email: {businessInfo.email}</p>
            <p className="text-base leading-7 text-[#4a2a2f]">Location: {businessInfo.location}</p>
          </div>
        </div>
      </section>
    </>
  );
}
