import type { Config } from 'tailwindcss'
import { boxShadow } from 'zvijude/funcs/twTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/zvijude/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        mobile: { min: '0px', max: '560px' },
      },

      boxShadow,
      borderRadius: {
        DEFAULT: '5px',
      },
      colors: {
        solid: '#e5194d',
        soft: '#D6D1F6',
        softy: '#F5F5F5',
        dark: '#232032',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      size: {
        4.5: '1.15rem',
        3.7: '15px',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      fontSize: {
        200: ['clamp(0.8rem, calc(0.76rem + 0.08vw), 0.9rem)', { lineHeight: '1.2' }],
        300: ['clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem)', { lineHeight: '1.3' }],
        400: ['clamp(1rem, calc(0.96rem + 0.2vw), 1.1rem)', { lineHeight: '1.4' }],
        500: ['clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem)', { lineHeight: '1.5' }],
        600: ['clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem)', { lineHeight: '1.5' }],
        700: ['clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem)', { lineHeight: '1' }],
        800: ['clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem)', { lineHeight: '1' }],
        900: ['clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem)', { lineHeight: '1' }],
        1000: ['clamp(3rem, calc(1.85rem + 4.74vw), 5.52rem)', { lineHeight: '1' }],
      },
      brightness: {
        25: '.25',
        65: '.65',
        70: '.70',
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.bg-img': {
          position: 'relative',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          width: '100%',
          // backgroundAttachment: 'fixed',
          // borderImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) fill 1',
        },
        '.bg-overlay': {
          borderImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) fill 1',
        },
        '.bg-overlay-r': {
          borderImage: 'linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)) fill 1',
        },
        '.abs-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
        '.abs-center-y': {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          scrollbarWidth: 'none',
          paddingBottom: '6px',
        },
      })
    },
  ],
}
export default config
