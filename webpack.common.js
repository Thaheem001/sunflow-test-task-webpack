const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].js",
    publicPath: "/",
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@config": path.resolve(__dirname, "src/config/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@layout": path.resolve(__dirname, "src/layout/"),
      "@style": path.resolve(__dirname, "src/style"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ], optimization: {
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
};
