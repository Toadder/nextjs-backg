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
				protocol: 'https',
				hostname: process.env.WORDPRESS_SITE_HOST,
				port: '',
				pathname: '/wp-content/**'
			}
		]
	},

	async headers() {
		return [
			{
				source: '/api/revalidate',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{
						key: 'Access-Control-Allow-Origin',
						value: process.env.WORDPRESS_SITE_URL
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET'
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Origin'
					}
				]
			}
		]
	}
}

module.exports = withBundleAnalyzer(nextConfig)
