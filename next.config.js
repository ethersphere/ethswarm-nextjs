/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blog.ethswarm.org",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
