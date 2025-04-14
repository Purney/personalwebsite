/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'base-text': '#1F2937',
        'light-background': '#F9FAFB',
        'neutral-section': '#E5E7EB',
        'dark-section': '#1F2937',
        'cta-button': '#F97316',
        'cta-hover': '#EA580C',
        'cta-text': '#FFFFFF',
        'blue-accent': '#2563EB',
      },
    },
  },
  plugins: [],
};
