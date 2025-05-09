/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "computer-light-mode-svg": "var(--svg-background-computer-light-mode)",
        "computer-dark-mode-svg": "var(--svg-background-computer-dark-mode)",
        "button-light-mode-svg": "var(--svg-background-button-light-mode)",
        "button-dark-mode-svg": "var(--svg-background-button-dark-mode)",
      },
    },
  },
  plugins: [],
};
