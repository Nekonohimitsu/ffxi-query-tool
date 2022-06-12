const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(ts?|tsx?)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }]},
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FFXI Query Tool',
      favicon: './resources/logo.png'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], 
    alias: {
      react: path.resolve('./node_modules/react')
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    runtimeChunk: 'single',
  },
};
