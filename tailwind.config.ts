import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        blink: 'blink 0.8s steps(1) infinite',
        fadeInBrighten: 'fadeInBrighten 2s ease-in-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { borderColor: 'white' },
          '50%': { borderColor: 'transparent' },
        },
        fadeInBrighten: {
          '0%': {
            opacity: '0',
            filter: 'brightness(90%)'
          },
          '100%': {
            opacity: '1',
            filter: 'brightness(100%)'
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}

export default config
