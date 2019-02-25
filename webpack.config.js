/*** webpack.config.js ***/
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/index.html"),
          filename: "./index.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/airline.html"),
          filename: "./airline.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/bus.html"),
          filename: "./bus.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/rail.html"),
          filename: "./rail.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/train.html"),
          filename: "./train.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/trolley.html"),
          filename: "./trolley.html"
      }),
      new HtmlWebpackPlugin({
          template: path.join(__dirname, "./src/weather.html"),
          filename: "./weather.html"
      }),
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
      inline: true,
      compress: true,
      port: 3333
    }
};
