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
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/The-Book-of-Swarm.pdf",
        destination: "https://papers.ethswarm.org/p/book-of-swarm/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
