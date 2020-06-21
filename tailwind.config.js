module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'sr-orange-1': '#FF4500',
        'sr-blue-1': '#00B2FB',
        'white-2': '#FFFAFA',
        'gray-2': '#9A9A9A',
      },
      spacing: {
        //4 = 16px(xs)
        //6 = 24px(s)
        //12 = 48px(m)
        //16 = 64px(L)
        //30 = 120px(xl)
        '30': '7.5rem', //XL
        '72': '18rem',
        '100': '25rem',
      },

      fontSize: {
        //title = 7xl(120px)
        //subtitle/H1 = 4xl(36px)
        //secondary = secondary(32px)
        //body = lg(18px)
        //small = sm(14px)
        secondary: '2rem', //32px,
        '7xl': '6rem',
      },
      fontWeight: {
        //light = light(300)
        //regular = normal(400)
        //medium = medium(500)
        //semibold = semibold(600)
        //black = black(900)
      },
      lineHeight: {
        //secondary = 10(40px)
        //body = 8(32px)
        //small = 4(16px)
        //button = slight(18px)
        '13': '3.375rem',
        slight: '1.125rem',
      },
      borderColor: [
        'responsive',
        'hover',
        'focus',
        'active',
        'focus-within',
        'group-focus',
      ],
      outline: ['focus', 'responsive', 'hover', 'focus-within'],
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {},
  plugins: [],
};
