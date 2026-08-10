import { businessInfo } from '../data/siteConfig';

export default function ContactSection() {
  return (
    <section id="contact" className="space-y-8 rounded-[32px] border border-[#dcc7b7] bg-[#fff6ee]/90 px-6 py-10 shadow-soft md:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Contact</p>
          <h2 className="text-3xl font-semibold text-burgundy sm:text-4xl">Let’s make your event unforgettable.</h2>
          <p className="max-w-2xl text-base leading-8 text-[#4a2a2f]">
            Reach out to request information, check availability, or discuss the details of your upcoming celebration.
          </p>
        </div>

        <div className="space-y-4 rounded-[28px] border border-[#e7d7c6] bg-white/95 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#7b1320]">Get in touch</p>
            <p className="mt-3 text-base leading-7 text-[#4a2a2f]">Phone: {businessInfo.phone}</p>
            <p className="text-base leading-7 text-[#4a2a2f]">WhatsApp: {businessInfo.whatsapp}</p>
            <p className="text-base leading-7 text-[#4a2a2f]">Email: {businessInfo.email}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-[#7b1320]">Payment</p>
            <p className="mt-3 text-base leading-7 text-[#4a2a2f]">Accepting Cash and EcoCash.</p>
            <p className="mt-2 font-semibold text-ink">EcoCash: 0785654426</p>
            <p className="text-sm text-[#5a3f34]">Payments are arranged after the quote is agreed. No payment is collected through this form.</p>
          </div>
          <a
            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
              'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
            )}`}
            className="inline-flex w-full items-center justify-center rounded-full bg-burgundy px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]"
          >
            Message on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
