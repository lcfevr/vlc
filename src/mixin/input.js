/**
 * Created by admin on 2017/5/26.
 */
export default {
    props:{
        disable:{
            type:Boolean,
            default:false
        },
        autocomplete:{
            type:String,
            validator(val){
                return ['on','off'].indexOf(val)
            },
            default:'off',
        },
        styles: {
            type: Object,
            default(){
                return {}
            }
        },
        focus:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        blurInput(e){
            this.$emit('on-blur',e)
        },
        focusInput(e){
            if (this.focus) e.target.select();
            this.$emit('on-focus',e)
        },
        onChangeInput(e){
            this.$emit('on-change',e)
        }
    },

}