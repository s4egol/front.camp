const path = require('path');
const argv = require('yargs').argv;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SriPlugin = require('webpack-subresource-integrity');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: [
    "whatwg-fetch",
    "babel-polyfill",
    "./scripts/appInitialize/app.js"
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    crossOriginLoading: 'anonymous',
    filename: isProduction ? '[name].[hash].js' : '[name].js',
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
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
              attrs: ['link:href'],
            }
        },
        {
            test: /\.json$/,
            use: [
              {
                loader: path.resolve('./scripts/loader/json-loader.js')
              }
            ]
        }
    ]
  },
  plugins: [
    //new CleanWebpackPlugin('./build'),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? '[name].[hash].css' : '[name].css'
    }),
    new SriPlugin({
      hashFuncNames: ['sha256', 'sha384'],
      enabled: isProduction,
  })
  ],
  optimization: {
    minimizer: [
      new UglifyjsWebpackPlugin({
        uglifyOptions: {
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          toplevel: false,
        }
      })
    ]
  },
  devtool: isDevelopment ? 'source-map' : 'none',
  devServer: {
    contentBase: './build',
    stats: 'errors-only'
  }
  }