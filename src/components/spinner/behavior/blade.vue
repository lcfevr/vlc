<template>
    <div class="vlc-spinner-blade" :style="spinnerStyle">
        <div class="blade" :class="'blade-' + i" :style="bladeStyle" v-for="i in 12"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import props from '../props';

    export default {
        mixins: [props],
        computed: {
            bladeStyle() {
                if (this.color) {
                    return {
                        backgroundColor: this.color,
                    };
                }
            }
        }
    };
</script>