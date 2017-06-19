<template>
    <div :class="containerClasses" @scroll="onScroll" :style="{height:height}">
        <div class="vlc-loadmore-top" v-if="refresh" :style="{height:translateY+'px'}">
            <div class="vlc-loadmore-status" >
                <slot name="top">
                    <span class="spinner"><spinner v-if="upStatus == 'loading'" size="15" type="snake"></spinner></span><span class="vlc-loadmore-text">{{upText}}</span>
                </slot>
            </div>
        </div>
        <div :class="contentClasses" :style="{'transform':'translate3d(0, ' + translateY + 'px, 0)'}">
            <slot></slot>
        </div>

        <div class="vlc-loadmore-bottom" v-if="loadMore">
            <div class="vlc-loadmore-status">
                <slot name="bottom">
                    <span class="spinner"><spinner v-if="downStatus == 'loading'" size="15" type="snake"></spinner></span><span class="vlc-loadmore-text">{{downText}}</span>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>

    import Spinner from '../spinner'

    const prefixCls = 'vlc-loadmore';
    export default {
        name:'loadmore',
        components:{
            Spinner
        },
        props:{
            height:{
                type:[Number,String],
                default:'100%'
            },
            refresh:Function,
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
                default: '↓ 下拉刷新'
            },
            upDropText: {
                type: String,
                default: '↑ 释放更新'
            },
            maxDistance: {
                type: Number,
                default: 0
            },
            speed: {
                type: Number,
                default: 2
            },
            downEndText: {
                type: String,
                default: '没有更多了'
            },
            downDropText: {
                type: String,
                default: '↑ 下拉加载数据'
            },
            downLoadingText: {
                type: String,
                default: '加载中...'
            },
            downDistance: {
                type: Number,
                default: 20
            },
            loadMore: Function,
            hasMore: {
                type: Boolean,
                default: true
            },
            styles:{
                type:Object,
                default(){
                    return {}
                }
            },
            auto:{
                type:Boolean,
                default:true
            }
        },
        data(){

            return {
                translateY : 0,
                startTranslateY:0,
                currentY:0,
                startY:0,
                upStatus:'',
                downStatus:'',
                direction:'',
                upText:'',
                downText:'',
                down:false,
                drag:false,
            }
        },
        computed:{
            containerClasses(){
                return [
                    `${prefixCls}`
                ]
            },
            contentClasses(){
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-drag`]:!this.drag
                    }
                ]
            }
        },
        mounted(){
            if (this.auto && this.refresh && typeof this.refresh == 'function') {
                this.translateY = 40;
                this.drag = false;
                this.direction= 'down'
                this.upStatus = 'loading';
                this.refresh()
            }
            this.bindEvents();
        },
        methods:{
            onLoadOff(){


                this.translateY = 0;
                this.upStatus = ''


                if (this.direction == 'up') {

                    this.downStatus = '';
                }
            },
            onScroll(e){
                if (this.downStatus == 'loading') return;
                let scrollTop  = this.$el.scrollTop;
                if (this.loadMore && typeof this.loadMore == 'function' && this.direction === 'up') {
                    let absY = this.$el.scrollHeight - (this.$el.offsetHeight + scrollTop);

                    if (absY > 50 && this.downStatus === 'drop') {
                        this.downStatus = '';
                    } else if (absY <= 50 && absY > this.downDistance && this.hasMore) {
                        console.log('a')
                        this.downStatus = 'drop';
                    } else if (absY <= this.downDistance) {
                        console.log('b')
                        this.downStatus = 'loading';

                        if (this.hasMore) {
                            this.downStatus = 'loading';
                            this.loadMore();
                        } else {
                            this.downStatus = 'end';
                            let that = this;
                            setTimeout(() => {
                                that.done();
                            }, 1000);
                        }
                    }
                }
            },
            onTouchStart(e){
                if (this.upStatus === 'loading') return;
                this.startY = e.touches[0].clientY;
                this.startTranslateY = this.translateY;
                this.down = false;

            },
            onTouchMove(e){

                let pos = this.$el.getBoundingClientRect();
                if (this.upStatus === 'loading' || this.startY < pos.top && this.startY > pos.down) return;
                this.currentY = e.touches[0].clientY;
                let distance = (this.currentY - this.startY) / this.speed;
                let scrollTop = this.$el.scrollTop;
                this.direction = distance > 0 ? 'down' : 'up';
                console.log(this.direction)
                if (this.currentY >= this.startY && typeof this.refresh === 'function' && scrollTop === 0 && this.direction === 'down' ) {
                    event.preventDefault();
                    event.stopPropagation();
                    if (this.maxDistance > 0 ) {
                        this.translateY = distance <= this.maxDistance ? distance - scrollTop : this.translateY;
                    } else {
                        this.translateY = distance - scrollTop;
                    }

                    if (this.translateY < 0) {
                        this.translateY = 0;
                    }

                    this.upStatus = this.translateY >= this.upDistance ? 'drop' : 'pull';
                    this.drag = true;


                }


            },
            onTouchEnd(e){
                if (this.upStatus === 'loading') return;
                if (this.direction === 'down' && this.$el.scrollTop <= 0 && this.translateY >= 0) {

                    if (this.upStatus == 'drop') {
                        this.translateY = 40;
                        this.upStatus = 'loading';
                        this.refresh();
                    } else {

                        this.translateY = 0;
                    }
                }

                this.direction = '';
                this.drag = false;
            },
            bindEvents(){
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
        watch:{
            upStatus(val){
                switch (val){
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
                console.log(val)
                switch (val) {
                    case 'end':
                        this.downText = this.downEndText;
                        break;

                    case 'drop':
                        this.downText = this.downDropText;
                        break;

                    case 'loading':
                        this.downText = this.downLoadingText;
                        break;
                    default:
                        this.downText = '';
                        break;

                }
                this.$emit('on-change-down-status', val)
            }
        }

    }
</script>