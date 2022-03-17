const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 
  entry: path.resolve(__dirname, './client/index.js'),
  devServer : {
    historyApiFallback: true, 
    static: {
      publicPath: '/build', 
      directory: path.resolve(__dirname, 'build')
    },
    port: 8080,
    proxy: {
      '/api/': {
        target: "http://localhost:3000",
      }
    }
  },
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, './client/build'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: '',
      template: path.join(__dirname, 'client', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, 
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ]
      }, 
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', ''], 
  }
}