<template>
    <div :class="classes">
        <input type="checkbox" v-model="currentValue" :id="name" :class="inputCheckClasses">
        <label :for="name" :class="sizeClasses"></label>
    </div>
</template>

<script>
    import {random_str} from '../../utils/util'
    const prefixCls = 'vlc-switch';
    export default {
        name:'SwitchBar',
        props: {
            id:{
                type:String,
            },
            value:{
                type:Boolean,
                default:false
            },
            size:{
                type:String,
                default:'small',
                validator(val){
                    return ['small','large'].indexOf(val) > -1
                }
            }
        },
        data(){
            return {
                name:this.id,
                currentValue:this.value
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            inputCheckClasses(){
                return [
                    `${prefixCls}-checkbox`,
                    'hidden'

                ]
            },
            sizeClasses(){
                return [
                    `${prefixCls}-ui`,
                    {
                        ['small']:this.size === 'small'
                    }
                ]
            }
        },
        mounted(){

            if (!this.id) {
                this.name = Date.now()+"_"+random_str();
            }

        },
        watch:{
            value(val){

                this.currentValue = val

            },

            id(val){
               this.name=val
            },

            currentValue(val){

                this.$emit('input',val)

            }

        }
    }
</script>