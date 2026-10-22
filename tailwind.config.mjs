/**
 * Genera un color de borde basado en el alfa del tema.
 *
 * Tailwind llama a las funciones de color con dos formas distintas:
 *   - Sin modificador (`border-border`):
 *     { opacityVariable: '--tw-border-opacity', opacityValue: 'var(--tw-border-opacity, 1)' }
 *   - Con modificador (`border-border/70`):
 *     { opacityValue: '0.7' }
 *
 * `opacityValue` SIEMPRE viene definido, por lo que la única señal fiable para
 * saber si hay modificador de opacidad es la presencia de `opacityVariable`.
 * Sin modificador se usa el alfa del tema; con modificador, el valor pedido.
 */
const borderColor = (alphaToken) => ({ opacityVariable, opacityValue }) => {
  // Sin modificador (o con el plugin `borderOpacity` desactivado) se usa el
  // alfa del tema; con modificador explícito, el valor solicitado.
  const alpha = opacityVariable || !opacityValue ? `var(${alphaToken})` : opacityValue;
  return `rgb(var(--border-rgb) / ${alpha})`;
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Los tokens CSS se declaran como canales RGB espacio-separados para que
        // Tailwind pueda inyectar el modificador de opacidad vía <alpha-value>
        // (p. ej. `bg-background/90`, `text-primary-muted/80`).
        background: 'rgb(var(--bg-base) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--bg-surface) / <alpha-value>)',
          elevated: 'rgb(var(--bg-surface-elevated) / <alpha-value>)',
          hover: 'rgb(var(--bg-surface-hover) / <alpha-value>)',
        },
        border: {
          // Sin modificador de opacidad se usa el alfa del tema; con modificador
          // (`border-border/70`), el valor solicitado.
          DEFAULT: borderColor('--border-subtle-alpha'),
          hover: borderColor('--border-hover-alpha'),
          active: borderColor('--border-active-alpha'),
        },
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
          hover: 'rgb(var(--accent-hover) / <alpha-value>)',
          muted: 'rgb(var(--accent) / 0.15)',
        },
        primary: {
          DEFAULT: 'rgb(var(--text-primary) / <alpha-value>)',
          muted: 'rgb(var(--text-secondary) / <alpha-value>)',
          faint: 'rgb(var(--text-tertiary) / <alpha-value>)',
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
