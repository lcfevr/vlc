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


