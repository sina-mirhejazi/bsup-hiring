module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "src/styles/variables.scss";
          @import "node_modules/bootstrap/scss/functions";
          @import "node_modules/bootstrap/scss/variables";
        `,
      },
    },
  },
  devServer: {
    proxy: 'http://hiring.bsup.tk/api',
  },
};
