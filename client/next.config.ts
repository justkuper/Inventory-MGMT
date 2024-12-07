import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    domains: ["https://s3-inventorymanagement-kb.s3.us-east-1.amazonaws.com/"],
    port: "",
    pathname: "/**",
  },
};

export default nextConfig;
