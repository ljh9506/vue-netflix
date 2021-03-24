module.exports = {
  outputDir: './docs',
  publicPath: '/vue-netflix/',
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
  },
};
