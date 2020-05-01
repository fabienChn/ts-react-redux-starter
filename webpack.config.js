const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const paths = require('./config/paths');
const dotenvConfig = require('dotenv').config();

module.exports = env => ({
  entry: ['babel-polyfill', './src/index.tsx'],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    runtimeChunk: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                require('postcss-preset-env')({
                  autoprefixer: {
                    flexbox: 'no-2009',
                  },
                  stage: 3,
                }),
              ],
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/',
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({
        ...dotenvConfig.parsed,
        ...process.env,
      }),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      },
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '',
    }),
    new BundleAnalyzerPlugin(),
  ],
  node: {
    console: false,
    // Keep global, it's just an alias of window and used by many third party modules:
    global: true,
    process: true,
    // Inline __filename and __dirname values:
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    // Never embed a setImmediate implementation:
    setImmediate: false,
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 4001,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
});
