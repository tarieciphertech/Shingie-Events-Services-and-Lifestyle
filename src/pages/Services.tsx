import SEO from '../components/SEO';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/siteConfig';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Discover event planning, décor, catering and cake services from Shingie Events." />
      <section className="space-y-6">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Services</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Premium event services tailored for every occasion.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Shingie Events offers complete event solutions from planning and décor to catering and specialty cakes. Every package is designed to showcase your celebration with style and professionalism.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} anchor="/request-quote" {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
