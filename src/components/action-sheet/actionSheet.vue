<template>
    <div>
        <transition name="vlc-ani-fade">
            <div class="mask" v-show="visible"></div>
        </transition>
        <transition name="vlc-ani-slide-up">
            <div :class="classes" v-show="visible">
                <ul class="vlc-actionSheet-wrapper">
                    <li class="vlc-actionSheet-wrapper-action" v-for="(item,key) in actions" @click="emit(item,key)"><span>{{item.text}}</span></li>
                </ul>
                <a href="javascript:;" class="vlc-actionSheet-cancle"  @click="visible = false" v-if="cancleText">{{cancleText}}</a>
            </div>
        </transition>
    </div>

</template>

<script>
    const prefixCls = 'vlc-actionSheet';

    export default {
        name:'action-sheet',
        props:{
            value:{
                type:Boolean,

            },
            items:Array,
            maskClosable:{
                type:Boolean,
                default:true
            },
            cancleText:{
                type:String,
                default:'取消'
            }
        },

        data(){
            return {
                actions:this.items,
                visible:this.value

            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            }
        },
        mounted(){

        },
        methods:{
            emit(item,index){

                if (item.onClick && typeof item.onClick == 'function') {
                    item.onClick(item,index);
                }

                this.visible = false;
            },

        },
        watch:{
            value(val){
                this.visible = val
            },

            visible(val){
                this.$emit('input',val)
            }
        }



    }
</script>

<style lang="less">

    .mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index:10;
        background: rgba(0, 0, 0, 0.4);
    }
    .vlc-actionSheet {
        background: #eeeeee;
        font-size:15px;
        position: fixed;
        bottom:0;
        left:0;
        z-index:10;
        width:100%;
        width:-webkit-fill-available;
        &-wrapper {
            width:100%;
            height:auto;
            margin-bottom:5px;
            &-action {
                width:100%;

                width:-webkit-fill-available;
                height:45px;
                background: #ffffff;
                display: flex;
                justify-content: center;
                align-items: center;

            }

            &-action:nth-of-type(odd) {
                border-bottom:1px solid #eeeeee;
            }
         }

        &-cancle {

            width:-webkit-fill-available;
            height:45px;
            background: #ffffff;
            display: inline-block;
            text-align: center;
            line-height: 45px;
        }
    }
</style>