const colors = {
  primary: {
    '40': '#bdacd3',
    '70': '#8c6db2',
    '500': '#5b2f91',
    '600': '#351f65',
  },
  mango: '#fcd141',
  'primary-blue': '#005c95',
  'primary-hover': '#241a49',
  blackish: '#0a0a0a',
  white: '#ffffff',
  'off-white': '#f1f4f8',
  'danger-hover': '#e32626',
  coral: '#ee543e',
  black: '#000000',
  'danger-bg': '#fce8e8',
  'baseline-blue': '#27accd',
  blue: {
    '40': '#a9deeb',
    '70': '#68c5dc',
  },
  teal: '#008080',
  'secondary-hover': '#00325e',
  warning: '#eda333',
  success: '#40700b',
  info: '#0496b8',
  danger: '#ff0000',
  'gray-default': '#96999c',
  disabled: '#d9d9d6',
  'info-hover': '#007c99',
  'success-hover': '#2d5303',
};

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/**/*.ts',
      'src/**/*.tsx',
    ]
  },
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1366px',
      // => @media (min-width: 1024px) { ... }

      xl: '1660px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      effra: ['Effra', 'Arial', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      chevron: '.1rem',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      8: '8px',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  variants: {},
  plugins: [],
};
