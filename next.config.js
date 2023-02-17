const securityHeaders = require('./securityHeaders')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  //
  images: {
    domains: ['lobxs.com', 'localhost']
  }
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: {}
  //     }
  //   ]
  // }
}
