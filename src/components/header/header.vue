<template>
    <div :class="classes" v-if="visible">
        <header>
            <div class="left" @click="back">
                <slot name="left"><div>返回</div></slot>
            </div>
            <div class="title vlc-nowrap">{{title}}</div>
            <div class="right">
                <slot name="right"><div>分享</div></slot>
            </div>
        </header>
        <div class="header-place" v-if="fixed"></div>
    </div>
</template>

<script>
    const prefixCls = 'vlc-header';

    export default {
        name: 'header',
        props: {
            value:{
                type:Boolean,
                default:true
            },
            fixed: {
                type: Boolean,
                default: true
            },
            title: String
        },
        data(){
            return {
                visible:false
            }
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-fixed`]: !!this.fixed
                    }
                ]
            },
            isWeixin(){

                return "micromessenger" == window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i)
            },
            isPcWeixin(){
                return "windowswechat" == window.navigator.userAgent.toLowerCase().match(/WindowsWechat/i)
            }
        },
        mounted(){
            if (this.isWeixin || this.isPcWeixin) this.visible = false
        },
        methods: {
            back() {
                window.history.back();
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