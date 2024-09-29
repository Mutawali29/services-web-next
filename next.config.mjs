const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Menambahkan opsi export untuk membuat situs statis
  basePath: isProd ? '/nama-repo-kamu' : '',
  assetPrefix: isProd ? '/nama-repo-kamu/' : '',
};

export default nextConfig;
