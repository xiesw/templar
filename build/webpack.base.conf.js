const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const DIST_PATH = path.resolve(__dirname, '../dist');

module.exports = {
  entry: {
    app: './src/index.js',
    framework: ['react', 'react-dom']
  },
  output: {
    filename: "js/bundle.js",
    path: DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: "babel-loader",
        include: APP_PATH
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg|gif|svg|ico|json)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name][md5:hash].[ext]',
              outputPath: 'images/'
            }
          },
        ],
        include: [
          APP_PATH,
          PUBLIC_PATH
        ]
      },
    ]
  },
};