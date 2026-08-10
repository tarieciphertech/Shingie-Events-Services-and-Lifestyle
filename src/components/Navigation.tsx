import { NavLink, Link } from 'react-router-dom';
import { siteNav } from '../data/navigation';
import { businessInfo } from '../data/siteConfig';
import { useState } from 'react';

const logoImg = new URL('../assets/logo.jpeg', import.meta.url).href;

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#dcc7b7] bg-cream/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-ink" to="/">
          <img src={logoImg} alt="Shingie Events logo" className="h-10 w-auto max-w-[160px] rounded-2xl border border-[#f0e7dd] bg-white/90 object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteNav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? 'text-burgundy' : 'text-[#7b1320] hover:text-burgundy'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
              'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
            )}`}
            className="rounded-full border border-burgundy bg-burgundy px-4 py-2 text-sm font-semibold text-cream transition hover:bg-[#5f0c13]"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-burgundy text-burgundy md:hidden"
        >
          <span className="text-2xl">{open ? '✕' : '☰'}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#dcc7b7] bg-cream px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {siteNav.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-burgundy"
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
                'Hello Shingie Events Services and Lifestyle, I would like to enquire about your services.'
              )}`}
              className="inline-flex items-center justify-center rounded-full border border-burgundy bg-burgundy px-4 py-3 text-sm font-semibold text-cream"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
