/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
	poweredByHeader: false
};

module.exports = withBundleAnalyzer(nextConfig);
