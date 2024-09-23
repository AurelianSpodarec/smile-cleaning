/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false, // Change to true for a 301 redirect
      },
    ];
  },
};

export default nextConfig;
