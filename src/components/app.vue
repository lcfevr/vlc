
<style rel="stylesheet/less" lang="less">
    // @import '../styles/common.css';
    @import '../styles/index';

    .page{
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
<template>
    <div>
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
                    this.direction = 'vlc-ani-slide-left'
                } else {
                    this.direction = 'vlc-ani-slide-right';
                }
            }
        },
        beforeDestroy () {

        },
        methods: {

        },
    }
</script>
