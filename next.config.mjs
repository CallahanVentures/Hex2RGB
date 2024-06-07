import withFonts from "next-fonts";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    return config;
  },
};

export default withFonts(nextConfig);
