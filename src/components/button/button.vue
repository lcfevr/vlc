<template>
    <div :class="classes" :style="wrapperStyles">
        <button :style="styles"  :class="buttonClass" :disabled="disabled" @click="emit">
            <slot name="left"><span class="loading" v-show="loading"><Spinner size="15" color="#eeeeee"></Spinner></span></slot>
            <slot><span>确定</span></slot>
            <slot name="right"></slot>
        </button>
    </div>
</template>

<script>
    import Spinner from '../spinner'
    const prefixCls = 'vlc-button';

    export default {
        name:'VButton',
        props: {
            type: {
                type: String,
                default: 'normal',
                validator: (val) => {
                    return ['success', 'loading', 'normal','primary', 'warning', 'danger', 'text'].indexOf(val) > -1
                }
            },
            styles: {
                type: Object,
                default: () => {

                }
            },
            circle: {
                type: Boolean,
                default: false
            },
            disabled: {
               type: Boolean
            },

            inline:{
                type:Boolean,
                default:false
            },
            width:{
                type:String,
                default:'100%'
            },
            height:{
                type:String,
                default:'40px'

            },
            loading:{
                type:Boolean,
                default:false
            },
            radius:{
                type:Boolean,
                default:true
            },
            border:{
                type:String,
                default(){
                    return 'all'
                }

            }

        },

        computed: {
            classes(){

                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-circle`]: this.circle,
                        [`${prefixCls}-inline`]:this.inline
                    }
                ]
            },
            wrapperStyles(){

                return {
                    display:this.inline ? 'inline-block':'block',
                    width:this.width,
                    height:this.height
                }

            },



            buttonClass(){
                return [
                    `${prefixCls}-btn`,
                    [`vlc-1px-${this.border}`],
                    {
                        [`${prefixCls}-success`]: this.type == 'success',
                        [`${prefixCls}-loading`]: this.type == 'loading',
                        [`${prefixCls}-normal`]: this.type == 'normal',
                        [`${prefixCls}-warning`]: this.type == 'warning',
                        [`${prefixCls}-danger`]: this.type == 'danger',
                        [`${prefixCls}-text`]: this.type == 'text',
                        [`${prefixCls}-primary`]: this.type == 'primary',
                        [`${prefixCls}-disabled`]: this.disabled,
                        [`${prefixCls}-radius`]:this.radius,

                    }
                ]
            }
        },

        components:{
            Spinner
        },

        methods:{
            emit(){
                if (this.disabled || this.loading) return;
                this.$emit('on-click')
            }
        }
    }
</script>
