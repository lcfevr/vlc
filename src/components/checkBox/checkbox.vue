<template>
    <label class="v-lc-checkbox">
        <span :class="['v-lc-checkbox-wrapper',select?'v-lc-checkbox-checked':'',disable?'v-lc-checkbox-disable':'']">
            <span :class="['v-lc-checkbox-inner']"></span>
              <input type="checkbox" v-if="!isGroup" :disabled="disable" :value="value" v-model="checked"  @change="change"  class="v-lc-checkbox-input noselect "/>
              <input type="checkbox"  v-else :disabled="disable" :value="value" v-model="model" @change="change"   class="v-lc-checkbox-input noselect "/>
        </span>
        <slot v-if="show"><span v-el:slot>{{value}}</span></slot>
    </label>

</template>


<script>


    export default {
        name:'checkBox',
        data(){
            return {
                select:false,
                model:[],
                isGroup:false,
                show:true
            }
        },
        ready(){
            if (this.$parent && this.$parent.$options.name == 'checkBoxGroup') {
                this.isGroup = true;
            }

            if (!this.isGroup) {
                this.select = this.checked;
                if (this.$els.slot && this.$els.slot.innerHtml == '') {
                    this.show = false
                }
            }
        },
        props:{

            disable:{
                type:Boolean,
                default:false
            },
            value:{
                type:[Boolean,String,Number],
            },
            checked:{
                type:Boolean,
                default:false
            },
        },
        methods:{
            change(e){
                if (this.disable)  return;
                this.select = e.target.checked;
                if (this.isGroup) {
                    this.$parent.change(this.model)
                } else {
                    this.$emit('on-change',this.checked);
                    this.$dispatch('on-form-change',this.checked)
                }
            }
        },
        computed:{

        },
        watch:{
            checked(){
                this.select = this.checked
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