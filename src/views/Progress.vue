<template>
    <div class="Progress">
        <Progress v-model="progress" :barHeight="barHeight"></Progress>
    </div>
</template>

<script>
    export default {
        name: "progress",
        data(){
            return {
                progress:0,
                barHeight:5
            }
        },
        mounted(){
            var timer = setInterval(()=>{
                this.progress+= 1
                if (this.progress >= 100)  {
                    clearInterval(timer)
                    time = null
                }
            },100)
        }
    }
</script>

<style lang="less" scoped>
    .Progress {
        padding-top: 50px;
    }
</style>