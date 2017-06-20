<template>
    <div>
        <Popup position="bottom" :mask-closable="maskClosable" v-model="visible" :styles="{background:'transparent'}">
            <div :class="classes" >
                <ul class="vlc-actionSheet-wrapper">
                    <li class="vlc-actionSheet-wrapper-action" v-for="(item,key) in actions" @click="emit(item,key)"><span>{{item.text}}</span></li>
                </ul>
                <a href="javascript:;" class="vlc-actionSheet-cancle"  @click="visible = false" v-if="cancleText">{{cancleText}}</a>
            </div>
        </Popup>
    </div>

</template>

<script>

    import Popup from '../popup'
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


        },
        watch:{
            value(val){
                this.visible = val
            },

            visible(val){
                this.$emit('input',val)
            }
        },
        components:{
            Popup
        }



    }
</script>

<style lang="less">
    @import "../../styles/components/actionSheet";

</style>