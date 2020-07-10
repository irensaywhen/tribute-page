const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    main: ["./js/index.js", "./js/timeline.js", "./js/loader.js"],
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "[name].bundle.js",
  },
};
