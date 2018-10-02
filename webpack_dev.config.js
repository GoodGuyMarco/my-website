const path = require('path');

// Constants
const OUTPUT_FOLDER_NAME = './dist';

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const plugins = [
  new CleanWebpackPlugin([OUTPUT_FOLDER_NAME]), // Cleans output directory before each build
  new HtmlWebpackPlugin({
    template: './src/index.html', // Takes this as a template and appends all js and css dependencies
  }),
  new MiniCssExtractPlugin({
    filename: 'bundle.css', // Extracts css to a file instead of in-lining it
  }),
];

const config = {
  mode: 'development',
  devtool: 'source-map', // Enables source maps
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, OUTPUT_FOLDER_NAME),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          // 'eslint-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|ico|gif|png|svg|woff|ttf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  plugins,
};

module.exports = config;
