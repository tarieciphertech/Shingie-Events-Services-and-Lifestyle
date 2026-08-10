import { Link } from 'react-router-dom';
import { businessInfo } from '../data/siteConfig';

const logoImg = new URL('../assets/logo.jpeg', import.meta.url).href;

export default function Footer() {
  return (
    <footer className="border-t border-[#dcc7b7] bg-cream py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-[#4a2a2f] md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="Shingie Events logo" className="h-12 w-auto max-w-[180px] rounded-2xl border border-[#f0e7dd] bg-white/90 object-contain" />
          <span>{businessInfo.name}</span>
        </div>
        <div className="flex flex-wrap gap-4 text-[#7b1320]">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/request-quote">Quote</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
