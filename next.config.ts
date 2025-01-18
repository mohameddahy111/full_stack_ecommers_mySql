import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  cacheMaxMemorySize:0,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  images:{
    remotePatterns:[{
      protocol: "https",
      hostname: "**"
    }]
  },
};

export default withNextIntl(nextConfig);