/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  transpilePackages: [
    '@mui/x-date-pickers/internals/demo'
  ],
  images: {
    domains: ["firebasestorage.googleapis.com"]
  }
};

module.exports = nextConfig;
