/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the tracing root to this project so an unrelated lockfile higher up
  // the tree (in the user's home dir) doesn't get inferred as the workspace.
  outputFileTracingRoot: import.meta.dirname,
};

export default nextConfig;
