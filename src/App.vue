<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  font-style: normal;
}
a {
  text-decoration: none;
}
img {
  max-width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0.2rem;
  line-height: 1;
}
@font-face {
  font-family: 'iconfont';  /* project id 1939834 */
  src: url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.eot');
  src: url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.woff') format('woff'),
  url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1939834_k8lih3nw3a.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}

h3, h4, h5, h6 {
  font-weight: normal;
}
</style>
