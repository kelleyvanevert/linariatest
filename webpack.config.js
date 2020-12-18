const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const __DEV__ = process.env.NODE_ENV !== "production";

module.exports = {
  mode: __DEV__ ? "development" : "production",
  entry: {
    app: "./src/index.jsx",
  },
  devServer: {
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "@linaria/webpack-loader",
            options: {
              sourceMap: __DEV__,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: __DEV__,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: __DEV__ ? "[name].css" : "[name].[contenthash].css",
      chunkFilename: __DEV__ ? "[id].css" : "[id].[contenthash].css",
    }),
    __DEV__ && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
};
