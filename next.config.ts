import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Move it here, out of experimental
  allowedDevOrigins: [
    '3000-firebase-studio-1766467385076.cluster-ar5ykyjhlfetmwxm2nmwbrjbvm.cloudworkstations.dev'
  ],
  typescript: {
    ignoreBuildErrors: true,
  },  
};

export default nextConfig;