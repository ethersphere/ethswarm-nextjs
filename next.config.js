/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
