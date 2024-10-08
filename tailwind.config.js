/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--bg-color))',
        foreground: 'hsl(var(--text-color))',
        primary: {
          DEFAULT: 'hsl(var(--text-color))',
          foreground: 'hsl(var(--main-color))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--sub-color))',
          foreground: 'hsl(var(--sub-color))',
          background: 'hsl(var(--sub-alt-color))',
        },
        border: 'hsl(var(--main-color))',
        input: 'hsl(var(--main-color))',
        ring: 'hsl(var(--main-color))',
      },
      fontFamily: {
        logo: ['Lexend Deca', 'sans-serif'],
        sans: ['Roboto Mono', 'Vazirmatn', 'monospace'],
      },
    },
  },
  plugins: [],
};
