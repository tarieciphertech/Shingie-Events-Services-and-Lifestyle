export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image: string;
}

export interface TestimonialItem {
  name: string;
  text: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Events' | 'Décor' | 'Catering' | 'Cakes';
  image: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  payment: {
    methods: string[];
    ecoCash: string;
  };
  social: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

export const businessInfo: SiteConfig = {
  name: 'Shingie Events Services and Lifestyle',
  tagline: 'Creating beautiful moments, one event at a time.',
  description:
    'From unforgettable celebrations to beautifully styled events, Shingie Events Services and Lifestyle brings your vision to life through professional planning, décor, catering, and cakes.',
  phone: '[Phone Number]',
  whatsapp: '[WhatsApp Number]',
  email: '[Email Address]',
  location: '[Event Location]',
  payment: {
    methods: ['Cash', 'EcoCash'],
    ecoCash: '[EcoCash Number]',
  },
  social: {
    instagram: '#',
    facebook: '#',
    tiktok: '#',
  },
};

export const services: ServiceItem[] = [
  {
    id: 'planning',
    title: 'Event Planning',
    description:
      'Designing every detail with care, Shingie coordinates your timeline, vendors, and guest experience for a seamless celebration.',
    benefits: [
      'Personalized event coordination',
      'Budget planning and timeline management',
      'Day-of support and vendor communication',
    ],
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'decor',
    title: 'Event Décor Setup',
    description:
      'Elevate your venue with elegant styling, bespoke décor elements, table settings, floral accents, and dreamy event atmospheres.',
    benefits: [
      'Custom theme concepts',
      'Luxurious table and venue styling',
      'Elegant floral and lighting design',
    ],
    image:
      'https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'catering',
    title: 'Catering',
    description:
      'Delicious menus crafted for weddings, parties, and special occasions, with elegant presentation and attentive service.',
    benefits: [
      'Fresh, seasonal food options',
      'Custom menu design for every event',
      'Professional service team available',
    ],
    image:
      'https://images.unsplash.com/photo-1541544180-d4bab3232625?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cakes',
    title: 'Cakes',
    description:
      'Custom cakes made to celebrate birthdays, weddings, and milestones with beautiful design and delicious flavors.',
    benefits: [
      'Bespoke cake styling',
      'Flavor combinations for every event',
      'Decorative finishing touches',
    ],
    image:
      'https://images.unsplash.com/photo-1528756514091-dee1cc3f8f1a?auto=format&fit=crop&w=1200&q=80',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    name: 'Client One',
    text: 'Shingie transformed our celebration into a beautiful, stress-free event. Every detail felt personal and elegant.',
  },
  {
    name: 'Client Two',
    text: 'The décor and food were absolutely stunning. Guests are still talking about the experience.',
  },
  {
    name: 'Client Three',
    text: 'From planning to execution, the team was thoughtful, professional, and attentive. Highly recommended.',
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'event-1',
    title: 'Elegant ceremony styling',
    category: 'Events',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'decor-1',
    title: 'Soft décor details',
    category: 'Décor',
    image:
      'https://images.unsplash.com/photo-1486304873000-235643847519?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'catering-1',
    title: 'Beautiful catered buffet',
    category: 'Catering',
    image:
      'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cakes-1',
    title: 'Custom celebration cake',
    category: 'Cakes',
    image:
      'https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'event-2',
    title: 'Luxury party setting',
    category: 'Events',
    image:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'decor-2',
    title: 'Elegant floral tablescape',
    category: 'Décor',
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80',
  },
];

export const quoteOptions = {
  eventTypes: ['Wedding', 'Birthday', 'Anniversary', 'Corporate Event', 'Private Party', 'Other'] as const,
  services: ['Event Planning', 'Décor', 'Catering', 'Cakes', 'Multiple Services'] as const,
};
