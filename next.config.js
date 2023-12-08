/**
 * @type {import('next').NextConfig}
 *
 */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  basePath: isProd ? "/runit.github.io" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/help/:slug*",
        destination: "/page/help/:slug*",
      },
    ];
  },
};

module.exports = nextConfig;
