/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const isGithubPages = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubPages ? '/portfolio-website' : '',
  assetPrefix: isGithubPages ? '/portfolio-website/' : '',
};

export default nextConfig;
=======
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
>>>>>>> 74867643b8d32bee28ac12e6c8993aace1271d32
