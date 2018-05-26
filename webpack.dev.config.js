const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  mode: 'development',
  watch: true,
  watchOptions: {
    ignored: '/node_modules/',
    poll: 100,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'development'`
      }
    })
  ],
});
