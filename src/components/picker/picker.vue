<template>
        <div class="vlc-picker-wrapper" >
            <transition name="vlc-ani-fade">
                <div class="vlc-mask" v-show="visible" @click="visible=false"></div>
            </transition>
            <transition name="vlc-ani-slide-up">
                <div  class="vlc-picker-content" v-show="visible">
                    <component :is="type" ></component>
                </div>
            </transition>

        </div>

</template>

<script>

    import AreaPicker from './area-picker.vue'
    import DatePicker from './date-picker.vue'

    export default {
        name:'Picker',
        props:{
           type:{
               type:String,
               default:'AreaPicker'
           },
            value:{
               type:Boolean,
                default:false
            }
        },

        data(){
            return {
                visible:this.value,
            }

        },
        created(){
            this.$on('ok',(val)=>{

                this.visible = false;
                this.$emit('sure',val)
            });


            this.$on('fail',()=>{
                this.visible = false;
                this.$emit('cancle')
            })
        },

        components:{
            AreaPicker,
            DatePicker

        },
        watch:{
            value(val){
                this.visible = val
            },
            visible(val){
                this.$emit('input',val)
            }
        }
    }
</script>