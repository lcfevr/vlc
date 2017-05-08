<template>
    <transition name="scale">
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

<style lang="less">

    .vlc-message {
        width:100%;
        position: absolute;
        top:0;
        left:0;
        transform: translate3d(-50%,-50%,0);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: normal;
        border-radius:.1rem;
        background: rgba(0,0,0,.7);
        overflow-y: scroll;
    }

    .vlc-message .vlc-message-text {
        width:calc(100% - 30px);
        padding:  0 15px;
        line-height: 25px;
        color: #ffffff;
        font-size: 13px;
        white-space: normal;
    }
</style>