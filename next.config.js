/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "punya-rumah.s3.ap-southeast-2.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
