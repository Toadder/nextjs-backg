/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

// FIXME: В ПРОДАКШЕНЕ УБРАТЬ IMAGES И HEADERS
const nextConfig = {
	poweredByHeader: false,
	env: {
		WORDPRESS_SITE_URL: process.env.WORDPRESS_SITE_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'zheka2y5.beget.tech',
				port: '',
				pathname: '/**'
			}
		]
	},
	async headers() {
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
		];
	}
};

module.exports = withBundleAnalyzer(nextConfig);
