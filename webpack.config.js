var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlPlugin = require('./plugins/html-plugin'),
    path = require('path');

var cssExtractTextPlugin = new ExtractTextPlugin('[name].css');

module.exports = {
  devServer: {
    port: 8000,
    historyApiFallback: true,
  },

  entry: {
    'script': './src/index.js',
    'style': './src/styles/index.scss',
  },

  module: {
    rules: [
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.js$/, exclude: /(node_modules|bower_components)\//, loader: 'babel-loader'},
      { test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/, loader: 'file-loader'},
      { test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader'},
      {
        test: /\.css$/,
        loader: cssExtractTextPlugin.extract('css-loader'),
      },
      {
        test: /\.scss$/,
        loader: cssExtractTextPlugin.extract('css-loader!sass-loader'),
      },
    ],
  },

  plugins: [
    cssExtractTextPlugin,
    new HtmlPlugin('index.html'),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(require('config')),
    }),
  ],

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
