<template>
    <div :class="['vlc-checkBoxGroup',vertical?'vlc-checkBoxGroup-vertical':'']" >
        <slot></slot>
    </div>
</template>

<script>

    import {findComponentsDownward} from '../../utils/util'
    import Emitter from '../../mixin/emitter'
    export default {
        name:'checkBoxGroup',
        mixins:[Emitter],
        props:{
            value:{
                type:Array,
                default:()=>[]
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
        data(){
          return {
              currentValue:this.value,
              childrens:[]
          }
        },
        methods:{
            change(data){
                console.log(data)
                this.currentValue = data;
                this.$emit('input', data);
                this.$emit('on-change',data);
                this.dispatch('on-form-change',data)
            },
            updateModel(){
                let model = this.value;
                this.childrens = findComponentsDownward(this,'checkBox');
                if(this.childrens) {
                    this.childrens.forEach((child)=>{

                        child.model = model;
                        child.currentValue = model.indexOf(child.label) >= 0;
                        child.isGroup = true;
                    })
                }

            }
        },
        mounted(){

          this.updateModel()
        },
        watch:{
            value(){
                this.updateModel()
            }
        }
    }
</script>


<style scoped>
    .vlc-checkBoxGroup-vertical {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
</style>