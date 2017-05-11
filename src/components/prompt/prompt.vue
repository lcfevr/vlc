<template>

        <Modal v-model="visible"  :width="width" :style="styles" :mask-closable="maskClosable">

            <div class="vlc-modal-header-inner ellipse-fir" v-html="title" slot="header"></div>
            <div class="vlc-modal-body-inner"  slot="body">
                <div class="vlc-prompt-content">
                    <span class="vlc-prompt-spec">{{spec}}</span>
                    <input v-model="text" type="text" :placeholder="placeholder" />
                    <div class="vlc-prompt-error" v-if="!!message" v-html="message"></div>
                </div>
            </div>
            <template slot="footer">
                <button class="vlc-prompt-button vlc-prompt-button-sure"  @click="ok">{{okText}}</button>
                <button class=" vlc-prompt-button vlc-prompt-button-cancle"  @click="cancle">{{cancleText}}</button>
            </template>

        </Modal>

</template>

<script>

    import Modal from '../modal/modal.vue'
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
            body:String,
            spec:{
                type:String,
                default:'提示',
            },
            validator:{
                type:[Object,RegExp],
                default:null
            },
            invalid:Boolean,
            message:String

        },
        data(){
            return {
                visible:this.value,
                buttonLoading:false,
                text:this.val,
                support:this.invalid
            }
        },
        components:{
            Modal
        },
        watch:{
            val(val){
                this.text = val
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

                this.$emit('on-ok',this.text)
            },
            cancle(){
                this.visible = false;

                this.$emit('on-cancle')
            },

        },

    }
</script>