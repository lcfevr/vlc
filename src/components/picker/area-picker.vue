<template>


    <div :class="classes">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>

        <div class="main">

            <picker-slot :list="provinces" :init-item="province" :target="'province'" @change="change"></picker-slot>

            <picker-slot :list="citys" :init-item="city" :target="'city'" @change="change"></picker-slot>

            <picker-slot :list="districts" :init-item="district" :target="'district'" @change="change"></picker-slot>

        </div>
    </div>


</template>

<script>
    import CHINA_AREA from 'china-area-data'
    import pickerSlot from './picker-slot'
    import Emitter from '../../mixin/emitter'

    const prefixCls = 'vlc-picker';
    export default {
        name: 'AreaPicker',
        mixins: [Emitter],
        props: {
            initProvince: {
                type: [String, Number],
                default: '110000'
            },
            initCity: {
                type: [String, Number],
                default: '110100'
            },
            initDistrict: {
                type: [String, Number],
                default: '110101'
            },
            styles: {
                type: Object,
                default: () => {
                }
            },
            rootCode: {
                default: () => '86'
            },
        },
        data(){
            return {
                province: this.initProvince,
                provinceName: '北京市',
                city: this.initCity,
                cityName: '市辖区',
                district: this.initDistrict,
                districtName: '东城区',

            }
        },
        methods: {
            sure(){
                this.dispatch('Picker', 'ok', [

                    {code: this.province, name: this.provinceName},
                    {code: this.city, name: this.cityName},
                    {code: this.district, name: this.districtName}
                ])


            },
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            _filter(id, target){

                let result = [];


                let items = CHINA_AREA[id];
                for (let code in items) {
                    if (!items.hasOwnProperty(code)) return;
                    result.push({code: code, value: items[code], target: target})
                }

                return result;
            },
            change(target, current){
                switch (target) {
                    case 'province' :
                        this.province = current.code;
                        !!this.citys.length ? this.city = this.citys[0].code : this.city = '';
                        this.provinceName = current.value;
                        break;
                    case 'city':
                        this.city = current.code;
                        !!this.districts.length ? this.district = this.districts[0].code : this.district = '';
                        this.cityName = current.value;
                        break;
                    case 'district':
                        this.district = current.code;
                        this.districtName = current.value
                }

                this.dispatch('Picker', 'parentchange', {
                    code: this.province,
                    name: this.provinceName
                }, {code: this.city, name: this.cityName}, {code: this.district, name: this.districtName})
            }
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`,
                ]
            },
            provinces(){
                return this._filter(this.rootCode, 'province')
            },
            citys(){
                return this._filter(this.province, 'city')
            },
            districts(){
                return this._filter(this.city, 'district')
            }
        },
        components: {
            pickerSlot
        },

    }
</script>