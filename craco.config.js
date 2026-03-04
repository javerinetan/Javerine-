const path = require('path');

module.exports = {
  webpack: {
    configure: {
      resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
        alias: {
          'react/jsx-runtime': path.resolve(__dirname, 'node_modules/react/jsx-runtime.js'),
        },
      },
      // This ensures that webpack can handle ESM modules properly
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
          },
        ],
      },
    },
  },
};
