const webpackMerge = require('webpack-merge');
var webpack = require('webpack');

const commonConfig = require('./webpack.common.js');

module.exports = function (env) {
  return webpackMerge(commonConfig(), {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('prod')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true,
          warnings: false
        },
        comments: false,
        exclude: /node_modules/,
        sourceMap: true
      })
    ]
  })
}