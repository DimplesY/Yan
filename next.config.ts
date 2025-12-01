import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
}

export default nextConfig
