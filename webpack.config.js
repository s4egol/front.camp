const path = require('path');
const argv = require('yargs').argv;

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevelopment = argv.mode === 'development';

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
            exclude: /(node_modules)/,
            use: [
              isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    !isDevelopment ? require('cssnano') : () => {},
                    require('autoprefixer')({
                      browsers: ['IE 11']
                    })
                  ]
                }
              },
              'sass-loader'
            ]
        }
    ]},
  }