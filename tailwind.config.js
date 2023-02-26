/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'background': 'background 30s ease infinite'
      },
      keyframes: {
        'background': {
          '0%, 30%, 100%': {
            'background-image': 'url(https://www.delta-engineering.com/wp-content/uploads/2015/12/dreamstime_xl_36595684.jpg)',
          },
          '33%, 63%': {
            'background-image': 'url(https://media.defense.gov/2011/Jul/08/2000239695/2000/2000/0/110607-F-MI555-007.JPG)',
          },
          '66%, 97%': {
            'background-image': 'url(https://alis.alberta.ca/media/697220/avionics-technician.jpg)',
          }
        }
      },
    },
  },
  plugins: [],
}
