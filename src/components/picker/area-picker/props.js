/**
 * Created by admin on 2017/6/13.
 */
export default {
    props: {
        initProvince: {
            type: [String, Number],
            default: '110000'
        },
        initCity: {
            type: [String, Number],
            default: '110100'
        },
        initDistrict: {
            type: [String, Number],
            default: '110101'
        },
        styles: {
            type: Object,
            default: () => {
            }
        },
        rootCode: {
            type: [String,Number],
            default: () => '86'
        },
    },
}