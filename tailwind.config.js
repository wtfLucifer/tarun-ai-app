module.exports = {
  // Specify files to scan for Tailwind classes.
  // This simplified glob pattern is intended to bypass compilation issues.
  content: [
    './public/index.html',
    './src/App.js',
    './src/components/Header.jsx',
    './src/components/Sidebar.jsx',
    './src/components/GeminiBot.jsx',
    // Add other JS/JSX files here that use Tailwind classes if necessary
  ],
  theme: {
    extend: {
      // Custom font families defined here.
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
        bangers: ['Bangers', 'cursive'],
      },
    },
  },
  plugins: [], // No additional Tailwind plugins used in this setup.
};