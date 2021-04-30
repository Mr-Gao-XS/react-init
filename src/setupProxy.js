const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/server',
    createProxyMiddleware({
      target: 'http://kz.downok.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/server': '/api'
      }
    })
  )
}
