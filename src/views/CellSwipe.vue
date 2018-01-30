<template>
    <div class="CellSwipe">
        <CellSwipe  :right="right" title="向左滑" has-mask ></CellSwipe>
        <CellSwipe :left="left"  title="向右滑" has-mask ></CellSwipe>
        <template v-if="show">
            <CellSwipe :left="left" :right="right" title="删除测试" has-mask ></CellSwipe>
        </template>



    </div>
</template>

<script>




    export default {
        name: "cell-swipe",
        data(){
            return {
                show:true,
                left:[
                    {
                        content:'确定',
                        style:{
                            backgroundColor:'#eee',
                            color:'#fff'
                        },
                        handleClick:function(){
                            EventBus.$Modal.info({
                                body:'点击了确定'
                            })
                        }
                    },
                    {
                        content:'删除',
                        style:{
                            backgroundColor:'red',
                            color:'#fff'
                        },
                        handleClick:function(){
                            EventBus.$Modal.info({
                                body:'点击了删除'
                            })
                        }
                    }
                ],
                right:[
                    {
                        content:'确定',
                        style:{
                            backgroundColor:'#eee',
                            color:'#fff'
                        },
                        handleClick:function(){
                            EventBus.$Modal.info({
                                body:'点击了确定'
                            })
                        }
                    },
                    {
                        content:'删除',
                        style:{
                            backgroundColor:'red',
                            color:'#fff'
                        },
                        handleClick:function(){
                            EventBus.$Modal.info({
                                body:'点击了删除'
                            })
                        }
                    }
                ],
            }
        },


    }
</script>

<style scoped>

</style>