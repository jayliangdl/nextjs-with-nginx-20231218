/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

// const REMOTE_APP_URL =
  // process.env.NEXT_PUBLIC_REMOTE_APP_URL || 'http://localhost:3002';
// const REMOTE_APP_URL = 'http://localhost:3002';


// const remotes = (isServer) => {
//   const location = isServer ? 'ssr' : 'chunks';
//   return {
//     remote: `remote@${REMOTE_APP_URL}/_next/static/${location}/remoteEntry.js`,
//   };
// }

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config, { isServer }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {},
        // extraOptions: {
        //   automaticAsyncBoundary: true,
        // },
        exposes: {
          './CounterPage': './pages/counter.js',
        },
        // shared: {
        //   ...deps,
        //   react: {
        //     singleton: true,
        //     requiredVersion: deps.react,
        //   },
        //   "react-dom": {
        //     singleton: true,
        //     requiredVersion: deps["react-dom"],
        //   },
        // },
        extraOptions: {
          exposePages: true
        },
      })
    );

    return config;
  },

}

module.exports = nextConfig
