import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: process.env.GENERATE_SOURCEMAP !== "false",
};

export default nextConfig;
