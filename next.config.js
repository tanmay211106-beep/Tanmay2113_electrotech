/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [], // add image domains if needed
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
