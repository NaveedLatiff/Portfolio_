/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line
  images: {
    unoptimized: true, // Required for static export if you use next/image
  },
};

export default nextConfig;