/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
	poweredByHeader: false,

	env: {
		WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL,
		GTAG_ID: process.env.GTAG_ID,
		YM_ID: process.env.YM_ID,
		EMAIL_USER: process.env.EMAIL_USER,
		EMAIL_PASSWORD: process.env.EMAIL_PASSWORD
	},

	webpack(config, { webpack }) {
		// Graphql Optimization
		config.plugins.push(
			new webpack.DefinePlugin({
				'globalThis.__DEV__': process.env.NODE_ENV === 'development'
			})
		)
		return config
	},

	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: process.env.WORDPRESS_SITE_HOST,
				port: '',
				pathname: '/wp-content/uploads/**'
			}
		]
	},
}

module.exports = withBundleAnalyzer(nextConfig)
