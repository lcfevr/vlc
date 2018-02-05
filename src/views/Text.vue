<template>
    <div class="Text">
        <div class="item">
            <p class="title">Number</p>
            <Number v-model="number" :min="min" :max="max" :focus="focus" :step="step"></Number>
            <span class="value">value:{{number}}</span>
        </div>

        <div class="item">
            <p class="title">TextBar</p>
            <TextBar v-model="text" type="text"></TextBar>
            <span class="value">value:{{text}}</span>


        </div>

        <div class="item">
            <p class="title">TextBar</p>
            <TextBar v-model="texts" type="textarea" :maxlength="9"></TextBar>
            <span class="value">value:{{texts}}</span>
        </div>


    </div>
</template>

<script>
    export default {
        name: "text",
        data(){
            return {
                number: 1,
                min: 1,
                max: 10,
                step: 2,
                focus: true,
                text:'请输入',
                texts: '正在输入....'
            }
        }
    }
</script>

<style lang="less" scoped>
    .Text {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        .item {
            width: 50%;
            .title  {
                margin-bottom:10px;
                font-weight: bold;

            }
            .value {
                margin-top:10px;
            }

        }
    }
</style>