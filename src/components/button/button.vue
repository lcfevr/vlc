<template>
    <div :class="classes" >
        <button :style="styles" :loading="loading" :class="buttonClass" :disabled="disabled" @click="emit">
            <i v-if="loading">a</i>
            <slot name="button-inner"><span>确定</span></slot>
        </button>
    </div>
</template>

<script>

    const prefixCls = 'vlc-button';
    export default {
        name:'Button',
        props: {
            type: {
                type: String,
                default: 'normal',
                validator: (val) => {
                    return ['success', 'loading', 'normal', 'warning', 'danger', 'text'].indexOf(val) > -1
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
            loading:Boolean,

        },
        data(){
            return {}
        },
        computed: {
            classes(){

                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-circle`]: this.circle
                    }
                ]
            },
            buttonClass(){
                return [
                    `${prefixCls}-btn`,
                    {
                        [`${prefixCls}-success`]: this.type == 'success',
                        [`${prefixCls}-loading`]: this.type == 'loading',
                        [`${prefixCls}-normal`]: this.type == 'normal',
                        [`${prefixCls}-warning`]: this.type == 'warning',
                        [`${prefixCls}-danger`]: this.type == 'danger',
                        [`${prefixCls}-text`]: this.type == 'text',
                        [`${prefixCls}-disabled`]: this.disabled,
                        
                    }
                ]
            }
        },

        methods:{
            emit(){
                if (this.disable || this.loading) return;
                this.$emit('on-click')
            }
        }
    }
</script>

<style lang="less">
    @width: 40px;
    .vlc-button {

        width: -webkit-fill-available;
        overflow: hidden;
        height: 40px;
    }

    .vlc-button.vlc-button-circle {

        width: @width;
        height: @width;
        border-radius: 50%
    }

    .vlc-button .vlc-button-btn {
        width: -webkit-fill-available;
        height: 100%;
        border:1px solid;
    }

    .vlc-button-success {
        background: #0c6;
        color: #fff;
        border-color: #0c6;
    }

    .vlc-button-danger {
        color: #fff;
        background-color: #f30;
        border-color: #f30;
    }

    .vlc-button-warning {
        color: #fff;
        background-color: #f90;
        border-color: #f90;
    }

    .vlc-button-normal {
        color: #fff;
        background-color: #39f;
        border-color: #39f;
    }

    .vlc-button-text {
        color: #657180;
        background-color: transparent;
        border-color: transparent;
    }

    .vlc-button-btn.vlc-button-disabled {
        border-color: #c3cbd6;
        color: #ffffff;
        background: #c3cbd6;
    }
</style>