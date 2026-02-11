/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.css"],
  darkMode: 'class', // enable class-based dark mode
  theme: {
    extend: {
      colors: {
        primary: '#1a7f3a',      // light theme primary
        secondary: '#f5f5f5',    // light background
        accent: '#3b7a57',       // light accent

        darkPrimary: '#0d3d1a',  // dark theme primary
        darkSecondary: '#1a1a1a',// dark background
        darkAccent: '#a3f7bf',   // dark accent
      },
      backgroundColor: {
        'dark-bg': '#1a1a1a',
        'dark-card': '#2a2a2a',
        'dark-btn': '#0d3d1a',
      },
      textColor: {
        'dark-text': '#e5e5e5',
        'dark-accent': '#a3f7bf',
      }
    },
  },
  plugins: [],
}
