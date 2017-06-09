<template>

        <Modal v-model="visible"  :width="width" :title="title" :style="styles" :mask-closable="maskClosable">

            <div class="vlc-modal-header-inner ellipse-fir" v-html="title" slot="header"></div>
            <div class="vlc-prompt-body-inner"  slot="body">
                <div class="vlc-prompt-content">
                    <span class="vlc-prompt-spec">{{spec}}</span>
                    <TextBar v-model="text" type="text" :placeholder="placeholder" ></TextBar>
                    <div class="vlc-prompt-error" v-if="!!message" v-html="message"></div>
                </div>
            </div>
            <template slot="footer">
                <v-button :styles="{background:'#ffffff',color:'red'}"  @on-click="ok"><span slot="button-inner">{{okText}}</span></v-button>
                <v-button :styles="{background:'#ffffff',color:'#ccc'}"  @on-click="cancle" ><span slot="button-inner">{{cancleText}}</span></v-button>
            </template>
        </Modal>


</template>

<script>

    import Modal from '../modal/modal.vue'
    import TextBar from '../Text/textBar.vue'
    import VButton from '../button/button.vue'
    export default {
        props:{

            val: {
                type: String,
                default: ''
            },
            value:{
                type:Boolean,
                default:false
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
            spec:{
                type:String,
                default:'提示',
            },
            validator:{
                type:[Object,RegExp],
                default:null
            },

            msg:String,
            placeholderText:String,
            onOk:{
                type:Function,
                default:function(){}
            },
            onCancle:{
                type:Function,
                default:function(){}
            }

        },
        data(){
            return {
                visible:this.value,
                buttonLoading:false,
                text:this.val,
                placeholder:this.placeholderText,
                message:this.msg
            }
        },
        components:{
            Modal,
            TextBar,
            VButton
        },
        mounted(){

        },
        watch:{
            val(val){
                this.text = val
            },
            loading(val) {
                this.buttonLoading = val
            }
        },
        methods:{
            ok(){
                let valid = true;
                if (this.validator) {
                    let type = Object.prototype.toString.call(this.validator);
                    switch (type) {
                        case '[object RegExp]':
                            valid = this.validator.test(this.text);
                            break;
                        case '[object Function]':
                            valid = this.validator(this.text);
                            break;
                        default:
                            valid = true;
                    }
                }
                if (valid !== true) {

                    if (typeof valid === 'string') {
                        this.message = valid;
                    }

                    this.support = true;
                    return;
                }

                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.visible = false;
                }
                if (this.onOk && typeof this.onOk =='function') this.onOk(this.text);
                this.$emit('on-ok',this.text)
            },
            cancle(){
                this.visible = false;
                if (this.onCancle && typeof this.onCancle =='function') this.onCancle();

                this.$emit('on-cancle')
            },

        },
        beforeDestroy(){

        }

    }
</script>