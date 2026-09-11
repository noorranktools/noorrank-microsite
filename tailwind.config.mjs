/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0a0a0f",
          800: "#101018",
          700: "#16161f",
          600: "#1d1d2a",
        },
        bone: {
          50: "#f7f5f0",
          100: "#ece8df",
          300: "#c9c4b6",
          500: "#8f8a7c",
        },
        signal: {
          DEFAULT: "#d4ff3f",
          dim: "#a9cc2f",
        },
        accent: {
          DEFAULT: "#5b8cff",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        content: "72rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      screens: {
        // Wide, landscape-ish screens get true 16:9 slides.
        deck: { raw: "(min-width: 900px) and (min-aspect-ratio: 5/4)" },
      },
    },
  },
  plugins: [],
};
