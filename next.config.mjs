/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Allow deployment even if there are type errors
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
