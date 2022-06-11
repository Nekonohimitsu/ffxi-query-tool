const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
        }}, {
        test: /\.html$/,
        use:{
                loader: "html-loader"
        }}
      ]},
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [new HtmlWebpackPlugin({title: 'Development'})],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
