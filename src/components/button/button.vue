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
   @import "../../styles/components/button";
</style>