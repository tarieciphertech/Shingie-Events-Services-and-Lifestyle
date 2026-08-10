import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  benefits: string[];
  image: string;
  anchor: string;
}

export default function ServiceCard({ title, description, benefits, image, anchor }: ServiceCardProps) {
  return (
    <article className="section-card group grid gap-6 overflow-hidden transition hover:-translate-y-1 hover:shadow-soft">
      <img src={image} alt={`${title} sample`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.02]" />
      <div className="space-y-4 px-1">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold text-burgundy">{title}</h3>
        </div>
        <p className="text-sm leading-7 text-[#5a373b]">{description}</p>
        <div className="space-y-2">
          {benefits.map((benefit) => (
            <p key={benefit} className="inline-flex items-center gap-3 text-sm text-[#4d2a2d]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f4e3dc] text-burgundy">✓</span>
              {benefit}
            </p>
          ))}
        </div>
        <Link
          to={anchor}
          className="inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]"
        >
          Request a Quote
        </Link>
      </div>
    </article>
  );
}
