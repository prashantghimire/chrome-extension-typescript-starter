const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
  entry: {
    popup: path.join(__dirname, srcDir + 'popup.ts'),
    background: path.join(__dirname, srcDir + 'background.ts'),
  },
  output: {
    path: path.join(__dirname, '../dist/js'),
    filename: '[name].js'
  },
  optimization: {
    splitChunks: {
      name: 'vendor',
      chunks: "initial"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    // exclude locale files in moment
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CopyPlugin([
        {from: './public', to: '../'},
        {from: 'node_modules/bootstrap/dist/css/bootstrap.min.css', to: '../css'},
        {from: 'node_modules/bootstrap/dist/js/bootstrap.min.js', to: '../js'},
        {from: 'node_modules/jquery/dist/jquery.min.js', to: '../js'},
      ],
    ),
  ]
};
