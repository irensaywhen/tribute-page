const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: ["./js/index.js", "./js/timeline.js"],
    loader: "./js/loader.js",
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
};
