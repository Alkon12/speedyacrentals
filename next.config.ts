import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Habilita exportación estática
  images: {
    unoptimized: true, // Evita problemas con imágenes en estático
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
