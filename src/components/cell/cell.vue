<template>
    <a  :href="toLink" :class="classes">
        <span v-if="hasMask" :class="maskClass"></span>
        <div :class="leftClasses">
            <slot name="left"></slot>
        </div>
        <div :class="wrapperClasses">
            <div :class="titleClass">
                <slot name="icon"></slot>
                <slot name="title">
                    <span v-text="title"></span>
                    <span :class="labelClass" v-text="label"></span>
                </slot>
            </div>
            <div :class="valueClass">
                <slot name="value">
                    <span v-text="value">说明文字</span>
                </slot>
            </div>
        </div>
        <div :class="rightClasses">
            <slot name="right"></slot>
        </div>
    </a>
</template>

<script>

    const prefixCls = 'vlc-cell';
    export default {
        name:'Cell',
        props:{
            title:String,
            value:{},
            label:String,
            link:String,
            hasMask:Boolean
        },
        computed:{
            toLink(){
                if (this.link && this.$router) {
                   let matchLink =  this.$router.match(this.link)
                    if (!matchLink.matched.length) return this.link

                    this.$nextTick(()=>{
                       this.$el.addEventListener('click',this.handleClick,false)
                    })
                }

                return this.link
            },
            classes(){
                return [
                    `${prefixCls}`
                ]
            },
            maskClass(){
                return [
                    `${prefixCls}-mask`
                ]
            },
            leftClasses(){
                return [
                    `${prefixCls}-left`
                ]
            },
            rightClasses(){
                return [
                    `${prefixCls}-right`
                ]
            },
            wrapperClasses(){
                return [
                    `${prefixCls}-main`,
                    'vlc-1px-top'
                ]
            },
            titleClass(){
                return [
                    `${prefixCls}-main-title`,
                ]
            },
            valueClass(){
                return [
                    `${prefixCls}-main-value`,
                ]
            },
            labelClass(){
                return [
                    `${prefixCls}-main-label`,
                ]
            },
        },
        methods:{
            handleClick(e){
                e.preventDefault();
                this.$router.push(this.link)
            }
        }

    }
</script>