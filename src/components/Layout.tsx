import type { ReactNode } from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-cream text-burgundy">
      <Navigation />
      <main className="space-y-16 px-6 py-8 md:px-8 md:py-10">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
