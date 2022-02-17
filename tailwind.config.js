module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        expand: 'expand .1s ease-in-out 1',
        'bounce-once': 'bounce-once 0.9s ease both',
        'flip-gray':
          ' flip-gray .6s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 forwards',
        'flip-green':
          ' flip-green .6s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 forwards',
        'flip-yellow':
          ' flip-yellow .6s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1 forwards',
        shake: 'shake .1s ease-in-out 5',
        'slide-in-bck-bottom':
          'slide-in-bck-bottom 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-out-bck-top':
          'slide-out-bck-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      },
      animationDelay: {
        450: '450ms',
      },
      keyframes: {
        'bounce-once': {
          '26%': {
            transform: 'translateY(-40%)',
            'animation-timing-function': 'ease-in-out',
          },
          '56%': {
            transform: 'translateY(-20%)',
            'animation-timing-function': 'ease-in',
          },
          '75%': {
            transform: 'translateY(-10%)',
            'animation-timing-function': 'ease-in',
          },
          '87%': {
            transform: 'translateY(-5%)',
            'animation-timing-function': 'ease-in',
          },
          '95%': {
            transform: 'translateY(-3%)',
            'animation-timing-function': 'ease-in',
          },
          '0%,44%,67%,82%,90%,100%': {
            transform: 'translateY(0)',
            'animation-timing-function': 'ease-out',
          },
        },
        expand: {
          '0%': {
            transform: 'scale(1.1);',
          },
          '100%': {
            transform: 'scale(1);',
          },
        },
        'flip-gray': {
          '0%': { transform: 'rotateX(0)' },
          '50%': { 'border-width': 0, transform: 'rotateX(-90deg)' },
          '100%': {
            'background-color': '#787c7e',
            'border-width': 0,
            color: '#ffffff',
            transform: 'rotateX(0)',
          },
        },
        'flip-green': {
          '0%': { transform: 'rotateX(0)' },
          '50%': { 'border-width': 0, transform: 'rotateX(-90deg)' },
          '100%': {
            'background-color': '#6aaa64',
            'border-width': 0,
            color: '#ffffff',
            transform: 'rotateX(0)',
          },
        },
        'flip-yellow': {
          '0%': { transform: 'rotateX(0)' },
          '50%': { 'border-width': 0, transform: 'rotateX(-90deg)' },
          '100%': {
            'background-color': '#c9b458',
            'border-width': 0,
            color: '#ffffff',
            transform: 'rotateX(0)',
          },
        },
        shake: {
          '0%': {
            transform: 'translateX(-1%)',
          },

          '100%': {
            transform: 'translateX(1%)',
          },
        },
        'slide-in-bck-bottom': {
          '0%': {
            transform: 'translateZ(700px) translateY(100px)',
            opacity: '0',
          },
          to: {
            transform: 'translateZ(0) translateY(0)',
            opacity: '1',
          },
        },
        'slide-out-bck-top': {
          '0%': {
            transform: 'translateZ(1) translateY(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateZ(-1100px) translateY(-100px)',
            opacity: '0',
          },
        },
      },
      screens: {
        tall: { raw: '(min-height: 800px)' },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
