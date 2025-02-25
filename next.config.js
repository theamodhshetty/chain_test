/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    // This ignores ESLint errors during builds - useful for Vercel deployment
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 