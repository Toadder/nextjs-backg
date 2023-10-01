import type { Config } from 'tailwindcss';

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const config: Config = {
	future: {
		hoverOnlyWhenSupported: true
	},
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors: {
			white: colors.white,
			black: colors.black,
			transparent: colors.transparent,
			blue: '#286efa',
			brown: '#3a3a3a',
			grey: '#e4e4e4',
			orange: '#f9be07'
		},
		extend: {
			scale: {
				80: '.8'
			},
			fontFamily: {
				'muller-narrow': ['var(--font-muller-narrow)'],
				'open-sans': ['var(--font-open-sans)']
			},
			lineHeight: {
				DEFAULT: '1.25'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease'
			},
			transitionDuration: {
				DEFAULT: '200ms',
				400: '400ms',
				600: '600ms'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			},
			boxShadow: {
				primary: '0px 5px 10px 4px rgba(0, 0, 0, 0.2)'
			},
			keyframes: {
				fade: {
					from: { opacity: '0%' },
					to: { opacity: '100%' }
				}
			},
			animation: {
				fade: 'fade .6s ease'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, addUtilities, theme }: any) => {
			addComponents({
				'.btn-primary': {
					textAlign: 'center',
					color: theme('colors.brown'),
					backgroundColor: theme('colors.orange'),
					fontWeight: '600',
					transition: 'background-color .3s ease 0s',
					borderRadius: '1.5625rem',
					textTransform: 'uppercase',
					cursor: 'pointer',
					fontSize: '1.125rem',
					padding: '0.75rem 2.5rem',
					display: 'inline-block',
					lineHeight: 1,
					'&:hover': {
						backgroundColor: '#f9c72c'
					},
					'@media (max-width: 48em)': {
						fontSize: '1rem'
					}
				},

				'.btn-secondary': {
					textAlign: 'center',
					color: theme('colors.white'),
					backgroundColor: theme('colors.brown'),
					fontWeight: '600',
					transition: 'background-color .3s ease 0s',
					borderRadius: '1.5625rem',
					cursor: 'pointer',
					textTransform: 'uppercase',
					fontSize: '1.125rem',
					padding: '0.75rem 2.5rem',
					display: 'inline-block',
					lineHeight: 1,
					'&:hover': {
						backgroundColor: '#2e2e2e'
					},
					'@media (max-width: 48em)': {
						fontSize: '1rem'
					}
				},

				'.slider-pagination': {
					padding: ' 0 1rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexWrap: 'wrap',
					gap: '0.375rem 1rem',
					'@media (max-width: 48em)': {
						gap: '0.375rem 0.5rem'
					},
					'& > *': {
						width: '0.75rem',
						height: '0.75rem',
						borderRadius: '50%',
						backgroundColor: theme('colors.brown'),
						transition: 'opacity .4s ease 0s',
						'@media (max-width: 48em)': {
							width: '0.625rem',
							height: '0.625rem'
						}
					}
				}
			});

			addUtilities({
				'.section': {
					padding: '2.5rem 0',
					'@media (max-width: 64em)': {
						padding: '2rem 0'
					},
					'@media (max-width: 48em)': {
						padding: '1.5rem 0'
					}
				},

				'.container': {
					width: '100%',
					margin: '0 auto',
					paddingLeft: '16px',
					paddingRight: '16px',
					maxWidth: '73.25rem'
				},

				'.container-wide': {
					width: '100%',
					margin: '0 auto',
					paddingLeft: '16px',
					paddingRight: '16px',
					maxWidth: '98.875rem'
				},

				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},

				'.image-like-bg': {
					objectFit: 'cover',
					objectPosition: 'center',
					pointerEvents: 'none'
				}
			});
		})
	]
};
export default config;
