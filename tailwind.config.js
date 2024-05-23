/** @type {import('tailwindcss').Config} */
/**@type {import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')}**/
/**@type {import url('https://fonts.googleapis.com/css2?family=Italiano&display=swap')}**/

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', 'sans-serif', 'Italiano'],
			},
			gridTemplateColumns: {
				'70/30': '70% 28%',
			},
		},
	},
	plugins: [],
};
