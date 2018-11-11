const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  entry: './client/src/Client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.app.js',
    publicPath: '/'
  },
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      }
    })
  ],
});
