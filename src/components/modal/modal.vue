<template>
    <div>
    <transition name="vlc-ani-fade">
        <div class="v-lc-modal-mask" v-show="visible"  @click="mask"></div>
    </transition>

    <span>

    <transition name="vlc-ani-scale">
        <div class="v-lc-modal " :style="getWrapperStyle" v-show="visible" >
            <div class="v-lc-modal-header" v-if="showHead"><slot name="header"><div class="v-lc-modal-header-inner ellipse-fir">{{title}}</div></slot></div>
            <div class="v-lc-modal-body"><slot name="body">{{body}}</slot></div>
            <div class="v-lc-modal-footer" v-if="!footerHide">
                <slot name="footer">
                    <button class="v-lc-modal-button v-lc-modal-button-sure" @click="ok">{{okText}}</button>
                    <button class=" v-lc-modal-button v-lc-modal-button-cancle" @click="close" v-if="cancleText">{{cancleText}}</button>
                </slot>
            </div>
        </div>
    </transition>
        </span>
    </div>
</template>

<script>
    import Emitter from '../../mixin/emitter'


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
                showHead:true,
                visible:this.value
            }
        },
        components:{

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
                if (!this.maskClosable) {
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

        },

        mounted(){


            document.addEventListener('keydown',this.EscClose)
        },
        beforeDestroy(){
            document.addEventListener('keydown',this.EscClose)

        }
    }
</script>