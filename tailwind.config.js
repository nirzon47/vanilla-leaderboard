/** @type {import('tailwindcss').Config} */
export default {
	content: ['*.html'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#b1e5f2',

					secondary: '#ffedd5',

					accent: '#f3f4f6',

					neutral: '#272635',

					'base-100': '#e8e9f3',

					info: '#3abff8',

					success: '#36d399',

					warning: '#fbbd23',

					error: '#f87272',
				},
			},
		],
	},
	plugins: [require('daisyui')],
}
