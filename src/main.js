/**
 * Created by lcfevr on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/app.vue';
import Routers from './router';
import Env from './config/env';
import Config from './config/config'
import {setPageTitle} from './utils/util'
import Cache from './utils/cache'
// import Modal from './components/modal/index'
// import Prompt from './components/prompt/index'


// import Message from './components/message/index'

import vlc from './index'

Vue.use(vlc)


console.log(Routers)
console.log(vlc)
Vue.use(VueRouter);
// Vue.use(VueTouch);


// 开启debug模式


Vue.prototype.$Config = Config;



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
    render: h => h(App)
})