const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "via.placeholder.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "tailwindui.com",
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: "mdbcdn.b-cdn.net",
        port: '',
        pathname: '/img/**',
      },
       {
        protocol: 'https',
        hostname: "tecdn.b-cdn.net",
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
