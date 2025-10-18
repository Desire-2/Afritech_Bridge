/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
}

module.exports = nextConfig

module.exports = nextConfig

