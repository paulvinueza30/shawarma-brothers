// next.config.mjs
import path from "path";

const nextConfig = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }

    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve("src"),
    };

    return config;
  },
  images: {
    loader: "imgix",
    path: "",
  },
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export", // Ensure output is set to 'export' for static export
};

export default nextConfig;
