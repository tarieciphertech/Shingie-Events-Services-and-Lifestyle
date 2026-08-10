import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Gallery from '../components/Gallery';
import QuoteForm from '../components/QuoteForm';
import ContactSection from '../components/ContactSection';
import TestimonialCard from '../components/TestimonialCard';
import { businessInfo, services, testimonials } from '../data/siteConfig';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO />
      <Hero />

      <section id="about" className="space-y-6 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-burgundy sm:text-4xl">Professional events designed with personal care.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4a2a2f]">
              Shingie Events Services and Lifestyle delivers premium event planning, décor, catering, and cake services for celebrations that feel elegant and effortless. We focus on thoughtful details, clear communication, and memorable experiences.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[#e8d8c4] bg-[#f8ede4] p-6">
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">What we value</p>
            <ul className="space-y-3 text-sm leading-7 text-[#4a2a2f]">
              <li>Professional service that puts your vision first.</li>
              <li>Creative styling with elegant, feminine details.</li>
              <li>Precise planning so every event runs smoothly.</li>
              <li>Beautiful presentations that leave a lasting impression.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="services" className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Services</p>
          <h2 className="text-3xl font-semibold text-burgundy sm:text-4xl">A complete suite of event services for every celebration.</h2>
          <p className="max-w-2xl text-base leading-8 text-[#4a2a2f]">
            From concept to final touches, Shingie provides the services you need to create a polished, memorable event.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} anchor="/request-quote" {...service} />
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-[32px] border border-[#dcc7b7] bg-[#fff6ee]/95 px-6 py-10 shadow-soft md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Why choose us</p>
            <h2 className="mt-3 text-3xl font-semibold text-burgundy sm:text-4xl">Trusted support for your event journey.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#4a2a2f]">
              We make it easy to plan and execute special moments with elegant styling, attentive coordination, and an unwavering focus on your celebration.
            </p>
          </div>
          <div className="space-y-4 rounded-[28px] border border-[#e5d5c3] bg-white p-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b1320]">What you can expect</p>
              <ul className="space-y-3 text-sm leading-7 text-[#4a2a2f]">
                <li>Tailored service for weddings, parties, and milestone occasions.</li>
                <li>Clear communication from first inquiry through event delivery.</li>
                <li>Elegant décor, beautiful catering presentation, and cake styling.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Testimonials</p>
          <h2 className="text-3xl font-semibold text-burgundy sm:text-4xl">What clients say about working with us.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <Gallery />
      <QuoteForm />
      <ContactSection />

      <section className="rounded-[32px] border border-[#dcc7b7] bg-burgundy px-6 py-10 text-cream shadow-soft md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.55fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-[#f1d8c8]">Ready to begin?</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">Your celebration deserves elegant planning and beautiful execution.</h2>
          </div>
          <div className="space-y-4">
            <a href="/request-quote" className="inline-flex w-full items-center justify-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-burgundy transition hover:bg-[#f0e4d8]">
              Request a Quote
            </a>
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
              )}`}
              className="inline-flex w-full items-center justify-center rounded-full border border-cream bg-transparent px-6 py-3 text-sm font-semibold text-cream transition hover:bg-white/10"
              target="_blank"
              rel="noreferrer"
            >
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
