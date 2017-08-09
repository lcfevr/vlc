<template>
    <div :class="classes">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>
        <div class="main">
            <picker-slot v-if="year" :list="yearList" :init-item="date.year.code" target="year" @change="change"></picker-slot>
            <picker-slot v-if="month" :list="monthList" :init-item="date.month.code" target="month" @change="change"></picker-slot>
            <picker-slot v-if="day" :list="dayList" :init-item="date.day.code" target="day" @change="change"></picker-slot>
        </div>
    </div>

</template>


<script>

    import PickerSlot from '../picker-slot.vue'
    import Emitter from '../../../mixin/emitter'
    import props from './props'
    const DAYS = {
        30: [4, 6, 9, 11],
        31: [1, 3, 5, 7, 8, 10, 12]
    };
    const prefixCls = 'vlc-date-picker';
    export default {
        name: 'DatePicker',
        mixins: [Emitter,props],

        data(){
            return {
                currentValue:this.dateValue,
//                currentYear: this.year ? this.initYear : '',
//                currentMonth: this.month ? this.initMonth : '',
//                currentDay: this.day ? this.initDay : '',
                date:{
                    year:{
                        code:new Date().getFullYear(),
                        value:String(new Date().getFullYear()),
                        target:'year',
                        index:0
                    },
                    month:{
                        code:new Date().getMonth() + 1,
                        value:String(new Date().getMonth() + 1),
                        target:'month',
                        index:0
                    },
                    day:{
                        code:new Date().getDate(),
                        value:String(new Date().getDate()),
                        target:'day',
                        index:0
                    },
                    formatDate:''
                }

            }
        },
        components: {
            PickerSlot
        },
        methods: {
            initVal(){

                if ((this.valueSeparator || this.valueSeparator != '') && this.currentValue && this.currentValue != '') {
                    let [year = '',month = '',day = ''] = this.currentValue.split(this.valueSeparator)


                    this.date.year = Object.assign({},this.date.year,{code:Number(year),value:year})



                    this.date.month = Object.assign({},this.date.month,{code:Number(month),value:month})



                    this.date.day = Object.assign({},this.date.day,{code:Number(day),value:day})


                    if (!this.year) this.date.year = {}
                    if (!this.month) this.date.month = {}
                    if (!this.day) this.date.day = {}
                }
            },
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            sure(){

                this.dispatch('Picker', 'ok',this.date)
            },
            change(target,current) {
                console.log(current)
                this.$nextTick(()=>{
                switch (target) {

                    case 'year':
                        let lastYear = this.yearList.length - 1;
                        if (current.index > this.yearList.length - 1) {
                            this.date.year = Object.assign(this.date.year,this.yearList[lastYear]);
                        } else {
                            this.date.year = Object.assign(this.date.year,current);
                        }

//                        !!this.monthList ? this.currentMonth = this.monthList[0].code : '';
//                        !!this.dayList ? this.currentDay = this.dayList[0].code : '';


                        break;

                    case 'month':
                        let lastMonth = this.monthList.length -1;

                        if (current.index > this.monthList.length -1 ) {
                            this.date.month = Object.assign(this.date.month,this.monthList[lastMonth]);

                        } else {
                            this.date.month = Object.assign(this.date.month,current);

                        }


//                        !!this.dayList ? this.currentDay = this.dayList[0].code : '';

                        break;

                    case 'day':
                        let lastDay = this.dayList.length - 1;

                        if (current.index > this.dayList.length - 1) {
                            this.date.day = Object.assign(this.date.day,this.dayList[lastDay]);
                        } else {
                            this.date.day = Object.assign(this.date.day,current);

                        }


                        break;
                }
            })

                this.date.formatDate = [this.date.year.value,this.date.month.value,this.date.day.value].filter(x => !!x).join(this.valueSeparator)

            }
        },
        mounted(){
            this.initVal();
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
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
                    let index = 0;
                    for (let i = from; i <= to; i++) {
                        let y = String(i);
                        yearArr.push({
                            code:i,
                            value:y,
                            index:index,
                            target:'year'
                        })

                        index++;
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
                    let index = 0;
                    for (let i = from;i <= to;i++) {
                        let m = String(i);
                        monthArr.push({
                            code:i,
                            value:m,
                            index:index,
                            target:'month'
                        })

                        index++;
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

                    if (!!this.date.month.value) {
                        let total;

                        if ( !!~DAYS[30].indexOf(this.date.month.value) ) {
                            total = 30;
                        } else if ( !!~DAYS[31].indexOf(this.date.month.value) ) {
                            total = 31;
                        } else {
                            let year = this.date.day.code;
                            if ((year%4 === 0 ) && (year%100 != 0 || year%400 === 0)) {
                                total = 29;
                            } else {
                                total = 28;
                            }
                        }

                        to = total;
                    }

                    if (Array.isArray(this.day)) {

                        if (this.day[0] !== undefined) from = this.day[0] >= 1 && this.day[0]<this.day[1] ? this.day[0] : 1;
                        if (this.day[1] !== undefined) to = this.day[1] <= 31 && this.day[0]<this.day[1] ? this.day[1] : 31;

                    }


                    let dayArr = [];
                    let index = 0;
                    for (let i = from;i <= to;i++) {
                        let d = String(i);
                        dayArr.push({
                            code:i,
                            value:d,
                            index:index,
                            target:'day'
                        })
                        index++;
                    }
                    return dayArr

                }

                return false;
            }
        },
        watch:{
            dateValue(val){
                this.currentValue = val;
                this.initVal();
            }
        }

    }
</script>

<style lang="less">

</style>