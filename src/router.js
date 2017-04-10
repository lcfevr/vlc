/**
 * Created by lcfevr on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        },
        title:'首页',
        depth:10
    },

};
export default routers;