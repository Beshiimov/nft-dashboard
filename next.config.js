/** @type {import('next').NextConfig} */

const nextConfig = {
  // reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['www.cryptocompare.com']
  }
}

module.exports = nextConfig
