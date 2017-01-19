const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets', // New
  },
  module: {
    rules: [
      {
        test: /\.haml$/,
        use: "haml-haml"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader',
          'sass-loader',
        ]
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
  },
};