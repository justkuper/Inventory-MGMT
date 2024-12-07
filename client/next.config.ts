import type { NextConfig } from "next";

// Correct Next.js config
const nextConfig: NextConfig = {
  images: {
    domains: ["s3-inventorymanagement-kb.s3.us-east-1.amazonaws.com"], // Only the domain part
  },
};

export default nextConfig;
