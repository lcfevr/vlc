<template>
    <div class="v-lc-tab" v-show="show" :style="style">
        <ul>
            <template v-if="personal">
               <slot></slot>
            </template>
            <template v-else>

                <tab-item :item="item" :index="index" v-for="(item,index) in items"></tab-item>

            </template>

        </ul>
    </div>
</template>

<script>
    import TabItem from './tabItem.vue'
    export default {
        data(){
            return {

            }
        },
        props:{
            height:{
                type:String,
                default:'.5rem'
            },
            items:{
                type:[Array,Object],
                default: ()=>[{
                    name:"首页",
                    icon:"&#xe662;",
                    iconCur:"&#xe663;",
                    path:"guide"
                },{
                    name:"商品",
                    icon:"&#xe665;",
                    iconCur:"&#xe667;",
                    path:"list"
                },{
                    name:"晒单",
                    icon:"&#xe666;",
                    iconCur:"&#xe668;",
                    path:"shareOrder"
                },{
                    name:"购物车",
                    icon:"&#xe664;",
                    iconCur:"&#xe66a;",
                    path:"cart"
                },{
                    name:"我",
                    icon:"&#xe661;",
                    iconCur:"&#xe669;",
                    path:"user"
                }]
            },
            color:{
                type:String,
                default:'#ccc'
            },
            backgroundColor:{
                type:String,
                default:'#fff'
            },
            fontSize:{
                type:String,
                default:'.14rem'
            },
            show:{
                type:Boolean,
                default:true
            },
            personal:{
                type:Boolean,
                default:false
            }

        },

        components:{
            TabItem
        },
        computed:{
            style(){
                return {
                    backgroundColor:this.backgroundColor,
                    color:this.color,
                    fontSize:this.fontSize,
                    height:this.height
                }
            }
        },

    }
</script>

<style lang="less">

    .v-lc-tab {
        width:100%;
        position: fixed;
        bottom:0;
        left:0;
    }


    .v-lc-tab>ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        height:100%;
    }

    .v-lc-tab>ul li {
        flex:1;
        text-align: center;
    }

    .v-lc-tab>ul li a {
        display: inline-block;
        width:100%;
        height: 100%;
        color: inherit;
    }


    .v-lc-tab>ul li a span {

        display: inline-block;
        width:100%;
        text-align: center;

    }

    .v-lc-tab>ul li a i {
        display: inline-block;
        font-size:.2rem;
    }


</style>