const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')


module.exports = {
  entry: './index.js',

  context: path.resolve(__dirname, 'src'),

  devtool: "#eval-source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new UglifyJSPlugin()
  ]
}
