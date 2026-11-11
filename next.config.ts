import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // 项目自己的 AGENTS.md 已写明 Next.js 的读取约定，关掉 Next 自动追加的托管块，避免重复与工作区噪音。
  agentRules: false,
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
