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


Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = Env != 'production';


Vue.prototype.$Modal = Modal;
Vue.prototype.$Notice = Notice;

// 路由配置
let router = new VueRouter({

    history: Env != 'production'

});


router.map(Routers);

router.beforeEach(({to,next}) => {
    let title = to.title || Config.doc_title;
    setPageTitle(title);

    window.scrollTo(0, 0);
    next();
});

router.afterEach(() => {

});

router.redirect({
    '*': "/index"
});
router.start(App, '#app');