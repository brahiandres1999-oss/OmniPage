/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--bg-base)',
        surface: {
          DEFAULT: 'var(--bg-surface)',
          elevated: 'var(--bg-surface-elevated)',
          hover: 'var(--bg-surface-hover)',
        },
        border: {
          DEFAULT: 'var(--border-subtle)',
          hover: 'var(--border-hover)',
          active: 'var(--border-active)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: '#3b82f6',
          muted: 'rgba(37, 99, 235, 0.15)',
        },
        primary: {
          DEFAULT: 'var(--text-primary)',
          muted: 'var(--text-secondary)',
          faint: 'var(--text-tertiary)',
        },
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
