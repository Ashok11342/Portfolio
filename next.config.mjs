// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig

// For local development
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for local development
  // output: 'export',
  images: {
    unoptimized: true
  }
}

export default nextConfig
