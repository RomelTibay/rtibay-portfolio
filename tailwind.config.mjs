/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        void: "rgb(var(--void-c) / <alpha-value>)",
        paper: "rgb(var(--paper-c) / <alpha-value>)",
        line: "rgb(var(--line-c) / <alpha-value>)",
        ink: "rgb(var(--ink-c) / <alpha-value>)",
        chalk: "rgb(var(--chalk-c) / <alpha-value>)",
        accent: "rgb(var(--accent-c) / <alpha-value>)",
        signal: "rgb(var(--signal-c) / <alpha-value>)",
        muted: "rgb(var(--muted-c) / <alpha-value>)",
        purple: "var(--purple)",
        lime: "var(--lime)",
      },
      fontFamily: {
        sans: ["Space Grotesk Variable", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono Variable", "ui-monospace", "monospace"],
      },
      boxShadow: {
        hard: "5px 5px 0 0 var(--accent)",
        "hard-sm": "3px 3px 0 0 var(--accent)",
        "hard-lg": "9px 9px 0 0 var(--accent)",
        glow: "0 0 24px -4px var(--accent)",
        "glow-signal": "0 0 24px -4px var(--signal)",
        "glow-lime": "0 0 24px -4px var(--lime)",
        "glow-purple": "0 0 24px -4px var(--purple)",
        // white hover variants (pointer hover → white, not cyan)
        "hard-white": "5px 5px 0 0 var(--chalk)",
        "hard-white-sm": "3px 3px 0 0 var(--chalk)",
        "glow-white": "0 0 24px -4px var(--chalk)",
      },
    },
  },
  plugins: [],
};
