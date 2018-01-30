<template>
    <div class="Indicator">
        <div class="item">
            <VButton @click="blade()">blade</VButton>
        </div>
        <div class="item">
            <VButton @click="snake()">snake</VButton>
        </div>
        <div class="item">
            <VButton @click="circle()">circle</VButton>
        </div>
        <div class="item">
            <VButton @click="bounce()">bounce</VButton>
        </div>
    </div>
</template>

<script>

    export default {
        name: "indicator",
        methods:{
            blade(){
                 this.$Indicator.blade()

                setTimeout(()=>{
                    this.$Indicator.remove()
                },3000)

            },
            snake(){
                this.$Indicator.snake()

                setTimeout(()=>{
                    this.$Indicator.remove()
                },3000)
            },
            circle(){
                this.$Indicator.circle()

                setTimeout(()=>{
                    this.$Indicator.remove()
                },3000)
            },
            bounce(){
                this.$Indicator.bounce()

                setTimeout(()=>{
                    this.$Indicator.remove()
                },3000)
            }
        }
    }
</script>

<style lang="less" scoped>
    .Indicator {
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;

        .item {
            margin:0 auto;
            width: 50%;
        }
    }
</style>