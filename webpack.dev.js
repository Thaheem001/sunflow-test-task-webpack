/* eslint-disable no-undef */
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    static: path.resolve(__dirname, "src"),
    port: 3000,
    historyApiFallback: true,
  },
});
