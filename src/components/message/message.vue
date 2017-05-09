<template>
    <transition name="vlc-ani-scale">
        <div>
            <div :class="classes">
                <div class="vlc-message-left" v-if="showLeft"><slot name="message-left"><span>☺</span></slot></div>
                <p :class="wrapperClasses">{{text}}</p>
                <div class="vlc-message-right" v-if="!rightHide"><slot name="message-right"></slot></div>
            </div>
        </div>
    </transition>
</template>

<script>

    const prefixCls = 'vlc-message';
    import {findComponentUpward} from '../../utils/util'
    const defaultDuration = 1;
    export default {

        data (){
            return {
                parent:findComponentUpward(this,'MessageGroup'),
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
        watch:{
            value(val){
                this.visible = val
            },

            type(val){
                this.genre = val
            },


        },
        methods:{

            close(){
                this.parent = findComponentUpward(this,'MessageGroup')
                this.closeTimer();
                this.onClose();

                this.parent.remove(this.name)
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
            if (this.duration) {

                this.timer = setTimeout(()=>{

                    this.close();
                },this.duration*1000)
            }

        },
        beforeDestroy(){
            this.closeTimer()
        }

    }
</script>