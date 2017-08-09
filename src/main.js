/**
 * Created by lcfevr on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Routers from './router';

import Config from './config/config'
// import Modal from './components/modal/index'
// import Prompt from './components/prompt/index'


// import Message from './components/message/index'

import vlc from './index'

Vue.use(vlc)


    var log = console.log;
    console.log = function () {
        var args = Array.from(arguments);
        args = args.map(arg => {
            try {
                return JSON.parse(JSON.stringify(arg));
            } catch (e) {
                return arg;
            }
        });

        log.apply(console, args);
    };

    window.vConsole = require('./vconsole.min');
    require('./vconsole-resources.min');
    require('./vconsole-sources.min');


Vue.use(VueRouter);
// Vue.use(VueTouch);


// 开启debug模式


Vue.prototype.$Config = Config;


let EventBus = new Vue();
// 路由配置
let router = new VueRouter({

    history: process.env.NODE_ENV != 'production',
    routes:Routers
});


router.beforeEach((to,from,next) => {
    // let title = to.meta.title || Config.doc_title;
    // setPageTitle(title);

    window.scrollTo(0, 0);
    next();
});

router.afterEach(() => {

});

window.EventBus = new Vue();

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})