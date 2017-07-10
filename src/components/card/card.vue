<template>
    <div :class="classes">
        <div :class="headerClass">
            <slot name="header"></slot>
        </div>
        <div :class="contentClass">
            <slot>

            </slot>
        </div>
        <div :class="footerClass">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>

    const prefixCls = 'vlc-card';
    export default {
        name:'Card',
        props:{
            width:{
                type:String,
                default:'100%'
            }
        },

        data(){
            return {

            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            headerClass(){
                return [
                    `${prefixCls}-header`,
                    'vlc-1px-bottom'
                ]
            },
            contentClass(){
                return [
                    `${prefixCls}-content`
                ]
            },
            footerClass(){
                return [
                    `${prefixCls}-footer`,
                    'vlc-1px-top'
                ]
            }
        }
    }
</script>