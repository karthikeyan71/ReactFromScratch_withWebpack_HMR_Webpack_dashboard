const path = require("path");
const webpack = require("webpack");
const DashboardPlugin = require("webpack-dashboard/plugin");

module.exports = {
    entry: "./src/index.js",
    mode: "developement",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      watchContentBase: true,
      hotOnly: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin()
    ]
};
