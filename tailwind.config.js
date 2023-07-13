/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Josefin Sans"', 'ui-sans-serif', 'system-ui'],
    },

    extend: {
      scale: {
        '-100': '-1',
      },
      backgroundImage: {
        'my_bg_image': "url('/asserts/Hero.png')",
        'my_bg_circle': "url('/asserts/Circle.png')",
        'my_bg_shape': "url('/asserts/Shape.png')",
        'my_bg_vector': "url('/src/asserts/Vector.png')"


      },
      colors: {
        'login-blue': '#128C76',
        'register-oraange': '#F56B8D'
      },

    },
  },
  plugins: [],
}
