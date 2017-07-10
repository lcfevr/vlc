<template>
    <div>
        <Popup position="bottom"   v-model="visible" :styles="{background:'transparent'}">
            <div :class="classes" >
                <ul :class="wrapperClasses">
                    <li :class="wrapperActionClass" v-for="(item,key) in actions" @click="emit(item,key)"><span>{{item.text}}</span></li>
                </ul>
                <a href="javascript:;" :class="cancleClass"  @click="visible = false" v-if="cancleText">{{cancleText}}</a>
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
            cancleText:{
                type:String,
                default:'取消'
            }
        },

        data(){
            return {
                actions:this.items,
                visible:this.value,
                offsetHeight:'auto'

            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`
                ]
            },
            wrapperActionClass(){
                return [
                    `${prefixCls}-wrapper-action`
                ]
            },
            cancleClass(){
                return [
                    `${prefixCls}-cancle`
                ]
            }
        },
        mounted(){

            this.offsetHeight = this.$el.querySelector('.vlc-actionSheet').offsetHeight;


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
