<template>
    <transition name="vlc-ani-fade">
        <div class="vlc-Indicator" v-show="visible" @touchmove.prevent>
            <div class="vlc-Indicator-container">
                <div class="vlc-Indicator-wrapper">
                    <Spinner :size="size" :type="type" :color="color"></Spinner>
                    <span :style="{color:color}">{{text}}</span>
                </div>
            </div>
        </div>
    </transition>

</template>
<script>

    import Spinner from '../spinner'
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