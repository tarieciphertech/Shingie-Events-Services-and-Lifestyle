import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="Page not found on Shingie Events Services and Lifestyle." />
      <section className="space-y-6 rounded-[32px] border border-[#dcc7b7] bg-white/95 px-6 py-10 shadow-soft md:px-10">
        <div className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">404</p>
          <h1 className="text-4xl font-semibold text-burgundy sm:text-5xl">Page not found</h1>
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#4a2a2f]">
            The page you are looking for does not exist. Use the navigation to return to the homepage or view our services.
          </p>
          <a href="/" className="inline-flex rounded-full bg-burgundy px-6 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]">
            Go home
          </a>
        </div>
      </section>
    </>
  );
}
