<template>
    <div class="vlc-date-picker">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>
        <div class="main">
            <picker-slot></picker-slot>
        </div>
    </div>
</template>

<script>

    import PickerSlot from './picker-slot.vue'
    import {Emitter} from '../../mixin/emitter'
    const DAYS = {
        30: [4, 6, 9, 11],
        31: [1, 3, 5, 7, 8, 10, 12]
    }
    export default {
        name: 'DatePicker',
        mixins: [Emitter],
        props: {
            initYear: {
                type: [String, Number],
                default: new Date().getFullYear()
            },
            initMonth: {
                type: [String, Number],
                default: new Date().getMonth()
            },
            initDay: {
                type: [String, Number],
                default: new Date().getDay()
            },
            year: {
                type: [Boolean, Array],
                default: true
            },
            month: {
                type: [Boolean, Array],
                default: true
            },
            day: {
                type: [Boolean, Array],
                default: true
            }
        },
        data(){
            return {
                date: {
                    year: this.initYear,
                    month: this.initMonth,
                    day: this.initDay
                }
            }
        },

        methods: {
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            sure(){
                this.dispatch('Picker', 'ok')
            },
            change(target,current) {

            }
        },
        computed: {
            yearList(){
                let from, to = 0;
                if (!!this.year) {
                    from = 1900;
                    to = new Date().getFullYear();
                    if (Array.isArray(this.year)) {

                        if (this.year[0] !== undefined) from = this.year[0] <= this.year[1] ? this.year[0] : from;
                        if (this.year[1] !== undefined) to = this.year[0] <= this.year[1] ? this.year[1] : to;

                    }

                    let yearArr = [];

                    for (let i = from; i < to; i++) {
                        let y = String(i);
                        yearArr.push({
                            code:i,
                            value:y,
                            target:'year'
                        })
                    }

                    return yearArr


                }

                return false;

            },
            monthList(){
                let from,to = 0;
                if (!!this.month) {
                    from = 1;
                    to = 12;
                    if (Array.isArray(this.month)) {

                        if (this.month[0] !== undefined) from = this.month[0] >= 1 && this.month[0]<this.month[1] ? this.month[0] : 1;
                        if (this.month[1] !== undefined) to = this.month[1] <= 12 && this.month[0]<this.month[1] ? this.month[1] : 12;
                    }

                    let monthArr = [];
                    for (let i = from;i < to;i++) {
                        let m = String(i);
                        monthArr.push({
                            code:i,
                            value:m,
                            target:'month'
                        })
                    }

                    return monthArr
                }

                return false;
            },
            dayList(){
                let from,to = 0;
                if (!!this.day) {
                    from = 1;
                    to = 31;
                    if (Array.isArray(this.day)) {

                        if (this.day[0] !== undefined) from = this.day[0] >= 1 && this.day[0]<this.day[1] ? this.day[0] : 1;
                        if (this.day[1] !== undefined) to = this.day[1] <= 31 && this.day[0]<this.day[1] ? this.day[1] : 31;

                    }

                    let dayArr = [];

                    for (let i = from;i < to;i++) {
                        let d = String(i);
                        dayArr.push({
                            code:i,
                            value:d,
                            target:'day'
                        })
                    }
                    return dayArr

                }

                return false;
            }
        },
        components: {
            PickerSlot
        }
    }
</script>

<style lang="less">

</style>