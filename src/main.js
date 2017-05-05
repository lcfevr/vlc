/**
 * Created by lcfevr on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router';
import Env from './config/env';
import Config from './config/config'
import {setPageTitle} from './utils/util'
import Cache from './utils/cache'
import Modal from './components/modal/index'
import Notice from './components/notice/index'
import VueTouch from 'vue-touch'
import Request from './utils/request'
import VueResource from 'vue-resource'



Vue.use(VueRouter);
// Vue.use(VueTouch);
Vue.use(VueResource)

// 开启debug模式



Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;
Vue.prototype.$Config = Config;
Vue.prototype.$Request = Request;

// 路由配置
let router = new VueRouter({

    history: Env != 'production',
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
    render: h => h('router-view')
})