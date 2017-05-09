<template>
    <div class="vlc-pullDown" :style="{height:`${height}px`}" ref="scroll">
        <div class="vlc-pullDown-top" ref="top">
            <slot name="top"><span v-if="translateY <= topDistance">{{topPullText}}</span><span
                    v-else>{{topDropText}}</span></slot>
        </div>
        <div :class="['vlc-pullDown-content',drag?'drag':'']"
             :style="{ 'transform': 'translate3d(0, ' + translateY + 'px, 0)' }" ref="content">
            <slot name="content">
                <ul class="vlc-pullDown-main">
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </slot>

        </div>
        <div class="vlc-pullDown-bottom" ref="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            height: {
                type: Number,
                default: 400
            },
            topMethod: Function,
            topLoadingText: {
                type: String,
                default: '加载中...'
            },
            topDistance: {
                type: Number,
                default: 70
            },
            topPullText: {
                type: String,
                default: '下拉刷新'
            },
            topDropText: {
                type: String,
                default: '释放更新'
            },
            maxDistance: {
                type: Number,
                default: 0
            },
            distanceIndex: {
                type: Number,
                default: 1
            },
            autoFill: {
                type: Boolean,
                default: true
            },
            bottomPullText: {
                type: String,
                default: '上拉刷新'
            },
            bottomDropText: {
                type: String,
                default: '释放更新'
            },
            bottomLoadingText: {
                type: String,
                default: '加载中...'
            },
            bottomDistance: {
                type: Number,
                default: 70
            },
            bottomMethod: Function,
            bottomAllLoaded: {
                type: Boolean,
                default: false
            }

        },
        data(){
            return {
                translateY: 0,
                topStatus: '',
                scrollTop: 0,
                startY: 0,
                currentY: 0,
                startScrollTop: 0,
                drag: false
            }
        },
        methods: {
            onTouchStart(e){

                this.startY = e.touches[0].clientY;
                this.startTranslateY = this.translateY;
                this.startScrollTop = this.$refs.scroll.scrollTop;
            },
            onTouchMove(e){

                console.log(this.$refs.scroll.scrollTop);
                this.currentY = e.touches[0].clientY;
                this.scrollTop = this.$refs.scroll.scrollTop;
                if (this.currentY > this.startY) {

                    if (this.scrollTop == 0 && this.topStatus !== 'loading') {

                        this.topStatus = 'pull';

                        event.preventDefault();
                        event.stopPropagation();
                        this.drag = true;
                        this.translateY = (this.currentY - this.startY - this.startScrollTop + this.scrollTop + this.startTranslateY) * this.distanceIndex
                    }
                } else if (this.currentY < this.startY) {
                    console.log(this.$el, this.$refs.content)
                    let maxScrollTop = Number(document.defaultView.getComputedStyle(this.$refs.content).height.split('px')[0]) - this.height;
                    console.log(maxScrollTop)
                    if (this.scrollTop == maxScrollTop) {
                        this.topStatus = 'pull';
                        event.preventDefault();

                        event.stopPropagation();
                        this.drag = true;
                        this.translateY = (this.currentY - this.startY - this.startScrollTop + this.scrollTop + this.startTranslateY) * this.distanceIndex
                    }

                }


            },
            onTouchEnd(e){
                this.topStat = 'loading';
                if (this.translateY >= this.topDistance && typeof this.topMethod == 'function') {
                    this.topMethod();

                    let marginTop = document.defaultView.getComputedStyle(this.$refs.top).marginBottom.split('px')[0];

                    this.translateY = 0;
                    this.translateY -= marginTop

                } else if (this.translateY <= -this.bottomDistance && typeof  this.bottomMethod == 'function') {
                    this.bottomMethod();

                    let marginBottom = document.defaultView.getComputedStyle(this.$refs.top).marginBottom.split('px')[0];
                    this.translateY = 0;
                    this.translateY += marginBottom

                } else {
                    this.translateY = 0
                }

                this.drag = false
            },
            getScrollTop(e){

            },
            bindEvent(){
                this.$el.addEventListener('touchstart', this.onTouchStart, false)
                this.$el.addEventListener('touchmove', this.onTouchMove, false)
                this.$el.addEventListener('touchend', this.onTouchEnd, false)
            },
            unbindEvent(){
                this.$el.removeEventListener('touchstart', this.onTouchStart, false)
                this.$el.removeEventListener('touchmove', this.onTouchMove, false)
                this.$el.removeEventListener('touchend', this.onTouchEnd, false)
            }
        },
        mounted(){
            this.bindEvent();
        },
        beforeDestroy(){
            this.unbindEvent();
        }

    }
</script>
<style lang="less">

    .vlc-pullDown {
        width: -webkit-fill-available;
        overflow-y: scroll;
        background: #555555;
    }

    .vlc-pullDown-top {
        width: -webkit-fill-available;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: -40px;

    }

    .vlc-pullDown-content {

        transition: all .2s ease-in;
        will-change: transform
    }

    .vlc-pullDown-content.drag {
        transition: none;
    }

    .vlc-pullDown-bottom {
        width: -webkit-fill-available;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: -40px
    }

    .vlc-pullDown .vlc-pullDown-main {
        display: inline-block;
        width: -webkit-fill-available;
    }

    .vlc-pullDown .vlc-pullDown-main li {
        background: #ffffff;
        display: inline-block;
        width: -webkit-fill-available;
        height: 40px;
        text-align: center;
        line-height: 40px;
    }
</style>