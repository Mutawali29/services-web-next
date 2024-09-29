const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/web-services-app' : '',
  assetPrefix: isProd ? '/web-services-app/' : '',
  images: {
    unoptimized: true, // Ini bisa membantu jika Anda mengalami masalah dengan gambar
  },
};

export default nextConfig;
