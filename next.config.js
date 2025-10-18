/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

