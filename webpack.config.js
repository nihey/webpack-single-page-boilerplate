var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    IndexHtmlPlugin = require('indexhtml-webpack-plugin'),
    path = require('path');

var cssExtractTextPlugin = new ExtractTextPlugin('[contenthash].css');

module.exports = {
  entry: {
    'script': './scripts/index.js',
    'index.html': './index.html',
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader'},
      { test: /\.js$/, exclude: /(node_modules|bower_components)\//, loader: 'babel-loader'},
      { test: /\.(ttf.*|eot.*|woff.*|ogg|mp3)$/, loader: 'file-loader'},
      { test: /.(png|jpe?g|gif|svg.*)$/, loader: 'file-loader!img-loader?optimizationLevel=7&progressive=true'},
      {
        test: /\.css$/,
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
      {
        test: /\.less$/,
        loader: cssExtractTextPlugin.extract('style-loader', 'css-loader!less-loader'),
      },
      {
        test: /\.html$/,
        loader: 'html?attrs=link:href img:src',
      },
    ],
  },

  plugins: [
    cssExtractTextPlugin,
    new IndexHtmlPlugin('index.html', 'index.html'),
    new webpack.DefinePlugin({
      Environment: JSON.stringify(require('config')),
    }),
  ],

  resolve: {
    root: path.join(__dirname, 'scripts'),
    extensions: ['', '.js', '.json'],
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
};
