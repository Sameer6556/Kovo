/** @type {import('tailwindcss').Config} */
// ============================================================================
//  Kovo — design tokens
//  White / minimal / modern. The legacy token *names* (richblack, yellow, …)
//  are kept so existing class names keep working, but their *values* now map
//  to a light, near-monochrome system:
//    richblack -> inverted neutral "ink" ramp  (900 = white … 5 = near-black)
//    yellow    -> primary "ink" accent         (50 = near-black button colour)
//    blue      -> the single brand accent      (a calm, modern indigo-blue)
// ============================================================================
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "system-ui", "sans-serif"],
      "edu-sa": ["Inter", "system-ui", "sans-serif"],
      mono: ["Roboto Mono", "monospace"],
    },
    colors: {
      white: "#ffffff",
      black: "#0a0a0b",
      transparent: "#ffffff00",

      // Neutral ink ramp (inverted): high numbers = light surfaces,
      // low numbers = dark text. Lets the old dark-theme classes read well
      // on a white background.
      richblack: {
        5: "#0a0a0b",   // primary text (near-black)
        25: "#18181b",
        50: "#27272a",
        100: "#3f3f46",  // secondary text
        200: "#52525b",
        300: "#71717a",  // muted text
        400: "#a1a1aa",  // placeholder / faint text
        500: "#c4c4cc",
        600: "#e4e4e7",  // strong border
        700: "#ededf0",  // hairline border / light divider
        800: "#f6f6f7",  // card / raised surface
        900: "#ffffff",  // page background
      },

      // Kept as a soft neutral-blue so legacy "richblue" usages stay subtle.
      richblue: {
        5: "#eef2ff",
        25: "#dbe3ff",
        50: "#b9c6ff",
        100: "#94a8ff",
        200: "#6f8bf5",
        300: "#4f6ee8",
        400: "#3a55d6",
        500: "#2f45b8",
        600: "#263a9c",
        700: "#1f2f80",
        800: "#192666",
        900: "#131d4d",
      },

      // The single brand accent — a calm modern indigo-blue.
      blue: {
        5: "#eef3ff",
        25: "#d6e2ff",
        50: "#adc4ff",
        100: "#83a4ff",
        200: "#5b85fb",
        300: "#3b6af2",
        400: "#2563eb",  // accent
        500: "#1d4ed8",
        600: "#1e40af",
        700: "#1b3a96",
        800: "#172f74",
        900: "#13265c",
      },

      // Growth / success — softened green that sits well on white.
      caribbeangreen: {
        5: "#ecfdf5",
        25: "#c9f7e3",
        50: "#8fe9c6",
        100: "#4fd6a4",
        200: "#16b981",
        300: "#0fa674",
        400: "#0d9166",
        500: "#0b7c57",
        600: "#096647",
        700: "#075138",
        800: "#053c2a",
        900: "#04291d",
      },

      // Warm accent kept for badges / ratings (no longer a primary colour).
      brown: {
        5: "#fff8eb",
        25: "#feecc7",
        50: "#fcd989",
        100: "#f9c349",
        200: "#f0ac26",
        300: "#d8901a",
        400: "#b87214",
        500: "#965a12",
        600: "#7a4912",
        700: "#653c14",
        800: "#3d2409",
        900: "#291705",
      },

      pink: {
        5: "#fff1f4",
        25: "#ffd6df",
        50: "#ffabbd",
        100: "#fb7d97",
        200: "#f25274",
        300: "#e03761",
        400: "#c62a52",
        500: "#a52146",
        600: "#871c3c",
        700: "#6b1531",
        800: "#4f0f24",
        900: "#340a18",
      },

      // Primary action / "ink" ramp — black buttons & active states.
      yellow: {
        5: "#f4f4f5",
        25: "#3f3f46",
        50: "#111113",  // primary action colour (near-black)
        100: "#000000",
        200: "#18181b",
        300: "#27272a",
        400: "#3f3f46",
        500: "#52525b",
        600: "#5b5b5b",
        700: "#444444",
        800: "#2d2d2d",
        900: "#141414",
      },

      "pure-greys": {
        5: "#fafafa",
        25: "#f4f4f5",
        50: "#ececee",
        100: "#e4e4e7",
        200: "#d4d4d8",
        300: "#a1a1aa",
        400: "#71717a",
        500: "#52525b",
        600: "#3f3f46",
        700: "#27272a",
        800: "#18181b",
        900: "#0a0a0b",
      },
    },
    extend: {
      maxWidth: {
        maxContent: "1260px",
        maxContentTab: "650px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,24,40,0.04), 0 1px 3px rgba(16,24,40,0.06)",
        card: "0 4px 16px rgba(16,24,40,0.06), 0 1px 2px rgba(16,24,40,0.04)",
      },
    },
  },
  plugins: [],
};



// ============================================
// TAILWIND EXPERIMENTS - DRAFT
// ============================================
// Uncomment to test:
// 
// Custom utilities I was trying:
// '.text-gradient': {
//   'background': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   '-webkit-background-clip': 'text',
//   '-webkit-text-fill-color': 'transparent',
// },
// '.glass': {
//   'background': 'rgba(255, 255, 255, 0.1)',
//   'backdrop-filter': 'blur(10px)',
//   'border': '1px solid rgba(255, 255, 255, 0.1)',
// },
// '.glass-dark': {
//   'background': 'rgba(0, 0, 0, 0.3)',
//   'backdrop-filter': 'blur(10px)',
//   'border': '1px solid rgba(255, 255, 255, 0.05)',
// },
// '.scrollbar-hide': {
//   '-ms-overflow-style': 'none',
//   'scrollbar-width': 'none',
//   '&::-webkit-scrollbar': { display: 'none' },
// },
// '.animate-float': {
//   'animation': 'float 6s ease-in-out infinite',
// },
// 
// Custom breakpoints I was considering:
// 'xs': '475px',
// '3xl': '1920px',
//
// Extended spacing:
// '128': '32rem',
// '144': '36rem',
//
// TODO: finalize color palette
// TODO: add custom animation keyframes
// TODO: test on different screen sizes
// TODO: clean up unused extensions
