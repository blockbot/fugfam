const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

module.exports = merge(webpackConfig, {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.server.js',
    publicPath: '/'
  },
  target: 'node',
  externals: nodeExternals(),
  watchOptions: {
    ignored: '/node_modules/',
    poll: 100,
  },
});
