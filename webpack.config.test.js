// Common Webpack configuration used by webpack.config.development and webpack.config.production

const path = require('path');
const webpack = require('webpack');

module.exports = {
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, 'build/client'),
    publicPath: '/'
  },
  entry: () => false,
  resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [/src/, /tests/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        enforce: 'pre'
      },
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, './src'), path.resolve(__dirname, './tests/sampleFragments')],
        exclude: path.resolve(__dirname, './tests'),
        loader: 'babel-loader'
      }
    ]
  }
};
