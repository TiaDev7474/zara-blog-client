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
        primary: "#0540F2",
        secondary: "#3D79F2",
        background_dark: "#1F1F26",
        grey: "#D9D9D9",
        black: "#222222",
        white: "#f2f2f2"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('https://res.cloudinary.com/dvsrhlm8p/image/upload/v1702488701/he2dbhy1x5hiblgtmat4.jpg')"
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
  darkMode: 'class'
}
export default config
