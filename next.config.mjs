/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ebayimg.com",
        port: "",
        pathname: "/images/g/CwEAAOSwv4xf5cdv/**"
      }
    ]
  }
};

export default nextConfig;
