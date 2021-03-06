const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const paths = require('./config/paths');
const dotenvConfig = require('dotenv').config();

module.exports = env => ({
  entry: ['babel-polyfill', './src/index.tsx'],
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
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
  performance: {
    hints: false,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['@babel/env', '@babel/react', '@babel/typescript'],
            plugins: [
              [
                "module-resolver",
                {
                  "root": ["./src"],
                  "extensions": [".tsx", ".ts", ".js"]
                }
              ],
              '@babel/proposal-class-properties'
            ]
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
        test: /\.(png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      // {
      //   test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
      //   loader: require.resolve('url-loader'),
      //   options: {
      //     limit: 10000,
      //     name: 'static/media/[name].[hash:8].[ext]',
      //   },
      // },
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].chunk.css',
    }),
    new CopyPlugin([
      {
        from: 'public/**/*',
        test: /([^ /]+)\/(.+)\.png$/,
        flatten: true,
      },
    ]),
  ],
  node: {
    // Keep global, it's just an alias of window and used by many third party modules:
    global: true,
    // Inline __filename and __dirname values:
    __filename: 'mock',
    __dirname: 'mock',
  },
});
