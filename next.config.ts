import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.luxhospitals.com",
      },
      {
        protocol: "https",
        hostname: "luxhospitals.com",
      },
    ],
  },
};

export default nextConfig;
