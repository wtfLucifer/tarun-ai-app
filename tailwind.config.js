module.exports = {
  // Specify files to scan for Tailwind classes.
  // This glob pattern is standard and should work in most environments.
  content: ['./public/index.html', './src/**/*.js', './src/**/*.jsx'], // MODIFIED THIS LINE AGAIN
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