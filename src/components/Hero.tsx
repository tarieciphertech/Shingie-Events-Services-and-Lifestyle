import { businessInfo } from '../data/siteConfig';

const logoImg = new URL('../assets/logo.jpeg', import.meta.url).href;

export default function Hero() {
  return (
    <section id="home" className="hero-section overflow-hidden rounded-[42px] border border-[#dcc7b7] bg-cream px-6 py-10 shadow-soft md:px-10 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="space-y-6 md:max-w-xl">
          <div className="flex flex-col gap-4 rounded-[28px] border border-[#ecd8c3] bg-white/80 p-4 shadow-soft sm:flex-row sm:items-center">
            <img src={logoImg} alt="Shingie Events logo" className="h-16 w-auto max-w-[200px] rounded-3xl border border-[#f0e7dd] bg-white/95 object-contain" />
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320] sm:text-base">Elegance, Simplicity, Perfection</p>
          </div>
          <p className="inline-flex rounded-full border border-[#9c5a63] bg-[#f4e8df] px-4 py-2 text-sm uppercase tracking-[0.32em] text-[#7b1320]">
            Elegant event services
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-burgundy sm:text-5xl">
            Creating beautiful moments, one event at a time.
          </h1>
          <p className="max-w-xl text-base leading-8 text-[#4a2a2f] sm:text-lg">
            {businessInfo.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#quote" className="inline-flex items-center justify-center rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]">
              Request a Quote
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-burgundy bg-white px-6 py-3 text-sm font-semibold text-burgundy transition hover:bg-[#f4e3dc]">
              View Our Services
            </a>
          </div>
          <a
            className="inline-flex items-center gap-3 text-sm font-semibold text-burgundy"
            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
              'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
            )}`}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f4e3dc] text-burgundy">💬</span>
            Contact via WhatsApp
          </a>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-[#e2d0c4] bg-[#f6ede4] shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1490806848065-8f5774f4b7c0?auto=format&fit=crop&w=1200&q=80"
            alt="Elegant event decor with candles and florals"
            className="h-[420px] w-full object-cover object-center"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#7b1320]/80 to-transparent px-6 py-6 text-white">
            <p className="text-sm uppercase tracking-[0.24em] text-[#f4e3dc]">Celebrations crafted with care</p>
            <h2 className="mt-2 text-2xl font-semibold leading-tight">Luxury styling for every milestone.</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
