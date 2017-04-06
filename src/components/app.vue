<style scoped>
    @import '../styles/common.css';

    .page{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>
<template>
    <div>
        <router-view   :transition="direction" class="animated page"></router-view>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                direction:'forward'
            }
        },
        ready () {

            this.$router.beforeEach(t => {

                var fd = t.from.depth || 0;
                var td = t.to.depth || 0;

                if (!t.from.path || fd === td) {
                    this.$root.$data.direction = 'flip';
                } else if (fd < td) {
                    this.$root.$data.direction = 'forward';
                } else if (fd > td) {
                    this.$root.$data.direction = 'back';
                }

                this.$nextTick(() => t.next());
            });

        },
        beforeDestroy () {

        },
        methods: {

        },
        transitions:{
            'forward':{
                enterClass:'fadeInLeft',
                leaveClass:'fadeOutRight'
            },
            'back':{
                enterClass:'fadeInRight',
                leaveClass:'fadeOutLeft'
            },
            'flip':{
                enterClass:'fadeIn',
                leaveClass:'fadeOut'
            }
        }
    }
</script>
