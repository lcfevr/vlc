<template>
    <label :class="classes">
        <span :class="wrapperClasses">
            <span :class="innerClasses"></span>
              <input type="checkbox" v-if="!isGroup" :disabled="disable"  :checked="currentValue"  @change="change"  class="v-lc-checkbox-input noselect "/>
              <input type="checkbox"  v-else :disabled="disable" :value="label" v-model="model" @change="change"   class="v-lc-checkbox-input noselect "/>
        </span>
        <slot v-if="show"><span ref="slot">{{label}}</span></slot>
    </label>

</template>


<script>
    import {findComponentUpward} from '../../utils/util'
    import Emitter from '../../mixin/emitter'
    const prefixCls = 'v-lc-checkbox';
    export default {
        name:'checkBox',
        data(){
            return {

                model:[],
                isGroup:false,
                show:true,
                currentValue:this.value,
                parent:findComponentUpward(this,'checkBoxGroup'),

            }
        },
        mixins:[Emitter],
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
        computed:{
            classes(){
                return  [
                    `${prefixCls}`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-checked`]:this.currentValue,
                        [`${prefixCls}-disable`]:this.disable
                    }
                ]
            },
            innerClasses(){
                return [
                    `${prefixCls}-inner`
                ]
            }
        },
        props:{

            disable:{
                type:Boolean,
                default:false
            },
            value:{
                type:Boolean,
                default:false
            },
            label:{
                type:[String,Number,Boolean],

            },

        },
        methods:{
            change(e){
                if (this.disable)  return;
                const checked = e.target.checked;
                this.currentValue = checked;
                this.$emit('input',checked);
                if (this.isGroup) {

                    this.parent.change(this.model)
                } else {
                    this.$emit('on-change',checked);
                    this.dispatch('on-form-change',checked)
                }
            }
        },

        watch:{

            value(val){
                this.currentValue = val
            }
        }
    }
</script>
<style lang="less">


    .v-lc-checkbox{
        display: inline-block;
        margin-right:.08rem;
    }

    .v-lc-checkBoxGroup-vertical .v-lc-checkbox{
        margin-right:0;
        margin-bottom:.08rem;
    }

    .v-lc-checkbox-wrapper{
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        outline: 0;
        line-height: 1;
        position: relative
    }

    .v-lc-checkbox-inner{
        display: inline-block;
        width: .14rem;
        height: .14rem;
        position: relative;
        top: 0;
        left: 0;
        border: .01rem solid #d7dde4;
        border-radius: .02rem;
        background-color: #fff;
        transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
    }

     .v-lc-checkbox-inner:after{
        content: "";
        display: table;
        width: .04rem;
        height: .08rem;
        position: absolute;
        top: .01rem;
        left: .04rem;
        border: .02rem solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(0);
        transition: all .2s ease-in-out;
    }
    
    .v-lc-checkbox-checked .v-lc-checkbox-inner{
        border-color: #555;
        background-color: #555;
    }

    .v-lc-checkbox-checked .v-lc-checkbox-inner:after{
        content: "";
        display: table;
        width: .04rem;
        height: .08rem;
        position: absolute;
        top: .01rem;
        left: .04rem;
        border: .02rem solid #fff;
        border-top: 0;
        border-left: 0;
        transform: rotate(45deg) scale(1);
        transition: all .2s ease-in-out;
    }

    .v-lc-checkbox-input{
        width:100%;
        height:100%;
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        opacity:0;
        z-index:1;
        cursor: pointer;
    }

    .v-lc-checkbox-disable .v-lc-checkbox-inner{
        background-color: #f3f3f3;
        border-color: #d7dde4;

    }

    .v-lc-checkbox-disable input{
        cursor: not-allowed;
    }

    .v-lc-checkbox-disable.v-lc-checkbox-checked .v-lc-checkbox-inner{
        background-color: #f3f3f3;
        border-color: #d7dde4;
    }


    .v-lc-checkbox-checked.v-lc-checkbox-disable+span{
        color: #f3f3f3;
        cursor: not-allowed;
    }

    .v-lc-checkbox-disable+span{
        color: #f3f3f3;
        cursor: not-allowed;
    }




</style>