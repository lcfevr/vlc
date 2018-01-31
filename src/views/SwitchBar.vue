<template>
    <div class="SwitchBar">
        <SwitchBar v-model="checkLarge" size="large"></SwitchBar>
        <span>large</span>
        <SwitchBar v-model="checkSmall" size="small"></SwitchBar>
        <span>small</span>

    </div>
</template>

<script>
    export default {
        name: "switch-bar",
        data(){
            return {
                checkLarge:false,
                checkSmall:false
            }
        }
    }
</script>

<style lang="less" scoped>
    .SwitchBar {
        padding-top: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        p {
            font-weight: bold;
            font-size: 14px;
            align-self: flex-start;
        }
    }
</style>