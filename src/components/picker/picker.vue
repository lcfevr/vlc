<template>
    <div class="vlc-picker-wrapper">
        <transition name="vlc-ani-fade">
            <div class="vlc-mask" v-show="visible" @click="visible=false"></div>
        </transition>
        <transition name="vlc-ani-slide-up">
            <div class="vlc-picker-content" v-show="visible">
                <Area-picker v-if="type==='AreaPicker'"
                             :init-province="initProvince"
                             :init-city="initCity"
                             :init-district="initDistrict"
                             :styles="styles"
                             :root-code="rootCode">

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
        </transition>

    </div>

</template>

<script>

    import  areaProps  from './area-picker/props'
    import  dateProps  from './date-picker/props'
    import normalProps from './normal-picker/props'
    const AreaPicker = resolve => require(['./area-picker/area-picker.vue'], resolve);
    const DatePicker = resolve => require(['./date-picker/date-picker.vue'], resolve);
    const NormalPicker = resolve => require(['./normal-picker/normal-picker.vue'],resolve);
    const LIST = ['DatePicker','AreaPicker','NormalPicker']
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
            NormalPicker
        },
        watch: {
            value(val){
                this.visible = val
            },
            visible(val){
                this.$emit('input', val)
            }
        }
    }
</script>