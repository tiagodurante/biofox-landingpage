import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bio-green': '#016066',
        golden: '#B9A576',
      },
      fontFamily: {
        sans: ['var(--font-cairo)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config
