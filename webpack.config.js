const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    stat: './statistics.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@model': path.resolve(__dirname, 'src/model'),
      '@css': path.resolve(__dirname, 'src/css'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  target: 'web',
  devServer: {
    port: 4200,
    hot: false
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
  }
  ), new CleanWebpackPlugin(),
  new CopyWebpackPlugin({
    patterns: [
      { from: path.resolve(__dirname, 'src', 'assets', 'logo.png'), to: path.resolve(__dirname, 'dist', 'logo.png') }],
  })],
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|jpe?g|svg|gif|webp)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/images/[name].[hash][ext]'
      }
    },
    {
      test: /\.(woff|woff2|ttf|eot|otf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'assets/fonts/[name].[hash][ext]'
      }
    }
    ]
  }
};