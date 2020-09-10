module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/main.scss";',
      },
    },
  },
};
