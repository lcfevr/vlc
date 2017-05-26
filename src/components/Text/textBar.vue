<template>
    <div class="vlc-textBar" :style="styles">
        <label :class="['vlc-textBar-input']" :style="inputStyles" v-if="type !== 'textarea'">
            <input
                    :type="type"
                    :autofocus="autofocus"
                    :value="currentVal"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :maxlength="maxLength"
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

        <label :class="['vlc-textBar-textarea']" v-else>
            <textarea
                    :class="textareaClass"
                    :type="type"
                    :autofocus="autofocus"
                    :value="currentVal"
                    :placeholder="placeholder"
                    :readonly="readonly"
                    :maxlength="maxLength"
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
            maxLength:{
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
                currentVal:   this.value
            }
        },
        computed:{
            textareaClass(){
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

