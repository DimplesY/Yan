import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx'],
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
