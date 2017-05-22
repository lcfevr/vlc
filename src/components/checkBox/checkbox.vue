<template>
    <label :class="classes">
        <span :class="wrapperClasses">
            <span :class="innerClasses"></span>
              <input type="checkbox" v-if="!isGroup" :disabled="disable" :checked="currentValue" @change="change"
                     class="vlc-checkbox-input noselect "/>
              <input type="checkbox" v-else :disabled="disable" :value="label" v-model="model" @change="change"
                     class="vlc-checkbox-input noselect "/>
        </span>
        <slot v-if="show"><span ref="slot">{{label}}</span></slot>
    </label>

</template>


<script>
    import {findComponentUpward} from '../../utils/util'
    import Emitter from '../../mixin/emitter'
    const prefixCls = 'vlc-checkbox';
    export default {
        name: 'checkBox',
        data(){
            return {
                model: [],
                isGroup: false,
                show: true,
                currentValue: this.value,
                parent: findComponentUpward(this, 'checkBoxGroup'),

            }
        },
        mixins: [Emitter],
        mounted(){
            this.parent = findComponentUpward(this, 'checkBoxGroup');
            if (this.parent) {
                this.isGroup = true;
            }

            if (!this.isGroup) {
                this.currentValue = this.value;
                if (this.$refs.slot && this.$refs.slot.innerHtml == '') {
                    this.show = false
                }
            }
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-checked`]: this.currentValue,
                        [`${prefixCls}-disable`]: this.disable
                    }
                ]
            },
            innerClasses(){
                return [
                    `${prefixCls}-inner`
                ]
            }
        },
        props: {

            disable: {
                type: Boolean,
                default: false
            },
            value: {
                type: Boolean,
                default: false
            },
            label: {
                type: [String, Number, Boolean],

            },

        },
        methods: {
            change(e){
                if (this.disable)  return;
                const checked = e.target.checked;
                this.currentValue = checked;
                this.$emit('input', checked);
                if (this.isGroup) {

                    this.parent.change(this.model)
                } else {
                    this.$emit('on-change', checked);
                    this.dispatch('on-form-change', checked)
                }
            }
        },

        watch: {

            value(val){
                this.currentValue = val
            }
        }
    }
</script>
