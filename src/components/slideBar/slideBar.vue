<template>
    <div class="v-lc-slideBar" :style="getStyles">
        <div
                :class="['v-lc-slideBar-wrapper',
                        flex?'v-lc-slideBar-flex':'v-lc-slideBar-slide',
                        type == 'normal' && flex?'normal':'',
                        type == 'vertical' && flex ? 'vertical':'']" ref="wrapper">
            <div :class="['v-lc-slideBar-child',index == index ? 'active':'']" v-for="(item,index) in items" @click="changeBar(index,$event)" :style="{lineHeight:height,height:height,textAlign:textAlign}"><a class="content ellipse-fir">{{item.name}}</a></div>

        </div>
    </div>
</template>

<script>

    export default {
        props:{
            height:{
                type:String,
                default:'.35rem'
            },
            styles:{
                type:Object,
                default:()=>{}
            },
            item:{
                type:Array,
            },
            scrollColor:{
                type:String,
                default:'#39f'
            },
            textAlign:{
                type:String,
                default:'center'
            },
            flex:{
                type:Boolean,
                default:true
            },
            type:{
                type:String,
                default:'normal'
            },
            onChange:{
                type:Function,
            },
            items:{
                type:Array,
                default:()=>[{name:'按时大大'},{name:'按时大大'},{name:'按时大大'},{name:'按时大大'}]
            },
            index:{
                type:[Number,String],
                default:0,
            }
        },
        computed:{

            getStyles(){
                let style = {};

                let styleHeight = {

                    height: `${this.height}`
                }

                let customStyle = this.styles ? this.styles:{};

                Object.assign(style, styleHeight, customStyle);

                return style;
            },
        },
        data(){
            return {
                translateX:0,
                scrollWidth:0,
            }
        },
        methods:{
            changeBar(index,event){

                if (this.index == index) return;
                this.index = index;
                EventBus.$emit('on-change',index)
            }
        },

    }
</script>
<style scoped >
    .v-lc-slideBar {
        display: block;
        width:100%;
        background: #ffffff;
        overflow: hidden;
        position: relative;
    }

    .v-lc-slideBar-wrapper::before {
        position: absolute;
        content: '';
        height:.02rem;
        color: #39f;
    }

    .v-lc-slideBar-wrapper .v-lc-slideBar-child .content {
        height:calc(100% - .02rem);
    }

    .v-lc-slideBar-wrapper .v-lc-slideBar-child.active .content{
        box-sizing:border-box;
        border-bottom:solid #39f;
    }

    .v-lc-slideBar-wrapper .v-lc-slideBar-child a {
        display: inline-block;

        width:100%;
    }

    .v-lc-slideBar-flex.normal .v-lc-slideBar-child.active .content{
        border-bottom-width:.02rem;
    }

    .v-lc-slideBar-flex.vertical .v-lc-slideBar-child.active .content{
        border-right-width:.02rem;
    }

    .v-lc-slideBar-wrapper.v-lc-slideBar-flex {
        display: flex;
        align-items: center;
    }

    .v-lc-slideBar-wrapper.v-lc-slideBar-flex.normal {
        flex-direction: row;
    }

    .v-lc-slideBar-wrapper.v-lc-slideBar-flex.vertical {
        flex-direction: column;
    }

    .v-lc-slideBar-wrapper.v-lc-slideBar-flex .v-lc-slideBar-child {
        flex:1;
    }

    .v-lc-slideBar-slide{
        position: absolute;
        top:0;
        bottom:0;
        left:0;
        right:0;
    }

    .v-lc-slideBar-slide .v-lc-slideBar-child {
        display: inline-block;

    }



</style>