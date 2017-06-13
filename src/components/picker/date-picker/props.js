/**
 * Created by admin on 2017/6/13.
 */
export default  {
    props: {
        initYear: {
            type: [String, Number],
            default: new Date().getFullYear()
        },
        initMonth: {
            type: [String, Number],
            default: new Date().getMonth()+1
        },
        initDay: {
            type: [String, Number],
            default: new Date().getDate()
        },
        year: {
            type: [Boolean, Array],
            default: true
        },
        month: {
            type: [Boolean, Array],
            default: true
        },
        day: {
            type: [Boolean, Array],
            default: true
        },
        valueSeparator:{
            type:String,
            default:'/'
        }
    },
}