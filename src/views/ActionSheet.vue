<template>
    <div class="ActionSheet">
        <VButton width="50%" @click="visible = true"></VButton>
        <ActionSheet :items="actionSheet" v-model="visible">

        </ActionSheet>
    </div>
</template>

<script>
    export default {
        name: "action-sheet",
        data(){
            return {
                visible:false,
                actionSheet:[
                    {text: '提交'},
                    {text: '确定'},
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .ActionSheet {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
</style>