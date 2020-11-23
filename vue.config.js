module.exports = {
  outputDir: 'target',
  publicPath: './',
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/*': {
        target: 'http://localhost:10000',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': '/'
        }
      }
    }
  },
  runtimeCompiler: true
}
