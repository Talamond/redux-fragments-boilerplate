const path = require('path');
const webpack = require('webpack');
const packages = require('./package.json');

const dependencies = Object.keys(packages.dependencies);
// const vendors = [];
// for (let i = 0; i < dependencies.length; i++) {
//   vendors.push(dependencies[i]);
// }

// todo, get all deps in here
module.exports = {
  // output as library
  output: {
    filename: '[name].js',
    library: '[name]_lib',
    path: path.join(__dirname, './dist/'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },

  entry: {
    vendorLib: dependencies
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/[name]-manifest.json'),
      name: '[name]_lib'
    })
  ]
};
