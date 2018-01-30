<template>
    <div class="Message">
        <VButton width="50%" @click="showMessageTop">
            Top
        </VButton>
        <VButton width="50%" @click="showMessage">
            Center
        </VButton>
        <VButton width="50%" @click="showMessageBottom">
            Bottom
        </VButton>
    </div>
</template>

<script>
    export default {
        name: "message",
       methods:{
            showMessage(){
                this.$Message.show({text: '显示消息'});

            },
            showMessageTop(){
                this.$Message.show({text: '显示消息',position:'top'});
            },
           showMessageBottom(){
               this.$Message.show({text: '显示消息',position:'bottom'});
           }
       }

    }
</script>

<style scoped>
    .Message {
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }
</style>