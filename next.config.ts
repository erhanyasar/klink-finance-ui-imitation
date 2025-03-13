import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'klink-cdn.klink.finance',
        port: '',
        pathname: '/ecosystem/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
