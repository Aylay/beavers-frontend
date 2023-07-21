/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFF',
			black: '#000',
			jagger: '#380A51',
			rock: '#180325',
			jaguar: '#0B0211',
			bright: '#00FFDA',
			'bright-turquoise': '#00EECB',
			seance: '#8013BD',
			transparent: 'transparent',
			purple: '#760EB0',
			electric: '#A118F0'
		},
		fontFamily: {
			base: 'Montserrat, Arial, sans-serif',
			highlight: 'Cookie, Arial, sans-serif'
		},
		fontSize: {
			1: [
				'10rem',
				{
					lineHeight: '12rem',
					fontWeight: '700'
				}
			],
			'1-m': [
				'5.6rem',
				{
					lineHeight: '6rem',
					fontWeight: '700'
				}
			],
			2: [
				'7.5rem',
				{
					lineHeight: '9rem',
					fontWeight: '600'
				}
			],
			3: [
				'4rem',
				{
					lineHeight: '4.8rem',
					fontWeight: '600'
				}
			],
			4: ['3rem', '3rem'],
			5: [
				'2.3rem',
				{
					lineHeight: '2.76rem',
					fontWeight: '600'
				}
			],
			6: ['1.6rem', '2.4rem'],
			7: ['1.3rem', '1.6rem']
		},
		extend: {
			animation: {
				line: 'line 1s ease-in-out',
				title: 'title 2s linear 1s 1 forwards',
				bounceRight: 'bounceRight 1s infinite'
			},
			keyframes: {
				line: {
					from: { transform: 'scale(0)' },
					to: { transform: 'scale(1)' }
				},
				title: {
					'0%': { opacity: 0 },
					'85%': { opacity: 0.2 },
					to: {
						opacity: 0,
						left: '-20%'
					}
				},
				bounceRight: {
					'0%, 100%': {
						'animation-timing-function': 'cubic-bezier(0.8,0,1,1)',
						transform: 'translateX(-25%)'
					},
					'50%': { 'animation-timing-function': 'cubic-bezier(0,0,0.2,1)', transform: 'none' }
				}
			},
			flex: {
				2: '2 2 0%',
				3: '3 3 0%'
			}
		}
	},
	plugins: [require('tailwindcss-animated')]
};
