// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // add any external image host domains you use
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    appDir: true,
  }
};

module.exports = nextConfig;
