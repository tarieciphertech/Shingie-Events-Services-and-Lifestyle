import { useMemo, useState } from 'react';
import { galleryItems } from '../data/siteConfig';

const categories = ['All', 'Events', 'Décor', 'Catering', 'Cakes'];

export default function Gallery() {
  const [selected, setSelected] = useState('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => (selected === 'All' ? galleryItems : galleryItems.filter((item) => item.category === selected)),
    [selected]
  );

  return (
    <section id="gallery" className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.32em] text-[#7b1320]">Gallery</p>
        <h2 className="text-3xl font-semibold text-burgundy sm:text-4xl">Beautiful events, décor, catering and cakes.</h2>
        <p className="max-w-2xl text-base leading-8 text-[#4a2a2f]">
          Browse a curated selection of event moments, venue styling, delicious catering setups, and signature cake designs.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setSelected(category)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              selected === category
                ? 'border-burgundy bg-burgundy text-cream'
                : 'border-[#d8c6b4] bg-white text-burgundy hover:border-burgundy hover:bg-[#f8ede4]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setLightbox(item.image)}
            className="group overflow-hidden rounded-[28px] border border-[#e7d7c6] bg-white shadow-soft transition hover:-translate-y-1"
          >
            <img src={item.image} alt={item.title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="space-y-2 p-5 text-left">
              <p className="text-sm uppercase tracking-[0.28em] text-[#7b1320]">{item.category}</p>
              <h3 className="text-lg font-semibold text-burgundy">{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox-backdrop fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 rounded-full border border-white bg-black/60 px-4 py-2 text-sm text-white"
          >
            Close
          </button>
          <div className="max-w-5xl overflow-hidden rounded-[28px] border border-white bg-white shadow-soft">
            <img src={lightbox} alt="Gallery preview" className="h-auto max-h-[85vh] w-full object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
