/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'main':"#E4EBFA",
        'dark-main':"#0F172A",
        'primary':'#000',
        'dark-primary':'#e2e8f0',
        'border':'#bbb',
        'dark-border':'#cbd5e11a',
        'option':'#334155',
        'dark-option':'#94a3b8',
        "active":"#3d50f5",
        'dark-active':"#1c2995",

        // # Colores Kanban
        'main-purple':'#635fc7',
        'main-purple-hover':'#a8a4ff',
        'black':'#000112',
        'very-dark-grey':'#20212c',
        'dark-grey':'#2b2c37',
        'lines-dark':'#3e3f4e',
        'medium-grey':'#828fa3',
        'lines-light':'#e4ebfa',
        'light-grey':'#f4f7fd',
        'light-red':'#ea5555',
        'light-red-hover':'#ff9898',
        
      },
      height: {
        fix: "calc(100vh - 64px)",
        half: "calc(100vh /2)"
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
