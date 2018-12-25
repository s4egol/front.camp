const path = require('path');
const argv = require('yargs').argv;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./scripts/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.js",
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: [
              'style-loader',
              MiniCssExtractPlugin.loader,
              'css-loader',
              'postcss-loader'
            ]
        }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: isDevelopment ? 'source-map' : 'none',
  devServer: {
    contentBase: './build',
    stats: 'errors-only'
  }
  }