<template>
    <div class="vlc-pullDown" :style="{height:`${height}px`}" ref="scroll">
        <div class="vlc-pullDown-top" ref="top">
            <slot name="top"><span>{{upText}}</span></slot>
        </div>
        <div :class="['vlc-pullDown-content',drag?'drag':'']"
             :style="{ 'transform': 'translate3d(0, ' + translateY + 'px, 0)' ,'height':height+'px'}" ref="content">
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
                    <li>1</li>
                    <li>1</li>
                </ul>
            </slot>

        </div>
        <div class="vlc-pullDown-bottom" ref="bottom">
            <slot name="bottom"><span>{{downText}}</span></slot>
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
            refresh: Function,
            upLoadingText: {
                type: String,
                default: '加载中...'
            },
            upDistance: {
                type: Number,
                default: 70
            },
            upPullText: {
                type: String,
                default: '下拉刷新'
            },
            upDropText: {
                type: String,
                default: '释放更新'
            },
            maxDistance: {
                type: Number,
                default: 0
            },
            speed: {
                type: Number,
                default: 2
            },
            sense: {
                type: Boolean,
                default: true
            },
            downPullText: {
                type: String,
                default: '上拉刷新'
            },
            downDropText: {
                type: String,
                default: '释放更新'
            },
            downLoadingText: {
                type: String,
                default: '加载中...'
            },
            downDistance: {
                type: Number,
                default: 70
            },
            loadMore: Function,
            hasMore: {
                type: Boolean,
                default: false
            }

        },

        data(){
            return {
                translateY: 0,
                upStatus: '',
                downStatus: '',
                scrollTop: 0,
                startY: 0,
                currentY: 0,
                startScrollTop: 0,
                drag: false,
                upDropped: false,
                downDropped: false,
                direction: '',
                upText: '',
                downText: '',
                down: false,
                scrollTarget: null
            }
        },
        methods: {
            onLoadUp(){
                this.translateY = 0;
                this.upStatus = ''

            },
            onLoadDown(){
                this.translateY = 0;
                this.downStatus = '';
                console.log('asdasdasdadasd')
            },
            onTouchStart(e){

                this.startY = e.touches[0].clientY;
                this.startTranslateY = this.translateY;
                this.startScrollTop = this.$refs.scroll.scrollTop;
                this.down = false;
                if (this.upStatus !== 'loading') {
                    this.upStatus = 'pull';
                    this.upDropped = false;
                }

                if (this.downStatus !== 'loading') {
                    this.downStatus = 'pull';
                    this.downDropped = false;
                }
            },
            onTouchMove(e){
                let pos = this.$el.getBoundingClientRect();
                if (this.startY < pos.top && this.startY > pos.down)  return;
                this.currentY = e.touches[0].clientY;
                this.scrollTop = this.$refs.scroll.scrollTop;
                let distance = (this.currentY - this.startY) / this.speed;

                this.direction = distance > 0 ? 'down' : 'up';
                if (this.currentY >= this.startY && typeof this.refresh == 'function' && this.$refs.content.scrollTop == 0 && this.direction == 'down' && this.upStatus != 'loading') {

                    event.preventDefault();
                    event.stopPropagation();
                    if (this.maxDistance > 0) {

                        this.translateY = distance <= this.maxDistance ? distance - this.startScrollTop : this.translateY;
                    } else {
                        this.translateY = distance - this.startScrollTop;
                    }


                    if (this.translateY < 0) {
                        this.translateY = 0;
                    }

                    this.upStatus = this.translateY >= this.upDistance ? 'drop' : 'pull';

                    this.drag = true;
//                  this.translateY = (this.currentY - this.startY - this.startScrollTop + this.scrollTop + this.startTranslateY) / this.distanceIndex;

                }

                if (this.direction === 'up') {

                    this.down = this.down || this.isBottom()
                }

                if (this.currentY < this.startY && this.down && typeof this.loadMore == 'function' && this.direction == 'up' && this.downStatus != 'loading') {
                    event.preventDefault();
                    event.stopPropagation();

                    if (this.maxDistance > 0) {
                        this.translateY = Math.abs(distance) <= this.maxDistance
                            ? this.scrollTop - this.startScrollTop + distance : this.translateY;
                    } else {
                        this.translateY = this.scrollTop - this.startScrollTop + distance;
                    }

                    if (this.translateY > 0) {
                        this.translateY = 0;
                    }
                    this.downStatus = -this.translateY >= this.downDistance ? 'drop' : 'pull';

                    this.drag = true;
//                  this.translateY = (this.currentY - this.startY - this.startScrollTop + this.scrollTop + this.startTranslateY) / this.distanceIndex;

                }
            },
            onTouchEnd(e){
                this.scrollTop = this.$refs.scroll.scrollTop;
                if (this.direction == 'down' && this.scrollTop == 0 && this.translateY >= 0) {
                    this.upDropped = true;
                    if (this.upStatus == 'drop') {

                        let marginTop = Number(document.defaultView.getComputedStyle(this.$refs.top).marginBottom.split('px')[0]);
                        this.translateY = -marginTop;
                        this.upStatus = 'loading';
                        this.refresh();

                    } else {

                        this.upStatus = 'pull';
                        this.translateY = 0;

                    }
                }

                if (this.direction == 'up' && this.down && this.translateY <= 0) {
                    this.downDropped = true;
                    this.down = false;
                    if (this.downStatus === 'drop') {
                        let marginBottom = Number(document.defaultView.getComputedStyle(this.$refs.bottom).marginTop.split('px')[0]);
                        this.translateY = marginBottom;
                        this.downStatus = 'loading';
                        this.loadMore();
                    } else {
                        this.translateY = 0;
                        this.downStatus = 'pull';
                    }
                }

                this.direction = '';
                this.drag = false
            },
            getScrollEventTarget(element) {
                let currentNode = element;
                while (currentNode && currentNode.tagName !== 'HTML' &&
                currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                    let overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                    if (overflowY === 'scroll' || overflowY === 'auto') {
                        return currentNode;
                    }
                    currentNode = currentNode.parentNode;
                }
                return window;
            },

            isBottom(){

                if (this.scrollTarget === window) {
                    return document.body.scrollTop + document.documentElement.clientHeight >= document.body.scrollHeight;
                } else {
                    return this.$el.getBoundingClientRect().bottom <= this.scrollTarget.getBoundingClientRect().bottom + 1;
                }
            },

            bindEvent(){
                this.$el.addEventListener('touchstart', this.onTouchStart, false);
                this.$el.addEventListener('touchmove', this.onTouchMove, false);
                this.$el.addEventListener('touchend', this.onTouchEnd, false);
            },
            unbindEvent(){
                this.$el.removeEventListener('touchstart', this.onTouchStart, false);
                this.$el.removeEventListener('touchmove', this.onTouchMove, false);
                this.$el.removeEventListener('touchend', this.onTouchEnd, false);
            }
        },
        mounted(){
            this.bindEvent();
            this.scrollTarget = this.getScrollEventTarget(this.$el)

        },
        beforeDestroy(){
            this.unbindEvent();
        },
        watch: {
            upStatus(val){

                switch (val) {
                    case 'pull':
                        this.upText = this.upPullText;
                        break;

                    case 'drop':
                        this.upText = this.upDropText;
                        break;

                    case 'loading':
                        this.upText = this.upLoadingText;
                }

                this.$emit('on-change-up-status', val)
            },
            downStatus(val){

                switch (val) {
                    case 'pull':
                        this.downText = this.downPullText;
                        break;

                    case 'drop':
                        this.downText = this.downDropText;
                        break;

                    case 'loading':
                        this.downText = this.downLoadingText;
                        break;

                }
                this.$emit('on-change-down-status', val)
            }
        },

    }
</script>
<style lang="less">

    .vlc-pullDown {
        width: -webkit-fill-available;
        overflow: hidden;
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
        overflow: scroll;
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