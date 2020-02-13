/*
 * @Date: 2020-02-13 15:21:32
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-13 17:09:20
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require("./package.json");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const banner = new webpack.BannerPlugin({
  banner: `
  REACT-REPORT-DATA-CHART-MOBILE v${pkg.version}
  @author ${pkg.author}
  @desc: ${pkg.description}
  @2020 ncov school chart
  Copyright (c) 2020 河北云在
  `,
});

module.exports = {
  watch: true,
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: "[name].bundle.[hash].js",
    chunkFilename: "[name].bundle.[hash].js",
    path: path.resolve(__dirname, "dist/react-report-data-chart-mobile")
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: "html-loader", options: { minimize: true } }]
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]",
              publicPath: "./src/assets/image/",
              outputPath: "assets/image/"
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['eslint-loader', 'babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        mangle: true,
        output: {
          beautify: true,
        },
      }
    }),
    banner,
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[hash].css",
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    port: 8002,
    host: "0.0.0.0",
    historyApiFallback: true,
    hot: true,
    overlay: true
  },
};