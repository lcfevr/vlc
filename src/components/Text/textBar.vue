<template>
    <div :class="classes" :style="styles">
        <label :class="inputClasses" :style="inputStyles" v-if="type !== 'textarea'">
            <input
                    :type="type"
                    :autofocus="autofocus"
                    :value="currentVal"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :maxlength="maxlength"
                    :autocomplete="autocomplete"
                    :name="name"
                    :disabled="disable"
                    @input="changeInput"
                    @blur="blurInput"
                    @focus="focusInput"
                    @keyup.enter="enterInput"
                    @change="onChangeInput"
            />
        </label>

        <label :class="textareaClasses" v-else>
            <textarea
                    :type="type"
                    :autofocus="autofocus"
                    :value="currentVal"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :maxlength="maxlength"
                    :name="name"
                    :rows="rows"
                    :disabled="disable"
                    @input="changeInput"
                    @blur="blurInput"
                    @focus="focusInput"
                    @keyup.enter="enterInput"
                    @change="onChangeInput">

            </textarea>
        </label>
    </div>
</template>

<script>
    const prefixCls = 'vlc-textBar';
    import Input from '../../mixin/input'
    export default {
        name: 'TextBar',
        mixins:[Input],
        props: {
            rows:{
                type:Number,
            },
            autofocus:{
                type:Boolean,
                default:true
            },

            type:{
                type:String,
                default:'text'
            },
            value: {
                type: [String, Number],
                default:''
            },

            placeholder:{
                type:[String,Number],
                default:'请输入'
            },
            inputStyles:{
                type:Object,

            },
            maxlength:{
                type:Number
            },
            name:String,
            readonly:{
                type:Boolean,
                default:false
            },

        },
        data(){
            return {
                currentVal:   this.value,
            }
        },
        computed:{
            classes(){

                return [
                    `${prefixCls}`
                ]
            },
            inputClasses(){
                return [
                    `${prefixCls}-input`
                ]
            },
            textareaClasses(){
                return [
                    `${prefixCls}-textarea`
                ]
            }
        },

        mounted(){

        },
        methods:{
            changeInput(e){
                this.currentVal =  e.target.value;

                this.$emit('input',this.currentVal);
                this.$emit('on-input',e)
            },


            enterInput(e){
                this.$emit('on-enter',e)
            },



        },
        watch: {
            value(val){
                this.currentVal =  val
            },
            currentVal(val){

                this.$emit('input', val);
                this.$emit('on-input',val);
            },

        }
    }
</script>

