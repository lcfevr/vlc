<template>


    <div :class="classes">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>

        <div class="main">

            <picker-slot :list="provinces" :init-item="province.code" :target="province.target"
                         @change="change"></picker-slot>

            <picker-slot :list="citys" :init-item="city.code" :target="city.target" @change="change"></picker-slot>

            <picker-slot :list="districts" :init-item="district.code" :target="district.target"
                         @change="change"></picker-slot>

        </div>
    </div>


</template>

<script>
    import CHINA_AREA from 'china-area-data'
    import pickerSlot from '../picker-slot'
    import Emitter from '../../../mixin/emitter'
    import props from './props'

    const prefixCls = 'vlc-picker';
    const rootCode = '86'
    export default {
        name: 'AreaPicker',
        mixins: [Emitter, props],

        data(){

            return {
                currentValue: this.addressValue,
                province: {
                    value: '北京市',
                    code: '110000',
                    target: 'province',
                    index: 0
                },

                city: {
                    value: '市辖区',
                    code: '110100',
                    target: 'city',
                    index: 0
                },

                district: {
                    value: '东城区',
                    code: '110101',
                    target: 'district',
                    index: 0
                },
            }
        },
        mounted(){
            this.initVal();
        },

        methods: {
            initVal(){

                if ((this.valueSeparator || this.valueSeparator != '') && this.currentValue && this.currentValue != '') {

                    let [provinceName, cityName, districtName] = this.currentValue.split(this.valueSeparator)


                    if (provinceName || cityName || districtName) {
                        let provinces = CHINA_AREA[rootCode]
                        if (!!provinces && provinces != undefined)
                        Object.keys(provinces).forEach((item)=>{
                            if (!isNaN(provinceName) && !!provinceName) {
                                if (provinceName == item) {
                                    this.province.value = provinces[item];
                                    this.province.code = item;
                                }
                            } else {
                                if (provinceName == provinces[item]) {
                                    this.province.value = provinces[item];
                                    this.province.code = item;
                                }
                            }
                        })


                        let citys = CHINA_AREA[this.province.code];
                        if (!!citys && citys != undefined)
                        Object.keys(citys).forEach((item)=>{
                            if (!isNaN(cityName) && !!cityName) {
                                if (cityName == item) {
                                    this.city.value = citys[item];
                                    this.city.code = item;
                                }
                            } else {
                                if (cityName == citys[item]) {
                                    this.city.value = citys[item];
                                    this.city.code = item;
                                }
                            }
                        })


                        let districts = CHINA_AREA[this.city.code];
                        if(!!districts && districts != undefined)
                        Object.keys(districts).forEach((item)=>{
                            if (!isNaN(districtName) && !!districtName) {
                                if (districtName == item) {
                                    this.district.value = districts[item];
                                    this.district.code = item;
                                }
                            } else {
                                if (districtName == citys[item]) {
                                    this.district.value = districts[item];
                                    this.district.code = item;
                                }
                            }
                        })

                    }
                }

            },
            sure(){

                this.dispatch('Picker', 'ok', {
                    province: {code: this.province.code, name: this.province.value},
                    city: {code: this.city.code, name: this.city.value},
                    district: {code: this.district.code, name: this.district.value},
                    formArea: [this.province.value, this.city.value, this.district.value].filter(x => !!x).join(this.valueSeparator)
                })
            },
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            _filter(target, val = {}){
                switch (target) {
                    case 'province':
                        let provinces = CHINA_AREA[rootCode];
                        if (!provinces && provinces == undefined)  return [];

                        return Object.keys(provinces).map((item, index) => {
                            return {code:item,value:provinces[item],target:target,index:index}
                        });
                        break;
                    case 'city':
                    case 'district':
                        console.log(val)
                        console.log(target)
                        let list = CHINA_AREA[val.code];
                        if (!list && list == undefined && target)  {
                            this[target] = {
                                value: '',
                                code: '',
                                target: target,
                                index:''
                            };

                            return []
                        };


                        return Object.keys(list).map((item, index) => {
                            return {code:item,value:list[item],target:target,index:index}
                        })
                        break;
                }
            },
            change(target, current){

                this.$nextTick(() => {
                    this[target] = Object.assign({}, this[target], current);

                    this.dispatch('Picker', 'parentchange', {
                        province: {code: this.province.code, name: this.province.value},
                        city: {code: this.city.code, name: this.city.value},
                        district: {code: this.district.code, name: this.district.value},
                    })
                })



            },
        },

        watch: {
            addressValue(val){
                this.currentValue = val
                this.initVal()

            },

        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`,
                ]
            },
            provinces(){

                return this._filter('province')
            },
            citys(){
                return this._filter('city', this.province)
            },
            districts(){

                return this._filter('district', this.city)
            }
        },
        components: {
            pickerSlot
        },

    }
</script>