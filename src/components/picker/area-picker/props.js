/**
 * Created by admin on 2017/6/13.
 */
export default {
    props: {
        addressValue:String,
        styles: {
            type: Object,
            default: () => {
            }
        },
        valueSeparator:{
            type:String,
            default:'/'
        }
    },
}