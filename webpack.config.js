const _path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

function path(p) {
  return _path.resolve(process.cwd(), p);
}

module.exports = {
  entry: {
    'main': './src/main.js',
    // 'css': ['./src/slick/slick.css', './src/slick-theme.slim.css', './src/main.css']
  },
  output: {
    path: path('public'),
    publicPath: 'public',
    filename: '[name].js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.src.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      filename: '../index.html',
      hash: true,
      inject: true
    }),
    new ExtractTextPlugin('main.css'),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async'
    }),
    new webpack.optimize.UglifyJsPlugin({
      // Don't beautify output (enable for neater output)
      beautify: false,

      // Eliminate comments
      comments: false,

      // Compression specific options
      compress: {
        warnings: false,

        // Drop `console` statements
        drop_console: true
      },

      // Mangling specific options
      mangle: {
        // Don't mangle $
        except: ['$'],

        // Don't care about IE8
        screw_ie8 : true,

        // Don't mangle function names
        keep_fnames: true
      }
    })
  ]
}