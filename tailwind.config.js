/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#050507',
          panel: '#0c0c12',
          line: '#1c1c24',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dim: '#6d28d9',
        },
        ink: {
          DEFAULT: '#e9e9ee',
          muted: '#87879a',
          faint: '#4b4b5c',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'accent-fade': 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
    },
  },
  plugins: [],
}
