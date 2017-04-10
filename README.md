<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
## vue-vueRouter-webpack

入口文件
```
app.vue

```
路由 routers
```
src/routers/*.vue

```
启动配置
```
src/main.vue

```
安装
```
npm install webpack -g
npm install webpack-dev-server -g
npm install

```

开发环境
```
npm run dev

```

生产环境
```
npm run build

```


端口号

```
8080

```


开发环境下建议开启 source-map 便于调试

```
var config = require('./webpack.base.config');

config.devtool = '#source-map';

module.exports = config;

```

main.js配置路由

```
router.map({
    '/index': {
        name: 'index',
        component: function (resolve) {
            require(['./routers/index.vue'], resolve);
        }
    }
});

```


=======
#QA-element
>>>>>>> ebfa0fe5a12b5f0db827172ebe0ae198ff601e3a
=======
#hellobi-h5
>>>>>>> 7f383a85205be2415253c4c800f0895b99e4968f
=======
# vlc
组件库
>>>>>>> 7edba6fe24d24dbffb0fd9a7574a5caf61dc8f6a
