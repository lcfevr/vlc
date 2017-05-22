<template>
    <div>
        <transition name="vlc-ani-fade">
            <div class="mask" v-show="visible" @click="maskClose"></div>
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
                default:false
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
            maskClose(){
                if (this.maskClosable) this.visible = false
            }

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
    @import "../../styles/components/actionSheet";

</style>