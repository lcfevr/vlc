/**
 * Created by admin on 2017/6/16.
 */
export default {
    props: {
        size: {
            type: [Number, String],
            coerce: Number
        },
        color: {
            type: String
        },

    },
    computed: {
        spinnerStyle() {
            if (this.size) {
                return {
                    height: this.size + 'px',
                    width: this.size + 'px'
                };
            }
        }
    }
};