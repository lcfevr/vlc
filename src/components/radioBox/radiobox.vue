<template>
    <label :class="classes">
        <span :class="wrapperClasses">
            <span class="vlc-radiobox-inner">
                <input type="radio"
                       :disabled="disable"
                       :checked="model"
                       @change="change"
                       class="vlc-radiobox-input"/>
            </span>
        </span>
        <slot v-show="show"><span ref="slot">{{label}}</span></slot>
    </label>
</template>

<script>
    import {findComponentUpward} from '../../utils/util'
    import Emitter from '../../mixin/emitter'
    const prefixCls = 'vlc-radiobox';
    export default {
        name: 'radioBox',
        mixins: [Emitter],
        props: {
            disable: {
                type: Boolean,
                default: false
            },
            label: {
                type: [Number, String]
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`,
                ]
            },

            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-checked`]: this.model,
                        [`${prefixCls}-disable`]: this.disable,

                    }
                ]
            }
        },
        data(){
            return {
                isGroup: false,
                model: this.value,
                parent: findComponentUpward(this, 'radioBoxGroup')
            }
        },
        mounted(){
            if (this.parent) {

                this.isGroup = true;
            }

            if (!this.isGroup) {

                this.updateModel()

            } else {
                this.parent.updateModel();
            }

        },
        methods: {
            updateModel (){
                this.model = this.value
            },
            change(e){
                if (this.disable)  return;
                const checked = e.target.checked;
                this.model = checked;
                this.$emit('input', checked);

                if (this.isGroup && this.label !== undefined) {
                    this.parent.change({value: this.label, checked: this.model})
                }

                if (!this.isGroup) {
                    this.$emit('on-change', checked);
                } else {

                }
            }

        },

        watch: {

            value(){
                this.updateModel()
            },

        }
    }
</script>