const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/oauth', {
      target: 'https://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      secure: false, 
      pathRewrite: {
        "^/oauth": "",
      },
    })
  );
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://www.omdbapi.com/',
      changeOrigin: true,
      secure: false, 
      pathRewrite: {
        "^/api": "",
      },
    })
  );
}