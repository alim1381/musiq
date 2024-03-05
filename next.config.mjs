/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "musiq-ten.vercel.app"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
