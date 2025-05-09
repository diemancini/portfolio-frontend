/** @type {import('tailwindcss').Config} */

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "computer-light-mode-svg": "var(--svg-background-computer-light-mode)",
        "computer-dark-mode-svg": "var(--svg-background-computer-dark-mode)",
        "computer-curvy-light-mode-svg":
          "var(--svg-background-computer-curvy-light-mode)",
        "computer-urvy-dark-mode-svg":
          "var(--svg-background-computer-urvy-dark-mode)",
        "button-light-mode-svg": "var(--svg-background-button-light-mode)",
      },
    },
  },
  plugins: [],
};
