const { resolve } = require("path");
const webpack = require("webpack");
const Merge = require("merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");

const CommonConfig = require("./webpack.common");

module.exports = Merge(CommonConfig, {
  entry: [resolve(__dirname, "hotReload")],
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "public"),
    publicPath: "/"
  },
  context: resolve(__dirname, "../src"),
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    port: 8080,
    contentBase: resolve(__dirname, "dist"),
    publicPath: "/",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, "../src"), resolve(__dirname)],
        use: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "../public/index.html"
    }),
    new DashboardPlugin()
  ]
});
