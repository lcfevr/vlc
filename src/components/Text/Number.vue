<template>

    <div :class="classes" :style="containerStyle">
        <span :class="reduceClasses" :style="getChangeStyle" @click="change('reduce',downDisabled)">
            <slot name="reduce">-</slot>
        </span>
        <label :class="wrapperClasses">
            <input type="number"
                   :style="inputStyle"
                   :min="min"
                   :max="max"
                   :step="step"
                   :value="currentValue"
                   :autocomplete:="autocomplete"
                   @input="changeInput"
                   @focus="focusInput"
                   @blur="blurInput"
                   @change="onChangeInput"
                   @keyup.38="change('reduce',downDisabled)"
                   @keyup.40="change('add',upDisabled)"
            />
        </label>
        <span :class="addtionClasses" :style="getChangeStyle" @click="change('add',upDisabled)">
            <slot name="add">+</slot>
        </span>
    </div>
</template>

<script>

    import Input from '../../mixin/input'
    const prefixCls = 'vlc-number';
    export default {
        name:'Number',
        mixins:[Input],
        props: {
            min: {
                type: [Number, String],
                default: -Infinity
            },
            max: {
                type: [Number, String],
                default: Infinity
            },
            value: [Number, String],
            step: {
                type: Number,
                default: 2
            },

            width:{
                type:Number,
                default:50
            },
            height: {
                type: Number,
                default: 20
            },
            numberStyle:{
                type:Object,
                default(){
                    return {}
                }
            },
            containerStyle:{
                type:Object,
                default(){
                    return {}
                }
            },


        },
        data(){
            return {
                upDisabled: this.disabled,
                downDisabled: this.disabled,
                currentValue: this.value
            }
        },
        mounted(){
            this.changeVal(this.currentValue)
        },
        methods: {
            changeInput(e){
                let val = e.target.value.trim();
                const min = this.min;
                const max = this.max;
                val < min ? val = min : val = val;
                val > max ? val = max : val = val;
                this.setValue(val);
                e.target.value = this.currentValue;
                this.$emit('on-input',e)
            },
            setValue(val){
                this.currentValue = val;
                this.$emit('input', val)
            },
            changeVal (val) {
                if (!isNaN(val) || val === 0) {
                    val = Number(val);
                    const step = this.step;

                    this.upDisabled = val + step > this.max;
                    this.downDisabled = val - step < this.min;
                } else {
                    this.upDisabled = true;
                    this.downDisabled = true;
                }
            },
            change (type,disabled){

                if (this.disabled) return false;

                const val = Number(this.currentValue);

                const step = this.step;

                if (isNaN(val)) return false;

                if (type == 'reduce' && !disabled) {

                    let distance = val - step;

                    distance < this.min ? distance = this.min : distance = distance;

                    this.setValue(distance)
                } else if (type == 'add' && !disabled) {

                    let distance = val + step;

                    distance > this.max ? distance = this.max : distance = distance;

                    this.setValue(distance)
                }

            }


        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            reduceClasses(){
                return [
                    `${prefixCls}-changevalue`,
                    {
                        ['disabled']:this.downDisabled
                    }
                ]
            },
            addtionClasses(){
                return [
                    `${prefixCls}-changevalue`,
                    {
                        ['disabled']:this.upDisabled
                    }
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`
                ]
            },

            getChangeStyle(){

                return {
                    width: `${this.height}px`,
                    height: `${this.height}px`,
                }
            },
            inputStyle(){
                return Object.assign({},this.numberStyle,{
                    width:`${this.width}px`,
                    height:`${this.height}px`
                })
            }
        },

        watch: {
            value(val){
                this.currentValue = val;

            },
            currentValue(val){
                this.changeVal(val);
            },

        }
    }
</script>

