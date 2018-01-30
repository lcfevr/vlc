<template>
    <div class="Rater">
        <p>可点击评分</p>
        <Rater v-model="rate"></Rater>
        <span>{{rate}}</span>
        <p>不可点击评分</p>
        <Rater v-model="disabledRate" disabled></Rater>
        <span>{{disabledRate}}</span>
    </div>
</template>

<script>
    export default {
        name: "rater",
        data(){
            return {
                rate:0,
                disabledRate:4.5
            }
        }
    }
</script>

<style lang="less" scoped>
    .Rater {
        width: 100%;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p {
            text-indent: 10px;
            font-weight: bold;
            font-size: 14px;
            margin: 10px 0;
        }
    }
</style>