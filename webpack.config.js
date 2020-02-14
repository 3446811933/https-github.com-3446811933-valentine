var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/assets/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      // title 可以修改 html文件名
      title: 'valentine',
      // 用模板生成 html,在原始页面写入 <title> <%= htmlWebpackPlugin.options.title %> </title> 可使配置文件生成相应的 tittle
      template: 'src/assets/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test:/\.less$/,
        loader:['style-loader','css-loader','less-loader'],
      },
      {
        test: /\.css$/i,
        // use: ['style-loader', 'css-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
};