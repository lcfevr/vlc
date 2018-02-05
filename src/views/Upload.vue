<template>
    <div class="Upload">

        <Upload :multiple="true" @on-change-file="onChangeFile" ref="upload"></Upload>


        <template v-if="files.length">

            <img :src="item.base64" v-for="item in files"/>
        </template>

    </div>
</template>

<script>
    export default {
        name: "upload",
        data(){
            return {
                files:[]
            }
        },
        methods:{
            onChangeFile(files){
                this.files = files
            }
        }

    }
</script>

<style lang="less" scoped>
    .Upload {
        height:100%;
        .upload-box {
            width:200px;
            height:100px;
            background: #008cee;
            color: #ffffff;
            text-align: center;
            line-height: 100px;
        }
    }
</style>