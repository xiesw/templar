const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');
const DIST_PATH = path.resolve(__dirname, '../dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

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
        // 因为这个插件需要干涉模块转换的内容，所以需要使用它对应的 loader
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true // css压缩
              }
            },
          ],
        }),
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
  plugins: [
    new ExtractTextPlugin({
      filename: "style/[name].[hash:8].css"
    }),
  ],
};