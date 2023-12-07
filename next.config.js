/**
 * @type {import('next').NextConfig}
 *
 */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  assetPrefix: isProd ? "/runit.github.io" : undefined,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
