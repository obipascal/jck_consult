const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  env:{
    TINY_APIKEY: 'n84qiy4o7j5gys47byyxb10pef8dhozn2pek8usoztit8a8c'
  },
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
