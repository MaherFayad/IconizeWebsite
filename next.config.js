/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    },
  swcMinify: true,
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
}
 
module.exports = nextConfig
