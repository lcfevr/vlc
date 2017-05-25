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
                    @change="onChangeInput"
            >

            </textarea>
        </label>
    </div>
</template>

<script>
    const prefixCls = 'vlc-textBar';
    export default {
        name: 'TextBar',
        props: {
            rows:{
                type:Number,
            },
            autofocus:{
                type:Boolean,
                default:true
            },
            disable:{
                type:Boolean,
                default:false
            },
            type:{
                type:String,
                default:'text'
            },
            value: {
                type: [String, Number],
                default:''
            },

            styles:{
                type:Object
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
            autocomplete:{
                type:String,
                validator(val){
                    return ['on','off'].indexOf(val)
                },
                default:'off',
            },
            name:String,
            readonly:{
                type:Boolean,
                default:false
            },

        },
        data(){
            return {
                currentVal: this.value,


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
                this.currentVal = e.target.value;
                this.$emit('input',this.currentVal)
            },
            blurInput(e){
                this.$emit('on-blur',e)
            },
            focusInput(e){
                this.$emit('on-focus',e)
            },

            enterInput(e){
                this.$emit('on-enter',e)
            },

            onChangeInput(e){
                this.$emit('on-change',e)
            }

        },
        watch: {
            value(val){
                this.currentVal = val
            },
            currentVal(val){

                this.$emit('input', val);
                this.$emit('on-input',val);
            },

        }
    }
</script>

<style lang="less">
    .vlc-textBar {
        background: #ffffff;
        overflow: hidden;
        &-input {
            width:100%;
            display: inline-block;

            & > input {
                border:1px solid #eeeeee;
                border-radius:5px;
                height:30px;
                box-sizing: border-box;
                width:100%;
                padding-left:10px;
                color: #666666;

            }

            & > input:focus {
                transition:border-color .2s linear;
                will-change:border-color;
                border-color:#39f;
                box-shadow:0 0 2px #39f

            }

            & > input::placeholder {
                color: #e5e5e5;
                font-family: "Microsoft Tai Le";
            }
        }


        &-textarea {

            width:100%;


           & > textarea {
               padding-left:10px;
               box-sizing: border-box;
               height:70px;
               border:1px solid #eeeeee;
               border-radius:5px;
               color: #666666;
               font-size:12px;
            }

            & > textarea:focus {
                transition:border-color .2s linear;
                will-change:border-color;
                border-color:#39f;
                box-shadow:0 0 2px #39f

            }

            & > textarea::placeholder {
                color: #e5e5e5;
                font-family: "Microsoft Tai Le";
            }
        }



        &-tip {
            flex:1;
            align-self: center;
            text-indent: 3px;
            line-height:1;
            font-size:12px;
        }

        &-tip.success{
            color:lightgreen;
        }

        &-tip.error {
            color: red;
        }
    }






</style>