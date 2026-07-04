/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static output → deploys to Cloudflare Pages, Vercel, Netlify, S3, anywhere.
  output: "export",
  trailingSlash: true,
  images: {
    // Required for `output: export` (no server-side image optimization).
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
