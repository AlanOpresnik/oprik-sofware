import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    BREVO_API_KEY: process.env.BREVO_API_KEY,
  },
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
      },
      {
        protocol: 'https',
        hostname: 'icons-for-free.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn4.iconfinder.com',
      }, {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'static-00.iconduck.com',
      },{
        protocol: 'https',
        hostname: 'seeklogo.com',
      }
    ]
  }
};

export default nextConfig;
