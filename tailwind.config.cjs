/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			gridTemplateRows: {
				// Simple 18 row grid
				'18': 'repeat(18, minmax(0, 3rem))',
			},
			colors: {
				'calendar': '#20212A',
				'current-month' : '#DDDDDE',
				'another-month' : '#57575E',
				'modal': '#28292E',
				'divider': '#404040'
			}
		}
	},
	variants: {},
	plugins: [],
}
