const { resolve } = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [resolve(__dirname, "../src"), resolve(__dirname)],
        use: "babel-loader"
      }
    ]
  }
};
