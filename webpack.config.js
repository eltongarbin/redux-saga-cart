const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: [
      'babel-regenerator-runtime',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      './'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/assets',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        exclude: [/(node_modules)/],
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
