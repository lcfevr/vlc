<template>
    <div :class="['v-lc-checkBoxGroup',vertical?'v-lc-checkBoxGroup-vertical':'']">
        <slot></slot>
    </div>
</template>

<script>


    export default {
        name:'checkBoxGroup',
        props:{
            model:{
                type:Array
            },
            single:{
                type:Boolean,
                default:false
            },
            vertical:{
                type:Boolean,
                default:false
            }

        },
        methods:{
            change(data){

                this.model = data;
                this.$emit('on-change',data);
                this.$dispatch('on-form-change',data)
            },
            updateModel(){
                let model = this.model;
                this.$children.forEach((child)=>{
                    child.model = model;
                    child.select = model.indexOf(child.value) >= 0;
                    child.isGroup = true;

                })
            }
        },
        compiled(){
          this.updateModel()
        },
        watch:{
            model(){
                this.updateModel()
            }
        }
    }
</script>

<style scoped>
    .v-lc-checkBoxGroup-vertical {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>