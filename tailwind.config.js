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
        "background-dark": "#050A17",
        "surface-dark": "#0B1220",
        "surface-muted": "#111827",
        ink: "#050816",
        "ink-soft": "#07111f",
        "ink-purple": "#101032",
        panel: "#0b1224",
        "panel-strong": "#111a31",
        line: "rgba(148, 163, 184, 0.18)",
        "copy-primary": "#f8fafc",
        "copy-secondary": "#cbd5e1",
        "copy-muted": "#94a3b8",
        "accent-cyan": "#22D3EE",
        "accent-blue": "#60A5FA",
        "accent-indigo": "#6366F1",
        "accent-purple": "#A855F7",
        "accent-magenta": "#E879F9",
        "accent-green": "#34D399",
        "accent-amber": "#FBBF24",
        'base-text': '#1F2937',
        'light-background': '#050A17',
        'neutral-section': '#E5E7EB',
        'dark-section': '#050A17',
        'cta-button': '#22D3EE',
        'cta-hover': '#FFFFFF',
        'cta-text': '#FFFFFF',
        'blue-accent': '#22D3EE',
      },
      boxShadow: {
        panel: "0 24px 80px rgba(2, 6, 23, 0.42)",
        "glow-cyan": "0 0 36px rgba(34, 211, 238, 0.24)",
        "glow-purple": "0 0 44px rgba(168, 85, 247, 0.24)",
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.22) 1px, transparent 0)",
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(34, 211, 238, 0.18), transparent 32%), radial-gradient(circle at 78% 8%, rgba(168, 85, 247, 0.24), transparent 30%), linear-gradient(135deg, #050816 0%, #07111f 48%, #101032 100%)",
      },
    },
  },
  plugins: [],
};
