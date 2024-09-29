const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/nama-repo-kamu' : '',
  assetPrefix: isProd ? '/nama-repo-kamu/' : '',
};

export default nextConfig;
