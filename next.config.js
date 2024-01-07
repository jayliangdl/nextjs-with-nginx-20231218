/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    esmExternals: false,
  },
  transpilePackages: ['antd-mobile'],
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    return config;
  },

}

module.exports = nextConfig
