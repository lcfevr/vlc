<template>
    <transition name="vlc-ani-scale">

        <div :class="classes">
            <div class="vlc-message-left" v-if="showLeft"><slot name="message-left"><span>☺</span></slot></div>
            <p :class="wrapperClasses">{{text}}</p>
            <div class="vlc-message-right" v-if="!rightHide"><slot name="message-right"></slot></div>
        </div>

    </transition>
</template>

<script>

    const prefixCls = 'vlc-message';
    const defaultDuration = 1;
    export default {

        data (){
            return {

            }
        },
        props:{
            name:{
                type:[String,Number],
                required:true
            },
            text:{
                type:[Number,String],
                default:''
            },

            duration:{
                type:Number,
                default:1.5
            },
            showLeft:{
                type:Boolean,
                default:false
            },
            rightHide:{
                type:Boolean,
                default:true
            },
            type:{
                type:String,
                default:'normal',
                validator:(val)=>{
                    return ['success','loading','error','normal','warning','danger'].indexOf(val) > -1
                }
            },
            onClose:{
                type:Function,
                default:()=>{}
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
                    `${prefixCls}-text`
                ]
            },

        },

        methods:{

            close(){
                console.log(this.name)
                this.closeTimer();
                this.$parent.remove(this.name);
                this.onClose();

            },
            closeTimer(){

                if(this.timer) {
                    clearTimeout(this.timer);
                    this.timer = null
                }
            },

        },

        mounted(){

            this.closeTimer();

            if (this.duration!==0) {


                this.timer = setTimeout(()=>{
                    this.close();
                },this.duration*1000);

            }
        },
        beforeDestroy(){
            this.closeTimer()
        }

    }
</script>