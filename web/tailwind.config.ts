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
        'black-100': '#2B2C35',
      },
      backgroundImage: {
        'hero-bg': 'url(/hero-bg.png)',
      },
    },
  },
  plugins: [],
}
export default config
