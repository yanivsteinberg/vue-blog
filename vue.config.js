module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/main.scss";',
      },
    },
  },
  devServer: {
    port: 8080,
    public: 'localhost:8080',
    proxy: {
      '/api': {
        target: 'http://localhost:1337/',
        changeOrigin: true,
        pathRewrite: (path) => path.replace('/api', ''),
      },
      '/uploads': {
        target: 'http://localhost:1337/',
        changeOrigin: true,
      },
    },
  },
};
