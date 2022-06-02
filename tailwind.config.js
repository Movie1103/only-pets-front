module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#007aff',
        cyan: '#3aa2e5',
        purple: '#7361e0',
        pink: '#ff49db',
        orange: '#ff9922',
        green: '#13ce66',
        yellow: '#ffed4b',
        'gray-dark': '#5a5a6b',
        gray: '#b4b4b4',
        'gray-light': '#d3dce6',
        black: '#000000',
        // slate: {
        //   50: 'rgb(248, 250, 252)',
        //   100: 'rgb(241, 245, 249)',
        //   200: 'rgb(226, 232, 240)',
        //   300: 'rgb(203, 213, 225)',
        //   400: 'rgb(148, 163, 184)',
        //   500: 'rgb(100, 116, 139)',
        //   600: 'rgb(71, 85, 105)',
        //   700: 'rgb(51, 65, 85)',
        //   800: 'rgb(30, 41, 59)',
        //   900: 'rgb(15, 23, 42)',
        // },
      },
      fontFamily: {
        Prompt: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio'),
  ],
};
