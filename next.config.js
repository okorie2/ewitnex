/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  transpilePackages: [
    '@mui/x-date-pickers/internals/demo'
  ]
};

module.exports = nextConfig;
