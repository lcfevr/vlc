<template>
    <label class="v-lc-radiobox">
        <span :class="['v-lc-radiobox-wrapper',select?'v-lc-radiobox-checked':'',disable?'v-lc-radiobox-disable':'']">
            <span class="v-lc-radiobox-inner">
                <input type="radio"
                       :disabled="disable"
                       :checked="select"
                       @change="change"

                       class="v-lc-radiobox-input"/>
            </span>
        </span>
        <slot v-show="show"><span ref="slot">{{model}}</span></slot>
    </label>
</template>

<script>

    const prefixCls = 'v-lc-radiobox';
    export default {
        props:{
            disable:{
                type:Boolean,
                default:false
            },
            value:{
                type:[Object,Boolean,String]
            },
            checked:{
                type:Boolean,
                default:false
            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`,
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-checked`]:select
                    }
                ]
            }
        },
        data(){
            return {
                select:false,
                isGroup:false,
                show:true,
                model:this.value
            }
        },
        mounted(){
            if (this.$parent && this.$parent.$options.name == 'radioBoxGroup') {

                this.isGroup = true;
            }

            if (!this.isGroup) {

                this.updateModel()

            }

        },
        methods:{
            updateModel (){
                this.select = this.checked
            },
            change(e){
                if (this.disable)  return;
                this.select = e.target.checked;
                this.checked = this.select;

                if (this.isGroup && this.checked) {
                    this.$parent.change({model:this.model,checked:this.checked})
                }

                if (!this.isGroup) {
                    EventBus.$dispatch('on-form-change',this.checked)
                }
            }

        },

        watch:{
            checked(){
               this.updateModel()
            },
            value(val){
                this.model = val
            }
        }
    }
</script>

<style scoped>

    .v-lc-radioBoxGroup.v-lc-radioBoxGroup-vertical .v-lc-radiobox {
        margin-right:0;
        margin-bottom:.08rem;
    }

    .v-lc-radiobox{
        display:inline-block;
        margin-right:.08rem;
    }


    .v-lc-radiobox-wrapper{
        display: inline-block;
        vertical-align: middle;
        white-space: nowrap;
        cursor: pointer;
        outline: 0;
        line-height: 1;
        position: relative
    }

     .v-lc-radiobox-inner{
         display: inline-block;
         width: .14rem;
         height: .14rem;
         position: relative;
         top: 0;
         left: 0;
         border: .01rem solid #d7dde4;
         border-radius: 50%;
         background-color: #fff;
         transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
    }



     .v-lc-radiobox-inner:after{
         position: absolute;
         width: .08rem;
         height: .08rem;
         left: .03rem;
         top: .03rem;
         border-radius: .06rem;
         display: table;
         border-top: 0;
         border-left: 0;
         content: " ";
         background-color: #555;
         opacity: 0;
         transition: all .2s ease-in-out;
         transform: scale(0);
     }

     .v-lc-radiobox-checked .v-lc-radiobox-inner:after {
         opacity: 1;
         transform: scale(1);
         transition: all .2s ease-in-out;
     }

     .v-lc-radiobox-disable.v-lc-radiobox-checked .v-lc-radiobox-inner:after{
         background-color: #f3f3f3;
         cursor: not-allowed;
     }

    .v-lc-radiobox-disable .v-lc-radiobox-inner:after{
        background-color: #f3f3f3;
        cursor: not-allowed;
    }


    .v-lc-radiobox-checked.v-lc-radiobox-disable .v-lc-radiobox-inner{
        border-color: #f3f3f3;
        cursor: not-allowed;
    }

    .v-lc-radiobox-disable input{
        cursor: not-allowed;
    }

    .v-lc-radiobox-disable .v-lc-radiobox-inner{
        border-color: #f3f3f3;
        cursor: not-allowed;
    }

    .v-lc-radiobox-disable+span{
        color: #f3f3f3;
        cursor: not-allowed;
    }

    .v-lc-radiobox-checked .v-lc-radiobox-inner {
        border-color: #555;
    }
    

    .v-lc-radiobox-input{
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
</style>