<template>
    <div :class="classes">
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
            fixed: {
                type: Boolean,
                default: true
            },
            title: String
        },
        computed: {
            classes() {
                return [
                    `${prefixCls}`,
                    {
                      [`${prefixCls}-fixed`]: !!this.fixed
                    }
                ]
            }
        },
        methods: {
            back() {
                window.history.back();
            }
        }
    }
</script>