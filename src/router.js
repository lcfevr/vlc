/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/complete': {
        component (resolve) {
            require(['./views/complete.vue'], resolve);
        }
    },
    '/rank': {
        component (resolve) {
            require(['./views/rank.vue'], resolve);
        }
    },
    '/card': {
        component (resolve) {
            require(['./views/card.vue'], resolve);
        }
    }
};
export default routers;