/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'main':"#fff",
        'dark-main':"#0F172A",
        'primary':'#000',
        'dark-primary':'#e2e8f0',
        'border':'#edeef3',
        'dark-border':'#cbd5e11a',
        'option':'#334155',
        'dark-option':'#94a3b8',
        'active':"#3d50f5",
        "dark-active":"#2e2b5f"
      },
      height: {
        fix: "calc(100vh - 64px)",
      },
    },
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xl2: "1410px",
      "2xl": '1536px',
      "3xl": "1920px",
    },
    
  },
  darkMode: 'class',
  plugins: [],
};
