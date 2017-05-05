<template>

    <transition name="fade"
                enter-active-class="animated fadeInUpBig"
                leave-active-class="animated fadeOutDownBig">
        <div :class="classes" v-show="visible" >
            <div class="v-lc-picker-click">
                <a class="cancle" @click="cancle">cancle</a>
                <a class="sure" @click="sure">sure</a>
            </div>
            <div class="v-lc-picker-main">

                <picker-slot :list="provinces" :init-item="province" :target="'province'" @change="change"></picker-slot>

                <picker-slot :list="citys" :init-item="city" :target="'city'" @change="change"></picker-slot>

                <picker-slot :list="districts" :init-item="district" :target="'district'" @change="change"></picker-slot>


            </div>
        </div>
    </transition>

</template>

<script>
    import CHINA_AREA from 'china-area-data'
    import pickerSlot from './picker-slot'

    const prefixCls = 'v-lc-picker';
    export default {
        name:'Picker',
        props: {

            styles: {
                type: Object,
                default: () => {
                }
            },
            rootCode: {
                default: () => '86'
            },
            value:{
                type:Boolean,
                default:false
            }
        },


        data(){
            return {
                province: '110000',
                provinceName: '北京市',
                city: '110100',
                cityName: '市辖区',
                district: '110101',
                districtName: '东城区',
                visible:this.value
            }
        },
        methods: {
            sure(){

                this.visible = false;
                this.$emit('sure',this.provinceName,this.cityName,this.districtName)
            },

            cancle(){
                this.visible = false;
                this.$emit('cancle')
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
                console.log('asdasd')
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

                this.$emit('parentchange', this.provinceName, this.cityName, this.districtName)
            },

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
        events: {

            test(value){
                console.log(value)
            }
        },

        watch:{
            value(val){
                this.visible = val
            }
        }

    }
</script>
<style lang="less" scoped>
    .v-lc-picker {
        font-size:12px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom:0;
        height: 200px;
        background: linear-gradient(top, #555555 0, #ffffff 45%, #ffffff 55%, #555555 100%);

    }

    .v-lc-picker .v-lc-picker-click {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        color: #555;
    }

    .v-lc-picker-main {

        width: 100%;
        height: 160px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }


</style>