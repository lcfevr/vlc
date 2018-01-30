<template>
    <div class="Badge">
        <Badge number="10">
            <div class="item"></div>
        </Badge>

        <Badge number="100" max="99" :dot="false">
            <div class="item"></div>
        </Badge>

        <Badge number="100" max="99" :dot="true">
            <div class="item"></div>
        </Badge>
    </div>
</template>

<script>

    export default {
        name: "badge",
        data(){
            return {

            }
        },

    }
</script>

<style lang="less" scoped>
    .Badge {
        width: 100%;
        margin-top: 100px;
        display: flex;
        justify-content: space-around;
        .item {
            width: 45px;height: 45px;background-color: red
        }
    }
</style>