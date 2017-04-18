<template>
    <div class="v-lc-picker_slot" :style="styles">
        <ul :class="{'dragging':dragging}" :style="{transform:`translate3d(0,${translateY}px,0)`}" v-touch:panstart="_onTouchStart"  v-touch:panmove="_onTouchMove" v-touch:panend="_onTouchEnd">

            <li :style="{height:height+'px'}"></li>
            <li :style="{height:height+'px'}"></li>
            <li v-for="item in list"  :class="{'current':$index == current.index,
                                                'level_1_1':$index - current.index == 1,
                                                'level_2_1':$index - current.index == 2,
                                                'level_3_1':$index - current.index == 3,
                                                'level_1':$index - current.index == -1,
                                                'level_2':$index - current.index == -2,
                                                'level_3':$index - current.index == -3}"
                :style="{textAlign:align,height:height+'px'}">{{item.value}}</li>
            <li :style="{height:height+'px'}"></li>
            <li :style="{height:height+'px'}"></li>
        </ul>
    </div>
</template>

<script>


    export default {
        data(){
            return {
                count:7, //默认显示行数
                height:35,
                current:{},
                translateY:0,
                currentTranslateY:0,
                dragging:false
            }
        },
        watch:{
            list(value){
                this.translateY = 0;
            },
            initItem(value){
                if(!value) {
                    this.current = Object.assign({},this.current,{code:'',target:this.target,index:'',value:''});
                    this.$parent.$emit('change',this.target,this.current)
                } else {
                    this.scrollToItem(value)
                }

            }

        },
        ready(){
            if(!this.initItem) {
                this.current = Object.assign({},this.current,{code:'',target:this.target,index:'',value:''});
                this.$parent.$emit('change',this.target,this.current)
            } else {
                this.scrollToItem(this.initItem)
            }


        },
        props:{
            styles:{
                type:Object,

                default:()=>{
                    return{
                        color:'#000'
                    }

                }
            },

            list:{
                type:Array,
                default:()=>[]
            },
            align:{
                type:String,
                default:'center'
            },
            target:{
                type:String,
                required:true
            },
            initItem:{
                type:String,
                default:''
            }
        },
        computed:{
            wrapperHeight:{
                get(){
                    return this.count * this.height;
                }
            },
            getStyles(){
                let styles = this.styles;

                if (styles.height) {

                    this.height = styles.height / this.count
                }

                return Object.assign({},styles,{height:this.wrapperHeight})
            }
        },
        methods:{

            _onTouchStart(e){

                this.currentTranslateY = this.translateY;
                this.dragging = true;
            },

            _onTouchMove(e){

                this.translateY = e.deltaY+this.currentTranslateY;


            },
            _onTouchEnd(e){
                this.dragging = false;

                this.currentTranslateY = this.translateY;

                let index = this.getSelectedIndex();

                this.setSelectedItem(index);

            },
            getSelectedIndex(){

                let height = this.height;
                let maxIndex = this.list.length - 1;

                let index = -Math.round(this.currentTranslateY / height);

                index = Math.max(index,0);
                index = Math.min(index,maxIndex);
                return index;
            },
            setSelectedItem(index){
                this.translateY = this.currentTranslateY = -index * this.height;
                this.current = Object.assign({},this.current,{code:this.list[index].code,value:this.list[index].value,target:this.list[index].target,index:index});
                this.$parent.$emit('change',this.target,this.current);
            },
            scrollToItem (code){
                let initItem = this.initItem;
                this.list.forEach((item)=>{
                    if(item.code == initItem){
                        this.currentTranslateY = this.translateY;

                        let index = this.getSelectedIndex();

                        this.setSelectedItem(index)
                    }
                })
            }

        },

    }
</script>

<style scoped lang="less">
    .v-lc-picker_slot {
        flex:1;
        position: relative;
        height:100%;
        overflow: hidden;
    }

    .v-lc-picker_slot ul {
        position: absolute;
        top:0;
        left:0;
        width:100%;
        transition:all .2s ease-in;
    }

    .v-lc-picker_slot .dragging {
        transition:none
    }

   .v-lc-picker_slot ul li{
        width:100%;
        height:35px;
       line-height: 35px;
    }


    .v-lc-picker_slot ul li.level_1 {
        transform: scale(.8)  rotateY(3deg);
    }

    .v-lc-picker_slot ul li.level_1_1 {
        transform: scale(.8)  rotateY(-3deg);
    }



    .v-lc-picker_slot ul li.level_2 {
        transform: scale(.7) rotateY(5deg);
    }

    .v-lc-picker_slot ul li.level_2_1 {
        transform: scale(.7) rotateY(-5deg);
    }

    .v-lc-picker_slot ul li.level_3 {
        transform: scale(.6)  rotateY(7deg);
    }

    .v-lc-picker_slot ul li.level_3_1 {
        transform: scale(.7) rotateY(-7deg);
    }

    .v-lc-picker_slot ul li.current {
        transform: scale(1.1) ;
        font-weight: bold;
    }
</style>