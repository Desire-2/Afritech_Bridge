/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Use no trailing slash to avoid potential route mismatches on some hosts (Vercel)
  // If your site relies on trailing slashes, you can revert this change.
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  poweredByHeader: false,
}

module.exports = nextConfig

