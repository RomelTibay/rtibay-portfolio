/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        void: "var(--void)",
        paper: "var(--paper)",
        line: "var(--line)",
        ink: "var(--ink)",
        accent: "var(--accent)",
        purple: "var(--purple)",
        lime: "var(--lime)",
        signal: "var(--signal)",
        muted: "var(--muted)",
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
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-50%,0,0)" },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [],
};
