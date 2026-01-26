/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "http", // Add this for http URLs
        hostname: "res.cloudinary.com",
      },
    ],

    unoptimized: true,
  },
};

export default nextConfig;
