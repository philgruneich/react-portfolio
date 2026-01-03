const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  output: 'export',
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(path.join(__dirname, 'src'));
    config.resolve.plugins = [new DirectoryNamedWebpackPlugin(true)];

    return config;
  }
};
