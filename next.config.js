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
        hostname: "images.unsplash.com",
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
      {
        protocol: 'http',
        hostname: "127.0.0.1",
        port: '8000',
        pathname: '/storage/**',
      },
      {
        protocol: 'http',
        hostname: "127.0.0.1",
        port: '8000',
        pathname: '/api/**',
      },  {
        protocol: 'https',
        hostname: "apis.jckconsulting.co.uk",
        port: '',
        pathname: '/api/**',
      },
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
}

module.exports = nextConfig
