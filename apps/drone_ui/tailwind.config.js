const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d2d2d', // Main background color
        secondary: '#9e9e9e', // Panel and text color
        softBlue: '#8cc8e8', // Accent and highlight color
        lightBlue: '#74b3e7', // Active indicator, button color
        white: '#ffffff', // Text and elements like drones
      },
    },
  },
  plugins: [],
};
