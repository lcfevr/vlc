/**
 * Created by lcfevr on 16/8/22.
 */


const routers = [
    {
        path:'/',
        redirect:'/guide'
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