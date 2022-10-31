/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lobxs.com',
        port: '',
        pathname: '/wp-content/**'
      }
    ]
  }
}
