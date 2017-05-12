<template>
    <div :class="classes" :style="{height:'400px'}">

        <div :class="wrapperClasses" :style="styles" ref="wrapper">
            <div :class="itemClasses" v-for="(item,index) in arrayList">
                <template v-if="isMultiple">
                    <div class="vlc-swipe-multiple" v-for="(_item,$index) in item">
                        <slot name="multiple" :item="_item" :index="$index">
                            <img :src="_item.image"/>
                            <span>{{_item.spec}}</span>
                        </slot>
                    </div>
                </template>
                <template v-else>
                    <slot name="single" :item="item" :index="index">
                        <img :src="item.image">
                        <span>{{item.spec}}</span>
                    </slot>
                </template>
            </div>

        </div>
    </div>
</template>

<script>

    const prefixCls = 'vlc-swipe';
    export default {
        props: {
            auto: {
                type: Boolean,
                default: true
            },
            list: {
                type: Array,
                default: () => []
            },
            startIndex: {
                type: Number,
                default: 0
            },
            height: {
                type: [Number, String],
                default: 'auto'
            },
            dots: {
                type: String,
                default: 'bottom'
            },
            multiple: {
                type: Boolean,
                default: false
            },
            distanceIndex: {
                type: Number,
                default: 1.5
            },
            loop: {
                type: Boolean,
                default: true
            },
            speed: {
                type: Number,
                default: 2
            }

        },
        data(){
            return {
                translateX: 0,
                currentTranslateX: 0,
                dragging: false,
                autoSwipe: true,
                startX: 0,
                currentX: 0,
                clientWidth: 0,
                slideIndex: this.startIndex,
                distance: 0,
                timer: null
            }
        },
        computed: {
            minIndex(){
                return this.loop ? 1 : 0
            },
            maxIndex(){
                return this.loop ? this.length - 2 : this.length - 1
            },
            arrayList(){
                if (this.loop) {
                    return [].concat([this.list[0]], this.list, [this.list[this.list.length - 1]])
                } else {
                    return this.list
                }

            },

            classes(){
                return [
                    `${prefixCls}`,
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-wrapper`,
                    {
                        [`${prefixCls}-dragging`]: this.dragging,
                        [`${prefixCls}-dragging`]: !this.autoSwipe,
                    }
                ]
            },
            itemClasses(){
                return [
                    `${prefixCls}-item`,
                    {
                        [`multiple`]: this.isMultiple,
                    }
                ]
            },
            isMultiple(){

                let arr = Object.keys(this.list);

                arr.forEach((item) => {
                    Object.keys(item).forEach((n) => {
                        if (!n) return false
                    })
                })
                return true;
            },
            styles(){

                return {

                    width: `${this.length * 375}px`,
                    height: Object.is(Number.parseInt(this.height), NaN) ? `${this.height}` : `${this.height}px`,
                    transform: `translate3d(${this.translateX}px,0,0)`
                }
            },
            length(){
                return this.loop ? this.list.length + 2 : this.list.length
            },
            currentIndex(){

                return Math.ceil(this.translateX / this.clientWidth)
            }
        },
        methods: {

            onLoopSlideLeft(){
                this.translateX = this.currentTranslateX - this.clientWidth;
                if (++this.slideIndex > this.maxIndex) {
                    this.slideIndex--;
                    this.$refs.wrapper.addEventListener('webkitTransitionEnd',this.resetSlide,false);
                }
            },
            onLoopSlideRight(){
                this.translateX = this.currentTranslateX + this.clientWidth
                if (--this.slideIndex < this.minIndex) {
                    this.slideIndex++;
                    this.$refs.wrapper.addEventListener('webkitTransitionEnd',this.resetSlideMax,false);
                } else {


                }
            },
            onSlideLeft(){
                if (++this.slideIndex > this.maxIndex) {
                    this.slideIndex--;
                    this.translateX = this.currentTranslateX
                } else {

                    this.translateX = this.currentTranslateX - this.clientWidth
                }
            },

            onSlideRight(){
                if (--this.slideIndex < this.minIndex) {
                    this.slideIndex++;
                    this.translateX = this.currentTranslateX
                } else {

                    this.translateX = this.currentTranslateX + this.clientWidth
                }
            },

            onTouchStart(e){
                this.dragging = true;
                this.autoSwipe = false;
                this.startX = e.touches[0].clientX;
                this.currentTranslateX = this.translateX;
                this.distance = 0;

                if (this.timer && this.auto) {
                   this.clearTimer();
                }

            },

            onTouchMove(e){
                this.currentX = e.touches[0].clientX;


                if (this.distanceIndex) this.distance = (this.currentX - this.startX) / this.distanceIndex;
                else  this.distance = this.currentX - this.startX;

                this.translateX = this.currentTranslateX + this.distance

            },


            onTouchEnd(e){

                if (this.distance < 0 && Math.abs(this.distance) > this.clientWidth / 2) {

                    this.loop && this.auto ?this.onLoopSlideLeft() : this.onSlideLeft()

                } else if (this.distance > 0 && Math.abs(this.distance) > this.clientWidth / 2) {

                    this.loop && this.auto ? this.onLoopSlideRight() : this.onSlideRight()

                } else {

                    this.translateX = this.currentTranslateX
                }
                this.dragging = false;
                this.autoSwipe = true;
                if (this.auto) {
                    this.autoSlide()
                }

            },
            resetSlide(){

                this.$refs.wrapper.removeEventListener('webkitTransitionEnd', this.resetSlide, false);
                this.slideIndex = this.minIndex;
                this.autoSwipe = false;
                this.translateX = -this.slideIndex * this.clientWidth;
                setTimeout(() => {
                    this.autoSwipe = true;
                },0)


            },

            resetSlideMax(){

                this.$refs.wrapper.removeEventListener('webkitTransitionEnd', this.resetSlide, false);
                this.slideIndex = this.maxIndex;
                this.autoSwipe = false;
                this.translateX = -this.slideIndex * this.clientWidth;
                setTimeout(() => {
                    this.autoSwipe = true;
                },0)
            },
            autoSlide(){

                this.timer = setTimeout(() => {

                    console.log(this.dragging,this.autoSwipe)
                        if (!this.dragging && this.autoSwipe) {
                            this.translateX  -= this.clientWidth;
                            if (++this.slideIndex > this.maxIndex) {
                                console.log(this.slideIndex)
                                this.slideIndex--;
                                this.$refs.wrapper.addEventListener('webkitTransitionEnd', this.resetSlide, false);
                            }
                            this.autoSlide();
                        }
                    }, this.speed < 1 ? 1000 : this.speed * 1000
                )

            },
            clearTimer(){

                if (this.timer) clearTimeout(this.timer);
                this.timer = null;
            },

            bindEvent()
            {
                this.$refs.wrapper.addEventListener('touchstart', this.onTouchStart, false);
                this.$refs.wrapper.addEventListener('touchmove', this.onTouchMove, false);
                this.$refs.wrapper.addEventListener('touchend', this.onTouchEnd, false)
            }
            ,
            unbindEvent()
            {
                this.$refs.wrapper.removeEventListener('touchstart', this.onTouchStart, false);
                this.$refs.wrapper.removeEventListener('touchmove', this.onTouchMove, false);
                this.$refs.wrapper.removeEventListener('touchend', this.onTouchEnd, false)
            }
        },
        mounted()
        {
            this.clientWidth = this.$el.clientWidth;
            if (this.auto) this.autoSlide();

            this.bindEvent()
        }
        ,
        beforeDestroy()
        {
            this.unbindEvent();
           this.clearTimer();
        }

    }
</script>

<style lang="less">
    .vlc-swipe {
        width: -webkit-fill-available;
        position: relative;
        height: auto;
        overflow-x: hidden;

        &-wrapper {
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            transition: transform .2s ease-out;
            will-change: transform;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
        }
        &-item {
            flex: 1;
            overflow: hidden;

            &.multiple {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

            }

            > img {
                display: block;
                width: 100%;
                height: 80%;
                object-fit: cover;
            }

            > span {
                display: block;
                width: 100%;
                line-height: 25px;
                text-align: center;
                height: 25px;
            }
        }

        &-multiple {
            flex: 1;
            height: 100%;

            > img {
                display: block;
                width: 100%;
                height: 80%;
                object-fit: cover;
            }

            > span {
                display: block;
                width: 100%;
                line-height: 25px;
                text-align: center;
                height: 25px;
            }
        }

        &-dragging {
            transition: none;
            will-change: none
        }

    }


</style>