import SEO from '../components/SEO';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <>
      <SEO title="Gallery" description="View event décor, catering, and cake styling examples from Shingie Events." />
      <section className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Gallery</p>
          <h1 className="text-3xl font-semibold text-burgundy sm:text-4xl">Beautiful event designs and celebration moments.</h1>
          <p className="max-w-3xl text-base leading-8 text-[#4a2a2f]">
            Explore curated examples of the décor, catering, event styling and cake designs we bring to life for weddings, birthday parties, corporate events, and milestone celebrations.
          </p>
        </div>
        <Gallery />
      </section>
    </>
  );
}
