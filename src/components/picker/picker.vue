<template>
        <Popup height="284px" position="bottom" v-model="visible">
            <div :class="wrapperClass">
                <div :class="contentClass" >
                    <Area-picker v-if="type==='AreaPicker'"
                                 :init-province="initProvince"
                                 :init-city="initCity"
                                 :init-district="initDistrict"
                                 :styles="styles"
                                 :root-code="rootCode"
                                 :value-separator="valueSeparator">

                    </Area-picker>

                    <Date-picker v-if="type==='DatePicker'"
                                 :init-year="initYear"
                                 :init-month="initMonth"
                                 :init-day="initDay"
                                 :year="year" :month="month" :day="day"
                                 :value-separator="valueSeparator">

                    </Date-picker>

                    <Normal-picker v-if="type==='NormalPicker'"
                                   :list="list"
                                   :init-arr="initArr">
                    </Normal-picker>
                </div>
        </div>
        </Popup>
</template>

<script>

    import  areaProps  from './area-picker/props'
    import  dateProps  from './date-picker/props'
    import normalProps from './normal-picker/props'
    import Popup from '../popup'
    import AreaPicker from './area-picker/area-picker.vue';
    import DatePicker from './date-picker/date-picker.vue';
    import NormalPicker from './normal-picker/normal-picker.vue';
    const LIST = ['DatePicker','AreaPicker','NormalPicker'];
    const prefixCls = 'vlc-picker';
    export default {
        name: 'Picker',
        props: {
            type: {
                type: String,
                default: 'DatePicker',
                validator(val){
                    return LIST.indexOf(val) > -1
                }
            },
            value: {
                type: Boolean,
                default: false
            }
        },
        mixins: [areaProps, dateProps,normalProps],
        data(){
            return {
                visible: this.value,
            }

        },
        created(){
            this.$on('ok', (val) => {

                this.visible = false;
                this.$emit('sure', val)
            });


            this.$on('fail', () => {
                this.visible = false;
                this.$emit('cancle')
            })
        },
        mounted(){
//            console.log(DatePicker)
        },

        components: {
            AreaPicker,
            DatePicker,
            NormalPicker,
            Popup
        },
        watch: {
            value(val){
                this.visible = val
            },
            visible(val){
                this.$emit('input', val)
            }
        },
        computed:{
            wrapperClass(){
                return [
                    `${prefixCls}-wrapper`
                ]
            },
            contentClass(){
                return [
                    `${prefixCls}-content`
                ]
            }
        }
    }
</script>