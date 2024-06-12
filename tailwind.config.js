/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ],
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#922f10",
          "secondary": "#175234",
          "accent": "#37cdbe",
          "neutral": "#302c2c",
          "base-100": "#f3f3f2",
          "base-200": "#e6e6e5",
          "base-300": "#d9d9d8",
          "base-content": "#999a99",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.6rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
        },

      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("@tailwindcss/typography"),
    require('daisyui'),
    require('taos/plugin'),
    function ({ addUtilities }) {
      addUtilities({
        '.custom-btn': {
          backgroundColor: 'transparent',
          border: 'none',
          padding: '0.5rem 1rem',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'transparent',
            color: 'currentColor',
          },
        },
      });
    },
  ],
};
