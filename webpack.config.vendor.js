const path = require('path');
const webpack = require('webpack');
const packages = require('./package.json');

const excludeVendors = {
  'babel-runtime': true
};
const dependencies = Object.keys(packages.dependencies);
const vendors = [];
for (let i = 0; i < dependencies.length; i++) {
  if (!excludeVendors[dependencies[i]]) {
    vendors.push(dependencies[i]);
  }
}
delete dependencies['babel-runtime'];
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
    vendorLib: vendors
  },

  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, './dist/[name]-manifest.json'),
      name: '[name]_lib'
    })
  ],
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};
