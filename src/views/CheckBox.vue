<template>
    <div class="CheckBox">
        <p>checkbox组合</p>
        <div class="item">
            <CheckBox-group v-model="data" >
                <CheckBox label="中国"></CheckBox>
                <CheckBox label="美国"></CheckBox>
                <CheckBox label="日本"></CheckBox>
            </CheckBox-group>
        </div>

        <div class="item">value:{{data}}</div>
        <p>单个checkbox</p>
        <div class="item"><CheckBox label="苹果" v-model="checked" ></CheckBox></div>
        <div class="item">checked:{{checked}}</div>
        <p>禁用的checkbox</p>
        <div class="item"><CheckBox label="玩具" disable></CheckBox></div>
    </div>
</template>

<script>

    export default {
        name: "check-box",
        data(){
          return {
              data: [],
              visible: true,
              checked:false
          }
        },

    }
</script>

<style lang="less" scoped>
    .CheckBox {
        padding-top: 100px;
        p {
            width: 100%;
            font-weight: bold;
            font-size: 16px;
            margin: 20px 0;
        }

        .item{
            width: 100%;
            display: flex;
            justify-content: center;

        }
    }
</style>