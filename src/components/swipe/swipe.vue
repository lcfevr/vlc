<template>
    <div :class="classes" :style="{height:height}">

        <div :class="wrapperClasses" :style="styles" ref="wrapper" >
            <div :class="itemClasses" v-for="(item,index) in arrayList" v-if="arrayList.length">
                <template v-if="isMultiple">
                    <div class="vlc-swipe-multiple" v-for="(_item,$index) in item" @click="choose(_item,$index)">
                        <slot  :item="_item" :index="$index">
                            <img :src="_item.image"/>
                            <span>{{_item.spec}}</span>
                        </slot>
                    </div>
                </template>
                <template v-else>
                    <div class="vlc-swipe-single" @click="choose(item,index)">
                        <slot :item="item" :index="index">
                            <img :src="item.image">
                            <span>{{item.spec}}</span>
                        </slot>
                    </div>
                </template>
            </div>

        </div>
        <div :class="dotsClasses">
            <span :class="['vlc-swipe-dots-item',(loop?(index+1):index)==slideIndex?'active':'']"
                  v-for="(item,index) in dotLength"></span>
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
            },
            perpage: {
                type: Number,
                default: 1
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
                timer: null,
                clientHeight: 0,
                localList: this.list
            }
        },
        watch:{
            list(val){
                this.localList = val
            },
            startIndex(val){
                this.slideIndex = val
            }
        },
        computed: {
            dotLength(){
                return this.localList.length
            },
            minIndex(){
                return this.loop ? 1 : 0
            },
            maxIndex(){
                return this.loop ? this.length - 2 : this.length - 1
            },
            arrayList(){
                if (!this.localList.length) return [];
                if (this.loop) {
                    return [].concat([this.localList[this.localList.length - 1]], this.localList, [this.localList[0]])
                } else {
                    return this.localList
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

            dotsClasses(){
                return [
                    `${prefixCls}-dots`,
                    {
                        [`${prefixCls}-dots-bottom`]: this.dots === 'bottom',
                        [`${prefixCls}-dots-top`]: this.dots === 'top'
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

                if (this.perpage <= 1) {
                    return false;
                } else {
                    const page = this.perpage;
                    let arr = [];
                    let multipleArr = [];
                    this.localList.forEach((item, index) => {
                        if (arr.length < page) {
                            arr.push(item);
                            if (this.localList.length - 1 === index) {
                                multipleArr.push(arr);
                            }
                        } else {
                            multipleArr.push(arr);
                            arr = [];
                            arr.push(item)
                        }
                    });

                    this.localList = multipleArr;
                    return true;
                }
            },
            styles(){

                return {

                    width: `${this.length * this.clientWidth}px`,
                    height: Object.is(Number.parseInt(this.height), NaN) ? `${this.height}` : `${this.height}px`,
                    transform: `translate3d(${this.translateX}px,0,0)`
                }
            },
            length(){
                return this.loop ? this.localList.length + 2 : this.localList.length
            },
            currentIndex(){

                return Math.ceil(this.translateX / this.clientWidth)
            }
        },
        methods: {

            choose(item, index) {

                if (item.onClick && typeof item.onClick == 'function') {

                    item.onClick(item, index)
                } else if(item.link &&　/(http|https)/i.test(item.link)){

                    window.location.href = item.link

                }
            },

            onLoopSlideLeft(){
                this.translateX = this.currentTranslateX - this.clientWidth;
                if (++this.slideIndex > this.maxIndex) {
                    this.slideIndex--;
                    this.$refs.wrapper.addEventListener('webkitTransitionEnd', this.resetSlide, false);
                }
            },
            onLoopSlideRight(){
                this.translateX = this.currentTranslateX + this.clientWidth
                if (--this.slideIndex < this.minIndex) {
                    this.slideIndex++;
                    this.$refs.wrapper.addEventListener('webkitTransitionEnd', this.resetSlideMax, false);
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
                e.preventDefault();
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
                e.preventDefault();
                this.currentX = e.touches[0].clientX;


                if (this.distanceIndex) this.distance = (this.currentX - this.startX) / this.distanceIndex;
                else  this.distance = this.currentX - this.startX;

                this.translateX = this.currentTranslateX + this.distance

            },


            onTouchEnd(e){
                e.preventDefault();
                if (this.distance < 0 && Math.abs(this.distance) > this.clientWidth / 5) {

                    this.loop && this.auto ? this.onLoopSlideLeft() : this.onSlideLeft()

                } else if (this.distance > 0 && Math.abs(this.distance) > this.clientWidth / 5) {

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

            onResize(){
                this.clientWidth = this.$el.clientWidth;
                this.clientHeight = getComputedStyle(this.$el.querySelector('.vlc-swipe-wrapper')).height;
            },
            resetSlide(){

                this.$refs.wrapper.removeEventListener('webkitTransitionEnd', this.resetSlide, false);

                this.slideIndex = this.minIndex;
                this.autoSwipe = false;
                this.translateX = -this.slideIndex * this.clientWidth;
                setTimeout(() => {
                    this.autoSwipe = true;
                }, 0)

            },

            resetSlideMax(){

                this.$refs.wrapper.removeEventListener('webkitTransitionEnd', this.resetSlideMax, false);
                this.slideIndex = this.maxIndex;
                this.autoSwipe = false;
                this.translateX = -this.slideIndex * this.clientWidth;
                setTimeout(() => {
                    this.autoSwipe = true;
                }, 0)
            },
            autoSlide(){

                this.timer = setTimeout(() => {


                        if (!this.dragging && this.autoSwipe) {
                            this.translateX -= this.clientWidth;
                            if (++this.slideIndex > this.maxIndex) {

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
                window.addEventListener('resize',this.onResize)
            }
            ,
            unbindEvent()
            {
                this.$refs.wrapper.removeEventListener('touchstart', this.onTouchStart, false);
                this.$refs.wrapper.removeEventListener('touchmove', this.onTouchMove, false);
                this.$refs.wrapper.removeEventListener('touchend', this.onTouchEnd, false)
                window.removeEventListener('resize',this.onResize)
            }
        },
        mounted()
        {
            this.clientWidth = this.$el.clientWidth;
            this.clientHeight = getComputedStyle(this.$el.querySelector('.vlc-swipe-wrapper')).height;
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

