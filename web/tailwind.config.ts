import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': {
          DEFAULT: '#2B59FF',
          100: '#F5F8FF',
        },
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.03)',
          100: 'rgba(59,60,152,0.02)',
        },
        'black-100': '#2B2C35',
        grey: '#747A88',
      },
      backgroundImage: {
        'hero-bg': 'url(/hero-bg.png)',
        pattern: 'url(/pattern.png)',
      },
    },
  },
  plugins: [],
}
export default config
