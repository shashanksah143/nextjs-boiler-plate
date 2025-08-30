import type { NextConfig } from "next";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: process.env.GENERATE_SOURCEMAP !== "false",
};

export default withBundleAnalyzer(nextConfig);
