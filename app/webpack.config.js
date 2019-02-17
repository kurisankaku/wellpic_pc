const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = [
  {
    entry: {
      index: './src/index.js'
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
        }
      ]
    },
    // devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 9000
    },
    plugins: [
      // new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('[name].css'),
      new webpack.HotModuleReplacementPlugin()
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
  },
  // {
  //   entry: {
  //     style: './src/style.scss'
  //   },
  //   output: {
  //     filename: '[name].css',
  //     path: path.resolve(__dirname, 'dist')
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.scss$/,
  //         loader: ExtractTextPlugin.extract({
  //           fallback: 'style-loader',
  //           use: ['css-loader', 'sass-loader']
  //         })
  //       }
  //     ]
  //   },
  //   plugins: [
  //     new ExtractTextPlugin('[name].css')
  //   ]
  // }
];
