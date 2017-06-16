<template>
    <div class="vlc-spinner-snake" :style="spinnerStyle"></div>
</template>

<script>
    import props from '../props';

    export default {
        mixins: [props],
        computed: {
            spinnerStyle() {
                let style = {};

                if (this.size) {
                    let size = Math.ceil(this.size / 8);

                    style.height = this.size + 'px';
                    style.width = this.size + 'px';
                    style.borderWidth = size + 'px';
                }

                if (this.color) {
                    style.borderTopColor = this.color;
                    style.borderLeftColor = this.color;
                    style.borderBottomColor = this.color;
                }

                return style;
            }
        }
    };
</script>