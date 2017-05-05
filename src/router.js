/**
 * Created by lcfevr on 16/8/22.
 */
// const routers = {
//     '/index': {
//         component (resolve) {
//             require(['./views/index.vue'], resolve);
//         },
//         title:'首页',
//         depth:10
//     },
//     '/cart': {
//         component (resolve) {
//             require(['./views/cart.vue'], resolve);
//         },
//         title:'购物车',
//         depth:10
//     },
// };

const routers = [
    {
        path:'/',
        redirect:'/cart'
    },
    {
        path:'/cart',
        name:'cart',
        component:require('./views/cart.vue'),
        meta:{
            title:'购物车'
        }
    },
    {
        path:'/guide',
        name:'guide',
        component:require('./views/index.vue'),
        meta:{
            title:'导航'
        }
    }
]
export default routers;