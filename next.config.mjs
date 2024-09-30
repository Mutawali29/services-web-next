const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menentukan output sebagai export (untuk mendukung export statis)
  output: 'export',
  
  // Mengatur basePath dan assetPrefix berdasarkan lingkungan (produksi/pengembangan)
  basePath: isProd ? '/web-services-app' : '',
  assetPrefix: isProd ? '/web-services-app/' : '',
  
  // Menambahkan trailingSlash agar semua halaman memiliki slash di akhir (untuk mendukung halaman statis yang di-export)
  trailingSlash: true,

  // Mengatur gambar agar tidak dioptimalkan (berguna untuk deploy statis atau jika ada masalah dengan gambar)
  images: {
    unoptimized: true,
  },
  
  // Menambahkan fitur lain yang mungkin diperlukan
  reactStrictMode: true, // Mengaktifkan mode strict untuk membantu menemukan masalah
};

export default nextConfig;
