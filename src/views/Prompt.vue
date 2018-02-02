<template>
    <div class="Prompt">
        <VButton width="50%" @click="showPrompt">弹出Prompt</VButton>
    </div>
</template>

<script>
    export default {
        name: "prompt",
        data(){
            return {

            }
        },
        methods:{
            showPrompt(){
                this.$Prompt.info({title:'Prompt',spec:'ccc',text:'vvvv'})
            }
        }

    }
</script>

<style lang="less" scoped>
    .Prompt {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>