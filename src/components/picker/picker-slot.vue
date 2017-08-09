<template>
    <div :class="classes" :style="styles">
        <ul :class="draggingClass" :style="{transform:`translate3d(0,${translateY}px,0)`}" @touchstart="_onTouchStart"
            @touchmove="_onTouchMove" @touchend="_onTouchEnd">

            <li :style="{height:height+'px'}"></li>
            <li :style="{height:height+'px'}"></li>
            <li v-for="(item,index) in list" :class="{'current':index == current.index,
                                                'level_1_1':index - current.index == 1,
                                                'level_2_1':index - current.index == 2,
                                                'level_3_1':index - current.index >= 3,
                                                'level_1':index - current.index == -1,
                                                'level_2':index - current.index == -2,
                                                'level_3':index - current.index <= -3}"
                :style="{textAlign:align,height:height+'px'}">{{item.value}}



            </li>
            <li :style="{height:height+'px'}"></li>
            <li :style="{height:height+'px'}"></li>
        </ul>
    </div>
</template>

<script>
    import {findComponentUpward} from '../../utils/util'
    const prefixCls = 'vlc-picker-slot';

    export default {
        data(){
            return {
                count: 7, //默认显示行数
                height: 35,
                current: {},
                translateY: 0,
                currentTranslateY: 0,
                dragging: false,
                startX: 0,
                startY: 0,
                delta: {x: 0, y: 0},
            }
        },
        watch: {
            list(value){

                if (value.length) {
                    let index = this.getSelectedIndex();

                    this.current = Object.assign({}, this.current, value[index]);
                    this.$emit('change', this.target, this.current)
                } else {
                    this.translateY = 0;
                }

            },
            initItem(value){

                if (!value) {
                    this.current = Object.assign({}, this.current, {
                        code: '',
                        target: this.target,
                        index: '',
                        value: ''
                    });
                    this.$emit('change', this.target, this.current)
                } else {
                    this.scrollToItem(value)
                }
            }


        },

        mounted(){
            if (!this.initItem && this.initItem !== 0) {

                this.current = Object.assign({}, this.current, {code: '', target: this.target, index: '', value: ''});
                this.$emit('change', this.target, this.current)
            } else {

                this.scrollToItem(this.initItem)
            }


        },
        props: {
            styles: Object,
            list: {
                type: Array,
                default: () => []
            },
            align: {
                type: String,
                default: 'center'
            },
            target: {
                type: String,
                required: true
            },
            initItem: {
                type: [String, Number],
                default: ''
            }
        },
        computed: {
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            draggingClass(){
                return [
                    {
                        [`${prefixCls}-dragging`]: this.dragging
                    }
                ]
            },
            wrapperHeight: {
                get(){
                    return this.count * this.height;
                }
            },
            getStyles(){
                let styles = this.styles;

                if (styles.height) {

                    this.height = styles.height / this.count
                }

                return Object.assign({}, styles, {height: this.wrapperHeight})
            }
        },
        methods: {
            _onTouchStart(e){
                e.preventDefault();
                e.stopPropagation();
                this.currentTranslateY = this.translateY;
                this.startX = e.touches[0].pageX;
                this.startY = e.touches[0].pageY;
                this.dragging = true;
            },

            _onTouchMove(e){
                e.preventDefault();
                e.stopPropagation();
                this.delta.x = e.touches[0].pageX - this.startX;
                this.delta.y = e.touches[0].pageY - this.startY;
                this.translateY = this.delta.y + this.currentTranslateY;
            },
            _onTouchEnd(e){
                e.preventDefault();
                e.stopPropagation();
                this.dragging = false;
                this.currentTranslateY = this.translateY;
                let index = this.getSelectedIndex();
                this.setSelectedItem(index);
            },
            getSelectedIndex(){
                let height = this.height;
                let maxIndex = this.list.length - 1;
                let index = -Math.round(this.currentTranslateY / height);
                index = Math.max(index, 0);
                index = Math.min(index, maxIndex);
                return index;
            },
            setSelectedItem(index){

                this.translateY = this.currentTranslateY = -index * this.height;
                try {
                    if (this.current.code ===  this.list[index].code && this.current.value === this.list[index].value) {
                        return
                    }
                    this.current = Object.assign({}, this.current, {
                        code: this.list[index].code,
                        value: this.list[index].value,
                        target: this.target,
                        index: index
                    });

                } catch (e) {

                    this.current = Object.assign({}, this.current, {
                        code: '',
                        value: '',
                        target: this.target,
                        index: ''
                    });
                }
                this.$emit('change', this.target, this.current);

            },
            scrollToItem (code){
                this.list.forEach((item, i) => {
                    let currentCode = item.code;
                    if (currentCode == code) {
                        this.currentTranslateY = this.translateY;
                        this.setSelectedItem(i)
                    }
                })
            }
        }
    }
</script>