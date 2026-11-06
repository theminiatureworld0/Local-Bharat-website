/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Local Bharat Earthy Terracotta & Sand Palette
        bharat: {
          DEFAULT: '#B5532F',
          hover: '#D9743F',
          pressed: '#7A2E17',
          accent: '#D8A97C',
          light: '#F8EFE2',
          sand: '#F3E9DC',
          card: '#FBF6EE',
          border: '#E4D3BD',
          ink: '#2E1A12',
          muted: '#7B5C4B',
          success: '#5E7F6E',
        },
        parchment: {
          DEFAULT: '#F3E9DC',
          light: '#FBF6EE',
          warm: '#F3E9DC',
          dark: '#E8DBC9',
          border: '#E4D3BD',
          card: '#FBF6EE',
        },
        ink: {
          DEFAULT: '#2E1A12',
          deep: '#1D100B',
          soft: '#42281E',
          muted: '#7B5C4B',
          subtle: '#9A7E6F',
        },
        bronze: {
          DEFAULT: '#B5532F',
          hover: '#D9743F',
          dark: '#7A2E17',
          light: '#F8EFE2',
          accent: '#D8A97C',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Poppins"', '"Inter"', 'Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'parchment-soft': '0 2px 10px rgba(46, 26, 18, 0.05)',
        'parchment-card': '0 4px 18px rgba(46, 26, 18, 0.08)',
        'parchment-hover': '0 10px 28px rgba(46, 26, 18, 0.12)',
      },
    },
  },
  plugins: [],
};
