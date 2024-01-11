/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    minimumCacheTTL: 1500000,

  },
}

module.exports = nextConfig