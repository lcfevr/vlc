<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>

    import {findComponentsDownward} from "../../utils/util"
    const prefixCls = 'vlc-radioBoxGroup'
    export default {
        name:'radioBoxGroup',
        props:{
            value:{
                type:[String,Boolean,Number]
            },
            vertical:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.updateModel()
        },
        data(){
            return {
                currentValue:this.value,
                children:findComponentsDownward(this,'radioBox')
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-vertical`]:this.vertical
                    }
                ]

            }
        },
        methods:{
            change(data){
                this.currentValue = data.value;
                this.updateModel();
                this.$emit('input',data.value);
                this.$emit('on-change',data.value);
                this.$emit('on-form-change',data.value)
            },
            updateModel(){
                let value = this.value;
                this.children = findComponentsDownward(this,'radioBox');
                this.children.forEach((child)=>{
                    child.model = value == child.label;
                    child.isGroup = true;

                })
            }
        },
        watch:{
            value(){
                this.updateModel();
            },
        }
    }
</script>

<style scoped >
    .vlc-radioBoxGroup-vertical {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>