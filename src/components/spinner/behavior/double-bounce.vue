<template>
    <div class="vlc-spinner-double-bounce" :style="spinnerStyle">
        <div class="bounce" :class="'bounce-' + i" :style="bounceStyle" v-for="i in 2"></div>
    </div>
</template>

<script>
    import props from '../props';

    export default {
        mixins: [props],
        computed: {
            bounceStyle() {
                if (this.color) {
                    return {
                        backgroundColor: this.color
                    };
                }
            }
        }
    };
</script>