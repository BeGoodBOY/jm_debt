module.exports = {
  //部署相对路径
  // publicPath: './',
  //生产环境map
  productionSourceMap: false,
  css: {
    //默认为false，设置为true影响构建速度
    sourceMap: false
  },
  devServer: {
    // proxy: "http://192.168.6.11:8080",
    // proxy: "http://localhost:8888"
    proxy: {
      '/api': {
        target: 'http://47.105.204.166:8080',//目标地址
        ws: true, //// 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: { '^/api': '/' }    //这里重写路径
      }

    }
  }

};
