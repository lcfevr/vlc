<template>
    <transition name="vlc-ani-fade">
        <div :class="classes" v-show="visible" @touchmove.prevent>
            <div :class="containerClasses">
                <div :class="wrapperClasses">
                    <Spinner :size="size" :type="type" :color="color"></Spinner>
                    <span :style="{color:color}">{{text}}</span>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>

    import Spinner from '../spinner'
    const prefixCls = 'vlc-Indicator'
    export default {
        name:'Indicator',
        props:{
            value:{
                type:Boolean,
                default:false
            },
            color:{
                type:String,
                default:'#ffffff'
            },
            type:{
                type:String,
                default:'snake'
            },
            size:{
                type:[Number,String],
                default:45
            },
            text:{
                type:String,
                default:'加载中...'
            }

        },
        data(){
            return {
                visible:this.value
            }
        },
        components:{
            Spinner
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            containerClasses(){
                return [
                    `${prefixCls}-container`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`
                ]
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