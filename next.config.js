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
		// FIXME: Delete in production mode
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'zheka2vo.beget.tech',
				port: '',
				pathname: '/**'
			}
		]
	},
	async headers() {
		// FIXME: Delete in production mode
		return [
			{
				// matching all API routes
				source: '/api/revalidate',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{
						key: 'Access-Control-Allow-Origin',
						value: '*'
					},
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,DELETE,PATCH,POST,PUT'
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
