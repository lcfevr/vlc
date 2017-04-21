<template>
    <div class="v-lc-sildeBar" :style="getStyles">
        <ul class="v-lc-slideBar-wrapper">
            <li :style="{lineHeight:height,textAlign:textAlign}">1</li>
        </ul>
    </div>
</template>

<script>


    export default {
        props:{
            height:{
                type:String,
                default:'.35rem'
            },
            style:{
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
            }


        },
        computed:{

            getStyles(){
                let style = {};

                let styleHeight = {

                    height: `${this.height}`
                }

                let customStyle = this.style ? this.style:{};

                Object.assign(style, styleHeight, customStyle);

                return style;
            }
        },
        data(){
            return {
                translateX:0,
                scrollWidth:0,
            }
        }
    }
</script>
<style scoped >
    .v-lc-sildeBar{
        width:100%;
        background: #ffffff;
        overflow: hidden;
    }

    .v-lc-slideBar-wrapper {
        display: flex;
        justify-content: center;
        height:inherit;
    }

    .v-lc-slideBar-wrapper.normal {
        flex-direction: row;

    }

    .v-lc-slideBar-wrapper.vertical {
        flex-direction: column;
    }

    .v-lc-slideBar-wrapper li {
        display: inline-block;
        flex:1;
        height:100%;
        box-sizing: border-box;
    }
</style>