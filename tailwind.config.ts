import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F5F0E8',
        surface: '#EDE8DC',
        'surface-border': '#D9D3C4',
        ink: '#1A1A1A',
        muted: '#5A5750',
        olive: '#6B6B4A',
        amber: '#C4963A',
        cta: '#F0EAD8',
      },
      fontFamily: {
        display: ['"Times New Roman"', 'Times', 'serif'],
        ui: ['Helvetica', 'Arial', 'sans-serif'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '999px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
