import SEO from '../components/SEO';
import { businessInfo } from '../data/siteConfig';

export default function Contact() {
  return (
    <>
      <SEO title="Contact" description="Contact Shingie Events Services and Lifestyle by WhatsApp, email, phone, or EcoCash." />
      <section className="space-y-8 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Contact</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Let’s make your event unforgettable.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Reach out to request information, check availability, or discuss your upcoming celebration. We’re happy to guide you through our services and next steps.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4 text-[#4a2a2f]">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Get in touch</p>
            <p className="text-base leading-7">Phone: {businessInfo.phone}</p>
            <p className="text-base leading-7">WhatsApp: {businessInfo.whatsapp}</p>
            <p className="text-base leading-7">Email: {businessInfo.email}</p>
            <p className="text-base leading-7">Location: {businessInfo.location}</p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[#e7d7c6] bg-[#f6efe7] p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-[#7b1320]">Payment</p>
            <p className="text-base leading-7 text-[#4a2a2f]">Accepting Cash and EcoCash for confirmed bookings.</p>
            <p className="mt-2 font-semibold text-ink">EcoCash: {businessInfo.payment.ecoCash}</p>
            <p className="text-sm text-[#5a3f34]">Payment arrangements are finalized after your quote is agreed.</p>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
              )}`}
              className="inline-flex w-full items-center justify-center rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]"
              target="_blank"
              rel="noreferrer"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
