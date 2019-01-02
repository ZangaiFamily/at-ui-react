const path = require('path');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: path.join(__dirname, "../src/index.tsx"),
  output: {
    filename: "../dist/bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      loader: "ts-loader"
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(eot|woff2|woff|ttf|svg)/,
      use: [{
        loader: 'url-loader',
        options: {
          name: '[name]-[hash:5].min.[ext]',
          limit: 5000,
          useRelativePath: true
        }
      }]
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    overlay: true,
    stats: "minimal",
  }
};