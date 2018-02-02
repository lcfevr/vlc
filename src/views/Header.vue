<template>
    <div class="Header">
        <div class="item">
        <Header title="Header" :fixed="fixed"></Header>
        </div>
        <div class="item">
            <Header title="Header" :fixed="fixed">
                <span slot="right" @click="share">分享</span>
            </Header>
        </div>
        <div class="item">
        <Header title="Header" :fixed="fixed">
            <span slot="left">返回</span>
            <span slot="right" @click="share">分享</span>
        </Header>
        </div>
    </div>
</template>

<script>

    export default {
        name: "header",

        data(){
            return {
                fixed:false
            }
        },
        methods:{
            share(){
                this.$Modal.confirm({
                    showHead:false,
                    body:'点击了分享'
                })
            }
        }
    }
</script>

<style scoped>
    .item {
        position: relative;
        margin-bottom: 20px;
        height: 50px;
    }
</style>