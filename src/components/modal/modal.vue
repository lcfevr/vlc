<template>
    <div>
    <transition name="vlc-ani-fade">
        <div class="v-lc-modal-mask" v-show="visible"  @click="mask"></div>
    </transition>



    <transition name="vlc-ani-scale">
        <div class="v-lc-modal " :style="getWrapperStyle" v-show="visible" >
            <div class="v-lc-modal-header" v-if="isHead"><slot name="header"><div slot="header" class="v-lc-modal-header-inner ellipse-fir">{{title}}</div></slot></div>
            <div class="v-lc-modal-body"><slot name="body">{{body}}</slot></div>
            <div class="v-lc-modal-footer" v-if="!footerHide">
                <slot name="footer">
                    <v-button type="primary" @on-click="close" v-if="cancleText">{{cancleText}}</v-button>
                    <v-button type="normal" @on-click="ok" :loading="buttonLoading">{{okText}}</v-button>
                </slot>
            </div>
        </div>
    </transition>

    </div>
</template>

<script>
    import Emitter from '../../mixin/emitter'
    import VButton from '../button'

    export default {
        name:'Modal',
        mixins:[Emitter],

        props:{
            value: {
                type: Boolean,
                default: false
            },
            closable: {
                type: Boolean,
                default: true
            },
            maskClosable: {
                type: Boolean,
                default: true
            },
            title: {
                type: String
            },
            width: {
                type: String,
                default: '220px'
            },
            okText: {
                type: String,
                default () {
                    return '确定';
                }
            },
            cancleText: {
                type: String,
                default () {
                    return '取消';
                }
            },
            loading: {
                type: Boolean,
                default: false
            },
            styles: {
                type: Object
            },
            className: {
                type: String
            },
            showHead:{
                type:Boolean,
                default:true
            },
            footerHide: {
                type: Boolean,
                default: false
            },
            scrollable: {
                type: Boolean,
                default: false
            },
            body:String
        },
        data(){
            return {
                isHead:this.showHead,
                visible:this.value,
                buttonLoading:false
            }
        },

        components:{
            VButton
        },
        computed:{
            getWrapperStyle(){

                let style = {};

                let styleWidth = {

                    width: `${this.width}`
                }

                let customStyle = this.styles ? this.styles:{}

                Object.assign(style, styleWidth, customStyle);

                return style;

            },

        },
        methods:{
            close(){

                this.visible = false;
                this.$emit('on-cancle')
            },
            mask(){
                if (!this.maskClosable && !this.buttonLoading) {
                    this.close()
                }

            },
            ok(){

                if (this.loading) {

                    this.buttonLoading = true;
                } else {

                    this.visible = false;
                }

                this.$emit('on-ok')

            },
            EscClose (e) {
                if (this.visible && this.closable) {
                    if (e.keyCode === 27) {
                        this.close();
                    }
                }
            },
        },
        watch:{
            value(val) {
                this.visible = val
            },
            showHead(val){
                this.isHead = val
            },


        },

        mounted(){


            document.addEventListener('keydown',this.EscClose)
            console.log(this.isHead)
        },
        beforeDestroy(){
            document.addEventListener('keydown',this.EscClose)

        }
    }
</script>