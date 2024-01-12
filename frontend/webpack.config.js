const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
    sourceMapFilename: "[name].js.map", // 소스 맵 파일 이름 설정 추가
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: [/\.js$/, /\.ts?$/, /\.jsx?$/, /\.tsx?$/], // 소스 맵 로더 규칙 추가
        enforce: "pre",
        exclude: /node_modules/,
        use: ["source-map-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
  devtool: "source-map", // 소스 맵 생성 설정 추가
};
