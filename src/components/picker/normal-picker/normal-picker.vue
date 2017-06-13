<template>
    <div class="vlc-normal-picker">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>
        <div class="main">
            <picker-slot v-for="item in list" @change="change"></picker-slot>

        </div>
    </div>
</template>

<script>


    export default {

        props:{
            list:{
                type:Array,
                default(){
                    return []
                }
            },

        }
    }
</script>