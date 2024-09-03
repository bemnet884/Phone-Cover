/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/your-repo-name',  // Replace with your actual GitHub repository name
  assetPrefix: '/your-repo-name/',
  images: {
    unoptimized: true,  // This is necessary for static export
  },
};

export default nextConfig;
