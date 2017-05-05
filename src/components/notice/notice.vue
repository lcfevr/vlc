<template>
    <span>
    <transition :name="transitionName">
        <div class="v-lc-notice"  :style="styles">
            <div class="" v-html="content"></div>
            <a class="v-lc-notice-close" v-if="closable" @click="close"></a>
        </div>
    </transition>
    </span>
</template>

<script>


    export default {

        props:{
            duration:{
                type:Number,
                default:1.5
            },
            styles:{
                type:Object
            },

            content:{
                type:[String,Number],
                default(){
                    return ''
                }
            },
            closable:{
                type:Boolean,
                default:false
            },
            transitionName:String,
            onClose:{
                type:Function,
                default:function(){}
            },
            key:{
                type:String,

                required:true
            }
        },
        computed:{

        },
        data(){
            return {
                closeTimer:null
            }
        },
        methods:{
            close(){
                this.clearCloseTimer();
                this.onClose();
                this.$parent.close(this.key)

            },

            clearCloseTimer(){

                if (this.closeTimer) {

                    clearTimeout(this.closeTimer);
                    this.closeTimer = null;
                }
            }
        },
        mounted(){

            this.clearCloseTimer();

            if (this.duration != 0) {

                this.closeTimer = setTimeout (() => {

                    this.close();
                },this.duration*1000)
            }

        },
        beforeDestroy(){
            this.clearCloseTimer()
        }
    }
</script>