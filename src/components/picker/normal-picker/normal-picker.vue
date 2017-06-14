<template>
    <div class="vlc-normal-picker">
        <div class="header">
            <div class="left" @click="cancle">取消</div>
            <div class="right" @click="sure">确定</div>
        </div>
        <div class="main">
            <template v-if="shadowList.length">
                <picker-slot v-for="(item,key) in shadowList" :target="item.target" :init-item="initItems[key]" :key="item.target" :list="item.list" @change="change"></picker-slot>
            </template>

        </div>
    </div>
</template>

<script>
    import Emitter from '../../../mixin/emitter'
    import PickerSlot from '../picker-slot.vue'
    export default {
        name:'NormalPicker',
        props:{
            list:{
                type:Array,
                default(){
                    return []
                }
            },
            initArr:{
                type:Array,
                default(){
                    return []
                }
            }

        },
        mixins:[Emitter],
        data(){
            return {
                initItems:!!this.initArr.length ? this.initArr : this.list.map((item)=>{return item.list[0].value}),
                normal:{}
            }


        },
        methods:{
            cancle(){
                this.dispatch('Picker', 'fail');
            },
            sure(){
                this.dispatch('Picker', 'ok',this.normal);
            },
            change(target,current){

                for(let i = 0;i < this.shadowList.length;i++) {

                    if(this.shadowList[i].target == target) {

                        for (let j = 0;i<this.shadowList[i].length;j++) {

                            if (current.code == this.shadowList[i].list[j].code) {
                                this.$set(this.initItems,i,this.shadowList[i].list[j].code)
                            }
                        }
                    }
                }
               this.normal = Object.assign({},this.normal,{[target]:current})

            }
        },
        computed:{
            shadowList(){
                let list = this.list;
                for (let i = 0,listLength = list.length;i < listLength ;i++) {

                    if (list[i].hasOwnProperty('list') && list[i].list.length) {

                        for (let j = 0,childLength = list[i].list.length;j < childLength;j++) {

                            if (!list[i].list[j].hasOwnProperty('value')) return [];

                            if(!list[i].list[j].hasOwnProperty('code')) {
                                list[i].list[j].code = list[i].list[j].value
                            }

                            if(!list[i].list[j].hasOwnProperty('target')) {
                                list[i].list[j].target = list[i].target
                            }

                            list[i].list[j].index = j

                        }
                    }
                }

                return list
            }
        },

        components:{
            PickerSlot
        },
        watch:{
            initValue(val){
                this.initItems = val
            },
        }
    }
</script>