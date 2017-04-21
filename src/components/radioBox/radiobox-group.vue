<template>
    <div :class="['v-lc-radioBoxGroup',vertical?'v-lc-radioBoxGroup-vertical':'']">
        <slot></slot>
    </div>
</template>

<script>


    export default {
        name:'radioBoxGroup',
        props:{
            model:{
                type:[String,Boolean,Number]
            },
            vertical:{
                type:Boolean,
                default:false
            }
        },
        compiled(){
            this.updateModel()
        },
        methods:{
            change(data){
                this.model = data.value;
                this.updateModel();
                this.$emit('on-change',data.value);
                this.$emit('on-form-change',data.value)
            },
            updateModel(){
                let model = this.model;
                this.$children.forEach((child)=>{
                    child.select = model == child.value;
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