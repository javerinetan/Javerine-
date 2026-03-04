module.exports = {
  webpack: {
    configure: {
      resolve: {
        extensions: ['.mjs', '.js', '.jsx', '.json'],
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false,
            },
            type: 'javascript/auto',
          },
        ],
      },
    },
  },
};
