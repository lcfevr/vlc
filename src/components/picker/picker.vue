<template>
        <div class="vlc-picker-wrapper" >
            <transition name="vlc-ani-fade">
                <div class="vlc-mask" v-show="visible" @click="visible=false"></div>
            </transition>
            <transition name="vlc-ani-slide-up">
                <div  class="vlc-picker-content" v-show="visible">
                    <!--<component :is="type" ></component>-->
                    <Area-picker v-if="type==='AreaPicker'"  :init-province="initProvince" :init-city="initCity" :init-district="initDistrict" :styles="styles" :root-code="rootCode"></Area-picker>

                    <Date-picker v-if="type==='DatePicker'" :init-year="initYear" :init-month="initMonth" :init-day="initDay" :year="year" :month="month" :day="day" :value-separator="valueSeparator"></Date-picker>
                </div>
            </transition>

        </div>

</template>

<script>

    import DatePicker from './date-picker/date-picker.vue'
    import AreaPicker from './area-picker/area-picker.vue'
    import  areaProps  from './area-picker/props'
    import  dateProps  from './date-picker/props'
    export default {
        name:'Picker',
        props:{
           type:{
               type:String,
               default:'DatePicker'
           },
            value:{
               type:Boolean,
                default:false
            }
        },
        mixins:[areaProps,dateProps],
        data(){
            return {
                visible:this.value,
            }

        },
        created(){
            this.$on('ok',(val)=>{
                console.log(val)
                this.visible = false;
                this.$emit('sure',val)
            });


            this.$on('fail',()=>{
                this.visible = false;
                this.$emit('cancle')
            })
        },
        mounted(){
//            console.log(DatePicker)
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