<template>
    <div class="Modal">
        <VButton width="50%" @click="showInfo">info</VButton>
        <VButton width="50%" @click="showConfirm">confirm</VButton>
    </div>
</template>

<script>
    export default {
        name: "modal",
        methods:{
            showInfo(){
                this.$Modal.info({body:'这是内容',onOk:function(){EventBus.$Message.show({text:'点击了确定'})},onCancle:function () {
                        EventBus.$Message.show({text:'点击了取消'})
                    }})
            },
            showConfirm(){
                this.$Modal.confirm({body:'这是内容',onOk:function(){EventBus.$Message.show({text:'点击了确定'})},})
            }
        }
    }
</script>

<style lang="less" scoped>
    .Modal {
        height: 100%;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
    }
</style>