<template>
    <div class="Card">
        <Card width="80%">
            <span class="item" slot="header">头部</span>
            <span class="item-main" >内容</span>
            <span class="item" slot="footer">底部</span>

        </Card>
    </div>
</template>

<script>

    export default {
        name: "card",
        data(){
            return {

            }
        },

    }
</script>

<style lang="less" scoped>
    .Card {
        background: #4d4d4d;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .item {
            width: 100%;
            height: 100%;
            ;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .item-main {
            width: 100%;
            height: 200px;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
</style>