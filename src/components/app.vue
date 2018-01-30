
<style rel="stylesheet/less" lang="less">
    // @import '../styles/common.css';

    @import '../../src/styles/index';

    .page{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    html,body {
        height: 100%;
    }

    #app {
        height: 100%;
    }
</style>
<template>
    <div id="app">
        <transition :name="direction">

            <router-view   class="page"></router-view>

        </transition>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                direction:'vlc-ani-fade'
            }
        },
        mounted () {

        },
        watch:{
            $route(to,from){

                let toDepth = to.path.split('/').length;
                let fromDepth = from.path.split('/').length;

                if (toDepth == fromDepth) {
                    this.direction = 'vlc-ani-fade'
                } else if(toDepth > fromDepth) {
                    this.direction = 'vlc-ani-left'
                } else {
                    this.direction = 'vlc-ani-right';
                }
            }
        },
        beforeDestroy () {

        },
        methods: {

        },
    }
</script>

