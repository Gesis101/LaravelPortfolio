module.exports = {
    devServer: {
    disableHostCheck: true
  },
  transpileDependencies: ['vuetify'],
    chainWebpack: config => config.resolve.symlinks(false)
}
