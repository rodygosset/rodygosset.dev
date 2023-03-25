/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
}

// configure locale sub-path routing

module.exports = {
	...nextConfig,
	i18n: {
		locales: ['en-US', 'fr'],
		defaultLocale: 'en-US'
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io'
			}
		]
	}
}
