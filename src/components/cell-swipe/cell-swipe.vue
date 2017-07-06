<template>
    <Cell
            :title="title"
            :value="value"
            :label="label"
            :link="link"
            :has-mask="hasMask"
            @click.native="swipe()"
            v-clickoutside:touchstart="swipe"
            @touchstart.native="onTouchStart"
            @touchmove.native="onTouchMove"
            @touchend.native="onTouchEnd"
            ref="cell"
    >

        <div class="vlc-cell-swipe-group" slot="left" ref="left">
            <span class="vlc-cell-swipe-btn"
                  v-for="item in left"
                  v-html="item.content"
                  :style="item.style"
                  @click.stop="item.handleClick &&　item.handleClick(),swipe()"></span>
        </div>


        <div class="vlc-cell-swipe-group" slot="right" ref="right">
            <span class="vlc-cell-swipe-btn"
                  v-for="item in right"
                  v-html="item.content"
                  :style="item.style"
                  @click.stop="item.handleClick &&　item.handleClick(),swipe()"></span>
        </div>

    </Cell>
</template>

<script>

    import Cell from '../cell'
    import Clickoutside from '../../directives/clickoutside'
    export default {
        name: 'CellSwipe',
        components: {
            Cell
        },
        props: {
            title: String,
            value: {},
            label: String,
            link: String,
            left: Array,
            right: Array,
            hasMask: Boolean
        },
        data(){
            return {
                isDrag: false,
                translate: 0,
                $wrapper: null,
                $left: null,
                $right: null,
                leftWidth: 0,
                rightWidth: 0,
                startX: 0,
                currentX: 0,
                direction: '',
                distance: 0
            }
        },
        directives: {
            Clickoutside
        },
        mounted(){
            this.$wrapper = this.$refs.cell.$el.querySelector('.vlc-cell-main');
            this.$left = this.$refs.left.parentNode

            this.$right = this.$refs.right.parentNode
            this.leftWidth = this.$left.offsetWidth
            this.rightWidth = this.$right.offsetWidth
            this.$left.style.webkitTransform = this.translate3d(-this.leftWidth)
            this.$right.style.webkitTransform = this.translate3d(this.rightWidth + 1)
            this.$wrapper.style.webkitTransform = this.translate3d(0)

        },
        computed: {},
        methods: {
            translate3d(translate){
                return `translate3d(${translate}px,0,0)`
            },
            swipe(translate = 0){

                this.translate = translate;
                this.$wrapper.style.webkitTransform = this.translate3d(translate);
                this.$left.style.webkitTransform = this.translate3d(-this.leftWidth + translate)
                this.$right.style.webkitTransform = this.translate3d(this.rightWidth + translate)
            },
            onTouchStart(e){

                this.startX = e.touches[0].clientX
            },
            onTouchMove(e){

                e.preventDefault();
                this.currentX = e.touches[0].clientX
                this.translate = this.currentX - this.startX
                this.direction = this.translate < 0 ? 'left' : 'right'

                this.translate = this.direction === 'left' ?
                    Math.abs(this.translate) > this.rightWidth ?
                        -this.rightWidth : this.translate :
                    Math.abs(this.translate) > this.leftWidth ?
                        this.leftWidth : this.translate

                this.$nextTick(() => {
                    this.swipe(this.translate)
                })

            },

            onTouchEnd(){

                if (Math.abs(this.translate) > this.leftWidth / 2 && this.direction === 'right') {
                    this.swipe(this.leftWidth)
                } else if (Math.abs(this.translate < this.rightWidth && this.direction === 'left')) {
                    this.swipe(-this.rightWidth)
                } else {
                    this.swipe()
                }
            },

        },
        watch: {

            left(val){
                this.$nextTick(() => {
                    this.leftWidth = this.$left.offsetWidth
                    this.swipe()
                })
            },
            right(val){
                this.$nextTick(() => {

                    this.rightWidth = this.$right.offsetWidth
                    this.swipe()
                })
            }
        }
    }
</script>