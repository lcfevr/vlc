<template>
    <div :class="['v-lc-radioBoxGroup',vertical?'v-lc-radioBoxGroup-vertical':'']">
        <slot></slot>
    </div>
</template>

<script>


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
                model:this.value
            }
        },
        methods:{
            change(data){
                this.model = data.value;
                this.updateModel();
                this.$emit('on-change',data.value);
                this.$emit('on-form-change',data.value)
            },
            updateModel(){
                let model = this.value;
                this.$children.forEach((child)=>{
                    child.select = model == child.model;
                    child.isGroup = true;

                })
            }
        },
        watch:{
            model(){
                this.updateModel()
            }
        }
    }
</script>

<style scoped >
    .v-lc-radioBoxGroup-vertical {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>