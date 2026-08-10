interface TestimonialCardProps {
  name: string;
  text: string;
}

export default function TestimonialCard({ name, text }: TestimonialCardProps) {
  return (
    <article className="section-card space-y-4 bg-white/95">
      <p className="text-base leading-8 text-[#4a2a2f]">“{text}”</p>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#7b1320]">{name}</p>
    </article>
  );
}
