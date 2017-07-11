<template>
    <div :class="classes">
        <span :class="starClass" v-for="(item,key) in max" :style="parentStyles(key)">
            {{star}}
            <span :style="childStyles(key)" @click="changeValue(key)">{{star}}</span>
        </span>
    </div>
</template>

<script>

    const prefixCls = 'vlc-rater';
    export default {
        props: {
            value: {
                type: Number,
                default: -1
            },
            distance: {
                type: Number,
                default: 10
            },
            max:{
                type: Number,
                default: 5
            },
            size: {
                type: Number,
                default: 18
            },
            star: {
                type: String,
                default: '★'
            },
            defaultColor: {
                type: String,
                default: '#ccc'
            },
            activeColor: {
                type: String,
                default: '#f5a623'
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                currentValue : this.value,
            }
        },
        methods: {

            changeValue(i){

                if (this.disabled) return
                this.currentValue = i+1;

            },
            parentStyles(index){

                const values = Number(this.currentValue);
                const max = Number(this.max);

                let obj = {};
                obj.fontSize = `${this.size}px`;
                if (!isNaN(values)) {

                    obj.color = this.defaultColor;

                    if (index + 1 < max) {
                        obj.marginRight = `${this.distance}px`;
                    } else {
                        obj.marginRight = `0px`;
                    }

                    return obj
                }

                return false;

            },
            childStyles(index){

                const values = Number(this.currentValue);
                const max = Number(this.max);

                let obj = {};
                obj.fontSize = `${this.size}px`;
                if (!isNaN(values)) {

                    if (index + 1 < max) {

                        obj.marginRight = `${this.distance}px`;
                    } else {
                        obj.marginRight = `0px`;
                    }

                    let valueArr = String(values).split('.');
                    if(index +1 <= Number(valueArr[0])) {
                        obj.color = this.activeColor;
                    }
                    if (!valueArr.length<2&&Number(valueArr[1])>=5 && index+1 ===  Number(valueArr[0])+1) {


                            obj.width = '50%';
                            obj.color = this.activeColor

                    }

                    return obj
                }

                return false;

            }
        },
        computed:{
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            starClass(){
                return [
                    `${prefixCls}-star`
                ]
            }
        },
        watch:{
            value(val){
                this.currentValue = val
            },
            currentValue(val){
                this.$emit('input',val)
            }
        },

    }
</script>

<style lang="less">
    .vlc-rater {

        &-star {
            color: #e9e9e9;
            position: relative;
            display: inline-block;
            > span {
                position: absolute;
                height: 100%;
                content: '★';
                left: 0;
                top: 0;
                color: #e9e9e9;
                overflow: hidden;
            }


        }
    }

</style>