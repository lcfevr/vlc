<template>
    <div class="Tab">
        <Tab :items="items" :index="index" :border="hasBorder" :styles="styles"></Tab>
    </div>
</template>

<script>
    export default {
        name: "tab",
        data(){
            return {
                items:[
                    {
                        path:'/guide',
                        name:'首页',
                        iconCur:'<span class="iconfont icon-shangcheng"></span>',
                        icon:'<span class="iconfont icon-shangcheng"></span>'
                    },
                    {
                        path:'/guide',
                        name:'首页',
                        iconCur:'<span class="iconfont icon-shangcheng"></span>',
                        icon:'<span class="iconfont icon-shangcheng"></span>',
                    },
                ],
                index:0,
                hasBorder:true,
                styles:{
                    bottom:0
                }
            }
        }
    }
</script>

<style scoped>
    .Tab {
        height:100%;

    }
</style>