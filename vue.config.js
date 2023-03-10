const { defineConfig } = require('@vue/cli-service')
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path')
const webpack = require('webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        // 设默认title
        args[0].title = '安澜网'
        return args
      })
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 0,
        maxInitialRequests: Infinity,
        cacheGroups: {
          libs: { // 第三方库
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial"
          },
          elementUI: { // element 单独拆包
            name: "chunk-el",
            test: /[\\/]node_modules[\\/]element-ui[\\/]/,
            priority: 20 // 权重要大于 libs
          },
          commons: { // 公共模块包
            name: `chunk-commons`,
            minChunks: 2,
            priority: 0,
            reuseExistingChunk: true
          }
        },
      }
    },
    plugins: [
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/
      }),
      new CompressionPlugin({
        filename: '[path][base].gz',
        algorithm: 'gzip',
        test: /\.(html|js|json|ttf|woff|css|jpeg|jpg|png)$/,
        threshold: 0,
        minRatio: 1,
        deleteOriginalAssets: false,
      }),
      new webpack.optimize.MinChunkSizePlugin({
        minChunkSize: 1000
      })
    ]
  },
  pluginOptions: {
    // 注册全局less
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/less/main.less')
      ]
    }
  }
})
