/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './components/**/*.{ts,tsx}', './index.tsx'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      colors: {
        canvas: '#FFFFFF',
        ink: '#111111',
        linen: '#F4F1EE',
        stone: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          800: '#292524',
          900: '#1C1917',
        },
      },
      letterSpacing: {
        editorial: '0.2em',
      },
    },
  },
};
