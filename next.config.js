/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) { //configure polling hot reloading for wsl2
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300
      }
    } 
    return config
  },
}

module.exports = nextConfig