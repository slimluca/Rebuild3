import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.resolve(process.cwd()),
  skipTrailingSlashRedirect: true,
  async headers() {
    return [
      {
        source: "/go/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
