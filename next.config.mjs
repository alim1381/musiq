/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "musiq-roan.vercel.app"],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
