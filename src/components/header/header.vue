<template>
    <header :class="classes">
        <div class="v-lc-header-button left">
            <slot name="left">
                返回
            </slot>
        </div>
        <div class="title ellipse-fir">{{title}}</div>
        <div class="v-lc-header-button right">
            <slot name="right">分享</slot>
        </div>
    </header>
</template>

<script>
    const prefixCls = 'v-lc-header';

    export default {
        name:'header',
        props:{
            fixed:{
                type:Boolean,
                default:true
            },
            title:String

        },
        computed:{
            classes () {
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-fixed`]: !!this.fixed
                    }
                ]
            }
        }


    }
</script>

<style  lang="less">
    .v-lc-header {
        display:flex;
        align-items: center;
        white-space: nowrap;
        text-align: center;
        padding:0 10px;
        color: #ffffff;
        height:45px;
        line-height:1;
        background: #39f;
        position: relative;
    }

    .v-lc-header.v-lc-header-fixed {
        position: fixed;
        top:0;
        left:0;
        right:0;
        z-index:1;
    }

    .v-lc-header .title {
        flex:1;
        font-size:inherit;
        font-weight:400;
    }

    .v-lc-header .v-lc-header-button {
        flex:.5;
        line-height: 1;
    }

    .v-lc-header .left {
        text-align: left;
    }

    .v-lc-header .right {
        text-align: right;
    }
</style>