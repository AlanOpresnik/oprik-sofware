import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'roblesrender.com',
      },
      {
        protocol: 'https',
        hostname: 'www.lorecunas.com.ar',
      },
      {
        protocol: 'https',
        hostname: 'tuparaisofederacion.com',
      },{
        protocol: 'https',
        hostname: 'www.portaflex.com.ar'
      }
    ]
  }
};

export default nextConfig;
