const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/resources/game/wechat/dxl/zn_wechat/' : '/',
  publicPath: process.env.NODE_ENV === 'production' ? '/wechat/' : '/',
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('components',resolve('src/components'))
      .set('views',resolve('src/views'))
      .set('common',resolve('src/common'))
      .set('base',resolve('src/base'))
      .set('api',resolve('src/api'))
  },
  devServer: {
    host: 'localhost',
    port: 8001,
    proxy: {
      '/api': {
        // target: 'https://game.flyh5.cn/game/wuhui/h5/zhongnan/public', //对应自己的接口
        target: 'http://wgw.zoina.cn/zhongnan/public/index.php', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    sourceMap: true, // 开启 CSS source maps
  }
  // presets: ["@vue/app"],
  // plugins:[
  //     [
  //       "component",
  //       {
  //         "libraryName": "mint-ui",
  //         "style": true
  //       }
  //     ]
  // ]
};
