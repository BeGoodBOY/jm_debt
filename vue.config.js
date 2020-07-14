module.exports = {
  //部署相对路径
  // pablicPath: './',
  //生产环境map
  // productionSourceMap: true,
  css: {
    //默认为false，设置为true影响构建速度
    sourceMap: true
  },
  devServer: {
    proxy: "http://192.168.6.11:8080",
    proxy: "http://localhost:8888"
  }
};
