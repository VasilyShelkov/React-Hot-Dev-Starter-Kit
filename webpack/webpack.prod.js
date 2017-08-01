const { resolve } = require("path");
const webpack = require("webpack");
const Merge = require("merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CommonConfig = require("./webpack.common");

module.exports = Merge(CommonConfig, {
  entry: {
    main: resolve(__dirname, "../src"),
    vendor: ["babel-polyfill", "react", "react-dom", "react-router"]
  },
  output: {
    path: resolve(__dirname, "../dist/assets"),
    filename: "[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, "../src")],
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ["vendor", "manifest"]
    }),
    new HtmlWebpackPlugin({
      filename: "../index.html",
      template: "public/index.html"
    })
  ]
});
