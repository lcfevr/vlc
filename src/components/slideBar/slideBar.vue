<template>
    <div :class="classes" :style="getStyles">
        <div
                :class="wrapperClasses"  ref="wrapper">

            <div :class="['vlc-slideBar-child',startIndex == key ? 'active':'',!flex ? 'normalChild':'']" v-for="(item,key) in items"
                 @click="changeBar(key,$event)" :style="{textAlign:textAlign,width:itemWidth+'px'}">
                <slot :name="'slide-bar-header-'+key">
                    <a class="content ellipse-fir">{{item.name}}</a>
                </slot>
            </div>


        </div>
        <div class="vlc-slideBar-container" :style="{height:height}">
            <div :class="contentClasses" :style="getContainerStyle" ref="content">
                <slot :name="'slot-item-'+index" v-for="(item,index) in items">
                    <div class="vlc-slideBar-content-item"></div>
                </slot>
            </div>
        </div>

    </div>
</template>

<script>
    const prefixCls = 'vlc-slideBar';
    export default {
        props: {
            height: {
                type: String,
                default: '2.35rem'
            },
            styles: {
                type: Object,
                default: () => {
                }
            },
            item: {
                type: Array,
            },
            childWidth:{
                type:Number,
                default:70
            },
            scrollColor: {
                type: String,
                default: '#39f'
            },
            textAlign: {
                type: String,
                default: 'center'
            },
            flex: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: 'normal'
            },
            onChange: {
                type: Function,
            },
            items: {
                type: Array,
                default: () => [{name: '按时大大'}, {name: '按时大大'}, {name: '按时大大'}, {name: '按时大大'}]
            },
            index: {
                type: [Number, String],
                default: 0,
            },
            distanceIndex: {
                type: Number,
                default: 1.5
            }
        },
        mounted(){
            this.clientWidth = this.$el.clientWidth;
            this.bindEvents();
        },
        computed: {

            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`,
                    this.flex ? `${prefixCls}-flex` : `${prefixCls}-slide`,
                    {
                        ['normal']: this.type == 'normal' && this.flex,
                        ['vertical']: this.type == 'vertical' && this.flex
                    }
                ]
            },
            contentClasses(){
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-dragging`]: this.dragging
                    }
                ]
            },
            getStyles(){
                let style = {};

                let customStyle = this.styles ? this.styles : {};

                Object.assign(style, customStyle);

                return style;
            },
            getContainerStyle(){

                return {
                    width: `${this.clientWidth * this.items.length}px`,
                    transform: `translate3d(${this.translateX}px,0,0)`
                }
            },
            wrapperWidth(){
                return this.flex ? `auto` : `${this.itemWidth * this.items.length}px`
            },
            maxIndex(){
                return this.items.length - 1
            }
        },
        data(){
            return {
                translateX: 0,
                scrollWidth: 0,
                clientWidth: 0,
                startIndex: this.index,
                startTranslateX: 0,
                startX: 0,
                currentX: 0,
                dragging: false,
                distance: 0,
                itemWidth:this.childWidth
            }
        },

        methods: {
            changeBar(index, event){

                if (this.startIndex == index) return;
                this.startIndex = index;
                this.translateX = -this.startIndex * this.clientWidth;
                this.$emit('on-change', index)
            },
            onTouchStart(e){
                this.startTranslateX = this.translateX;
                this.distance = 0;
                this.startX = e.touches[0].clientX;
                this.dragging = true;

            },

            onTouchMove(e){
                this.currentX = e.touches[0].clientX;
                if (this.distanceIndex) this.distance = (this.currentX - this.startX) / this.distanceIndex;
                else  this.distance = this.currentX - this.startX;
                this.translateX = this.startTranslateX + this.distance
            },
            onTouchEnd(e){

                if (this.distance < 0 && Math.abs(this.distance) > this.clientWidth / 2) {

                    this.onSlideLeft()

                } else if (this.distance > 0 && Math.abs(this.distance) > this.clientWidth / 2) {

                    this.onSlideRight()

                } else {

                    this.translateX = this.startTranslateX
                }
                this.dragging = false;


            },

            onSlideLeft(){
                if (++this.startIndex > this.maxIndex) {
                    this.startIndex--;
                    this.translateX = this.startTranslateX
                } else {

                    this.translateX = this.startTranslateX - this.clientWidth
                }
            },
            onSlideRight(){
                if (--this.startIndex < 0) {
                    this.startIndex++;
                    this.translateX = this.startTranslateX
                } else {

                    this.translateX = this.startTranslateX + this.clientWidth
                }
            },
            bindEvents(){
                this.$refs.content.addEventListener('touchstart', this.onTouchStart);
                this.$refs.content.addEventListener('touchmove', this.onTouchMove);
                this.$refs.content.addEventListener('touchend', this.onTouchEnd)
            },
            unbindEvents(){
                this.$refs.content.removeEventListener('touchstart', this.onTouchStart);
                this.$refs.content.removeEventListener('touchmove', this.onTouchMove);
                this.$refs.content.removeEventListener('touchend', this.onTouchEnd)
            }
        },
        beforeDestroy(){
            this.unbindEvents()
        }

    }
</script>
<style scoped>
    .vlc-slideBar {
        display: block;
        width: 100%;
        background: #ffffff;
        overflow: hidden;
        position: relative;
    }

    .vlc-slideBar-wrapper::before {
        position: absolute;
        content: '';
        height: .02rem;
        color: #39f;
    }

    .vlc-slideBar-wrapper .vlc-slideBar-child {
        height: calc(100% - .02rem);
        box-sizing: content-box;
        line-height: .3rem;
    }

    .vlc-slideBar-wrapper .vlc-slideBar-child.active {
        border-bottom: solid #39f;
        box-sizing: border-box;
    }

    .vlc-slideBar-wrapper .vlc-slideBar-child a {
        display: inline-block;

        width: 100%;
    }

    .vlc-slideBar-flex.normal .vlc-slideBar-child.active {
        border-bottom-width: .02rem;
    }

    .vlc-slideBar-flex.vertical .vlc-slideBar-child.active {
        border-right-width: .02rem;
    }

    .vlc-slideBar-wrapper.vlc-slideBar-flex {
        display: flex;
        align-items: center;
    }

    .vlc-slideBar-wrapper.vlc-slideBar-flex.normal {
        flex-direction: row;
    }

    .vlc-slideBar-wrapper.vlc-slideBar-flex.vertical {
        flex-direction: column;
    }

    .vlc-slideBar-wrapper.vlc-slideBar-flex .vlc-slideBar-child {
        flex: 1;
    }

    .vlc-slideBar-slide {
        width:auto;
    }



    .vlc-slideBar-slide .vlc-slideBar-child {
        display: inline-block;

    }

    .vlc-slideBar-slide .vlc-slideBar-child.normalChild {
        height:.3rem;
    }

    .vlc-slideBar-container {
        width: 100%;
        position: relative;
        left: 0;
        top: 0;
        overflow: hidden;
    }

    .vlc-slideBar-content {
        transition: transform .2s ease-in;
        will-change: transform;
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;

    }

    .vlc-slideBar-content.vlc-slideBar-dragging {
        transition: none;
        will-change: none;
    }

    .vlc-slideBar-content-item {
        flex: 1;
        height: 100%;

    }


</style>