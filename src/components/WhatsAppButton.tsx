import { businessInfo } from '../data/siteConfig';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
        'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
      )}`}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-soft transition hover:bg-[#1da85a] md:bottom-8 md:right-8"
      aria-label="Contact on WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}
