<template>
    <div :class="classes" :style="getStyles">
        <div :class="['vlc-slideBar-header',fixed ? 'fixed':'']" ref="header">
            <div :class="wrapperClasses"  ref="wrapper" :style="{width:flex ? 'auto' : items.length * itemWidth + 'px'}">
                <div :class="['vlc-slideBar-child',startIndex == key ? 'active':'',!flex ? 'normalChild':'']" v-for="(item,key) in items"
                     @click="changeBar(key,$event)" :style="{textAlign:textAlign,width:itemWidth+'px',height:scrollHeight,lineHeight:scrollHeight}">
                    <slot :name="'slide-bar-header-'+key">
                        <a class="content ellipse-fir">{{item.name}}</a>
                    </slot>
                </div>
                <div class="vlc-slideBar-wrapper-absolute" :style="getScrollStyle"></div>
            </div>
        </div>

        <div class="vlc-slideBar-container" :style="{height:height}">
            <div :class="contentClasses" :style="getContainerStyle" ref="content">
                <div :class="['vlc-slideBar-content-item',startIndex == index ? 'active':'' ]" v-for="(item,index) in items">
                    <slot :name="'slot-item-'+index"> </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const prefixCls = 'vlc-slideBar';
    export default {
        props: {
            scrollHeight:{
                type:String,
                default:'30px'
            },
            height: {
                type: String,
                default: '235px'
            },
            styles: {
                type: Object,
                default: () => {
                }
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
                default: () => [{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}]
            },
            index: {
                type: [Number, String],
                default: 0,
            },
            distanceIndex: {
                type: Number,
                default: 1.5
            },
            canDrag:{
                type:Boolean,
                default:true
            },
            isFixedHeader:{
                type:Boolean,
                default:false
            }
        },
        mounted(){
            this.clientWidth = this.$el.clientWidth;
            this.itemWidth = this.flex ? this.clientWidth / this.items.length : this.itemWidth;
            this.onScroll();
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

                let fixedStyle = {paddingTop:this.fixed ? this.scrollHeight : 0}

                Object.assign(style, customStyle,fixedStyle);

                return style;
            },
            getContainerStyle(){

                return {
                    width: `${this.clientWidth * this.items.length}px`,
                    transform: `translate3d(${this.translateX}px,0,0)`
                }
            },
            getScrollStyle(){

                return {
                    width:`${this.itemWidth}px`,
                    transform:`translate3d(${this.scrollTranslateX}px,0,0)`,
                    backgroundColor:this.scrollColor
                }
            },
            wrapperWidth(){
                return this.flex ? `auto` : `${this.itemWidth * this.items.length}px`
            },
            maxIndex(){
                return this.items.length - 1
            },
            scrollTranslateX(){
                return this.startIndex * this.itemWidth
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
                itemWidth:this.childWidth,
                fixed:false
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
            onScroll(e){
                this.$el.getBoundingClientRect().top <= 0 ? this.fixed = true : this.fixed = false
            },
            onResize(){

                this.clientWidth = this.$el.clientWidth;
                this.itemWidth = this.flex ? this.clientWidth / this.items.length : this.itemWidth;

            },
            bindEvents(){
                if (this.canDrag) {
                    this.$refs.content.addEventListener('touchstart', this.onTouchStart);
                    this.$refs.content.addEventListener('touchmove', this.onTouchMove);
                    this.$refs.content.addEventListener('touchend', this.onTouchEnd)
                }

                if (this.isFixedHeader) {

                    window.addEventListener('scroll',this.onScroll)
                }

                window.addEventListener('resize',this.onResize)

            },
            unbindEvents(){

                this.$refs.content.removeEventListener('touchstart', this.onTouchStart);
                this.$refs.content.removeEventListener('touchmove', this.onTouchMove);
                this.$refs.content.removeEventListener('touchend', this.onTouchEnd);
                window.removeEventListener('scroll',this.onScroll);
                window.removeEventListener('resize',this.onResize)

            }
        },
        beforeDestroy(){
            this.unbindEvents()
        },
        watch:{
            index(val){
                this.startIndex = val
            }
        }

    }
</script>
