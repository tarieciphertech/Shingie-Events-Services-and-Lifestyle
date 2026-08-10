export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: '#7B1320',
        cream: '#F6EFE7',
        champagne: '#E5CBA7',
        gold: '#B8946F',
        soft: '#9A5C63',
        ink: '#1D1512',
      },
      boxShadow: {
        soft: '0 16px 50px rgba(123, 19, 32, 0.12)',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
