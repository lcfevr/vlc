<style scoped lang="less">

</style>
<template>

    <div>
        <h1>111111111111</h1>
        <tab keep-alive >


        </tab>


        <p>{{address}}</p>
        <button @click="newTip">asdasssssdaaaaaasdadd</button>
        <Checkbox-group :model.sync="data" :vertical="visible">
            <Checkbox value="aaa" :disable="visible"></Checkbox>
            <Checkbox value="bbb" ></Checkbox>
            <Checkbox value="ccc" ></Checkbox>
        </Checkbox-group>
        <Checkbox value="ddd" :checked="checked"></Checkbox>
        <Radiobox value="1111" :checked="checked"></Radiobox>
        <Radiobox-group :model.sync="radio" :vertical="visible">
            <Radiobox :disable="visible" value="1111"></Radiobox>
            <Radiobox value="222"></Radiobox>
            <Radiobox value="333"></Radiobox>
        </Radiobox-group>
        <span>{{data}}</span>
        <span>{{radio}}</span>
    </div>
    <Slide-bar></Slide-bar>
    <!--<Editor :theme="theme" :mode="mode" value="<script>-->

    <!--require('ace-builds/src-min-noconflict/ace');-->

    <!--export default {-->
        <!--data(){-->
            <!--return {-->

            <!--}-->
        <!--},-->
        <!--props:{-->
            <!--theme:{-->
                <!--type:String,-->
                <!--default:'twilight'-->
            <!--},-->
            <!--width:{-->
                <!--type:String,-->
                <!--default:'2rem'-->
            <!--},-->
            <!--height:{-->
                <!--type:String,-->
                <!--default:'3rem'-->
            <!--},-->
            <!--mode:{-->
                <!--type:String,-->
                <!--default:'javascript'-->
            <!--},-->
            <!--value:{-->
                <!--type:String,-->
                <!--default:''-->
            <!--},-->
            <!--readOnly:{-->
                <!--type:Boolean,-->
                <!--default:true-->
            <!--},-->
            <!--styles:{-->
                <!--type:Object,-->
                <!--default:()=>{}-->
            <!--}-->
        <!--},-->
        <!--methods:{-->

        <!--},-->
        <!--computed:{-->
            <!--getStyles(){-->

                <!--let style = this.styles;-->
                <!--let customStyleWidth = this.width;-->
                <!--let customStyleHeight = this.height;-->
                <!--return Object.assign({},{-->
                    <!--width:customStyleWidth,-->
                    <!--height:customStyleHeight-->
                <!--},style)-->
            <!--}-->
        <!--},-->
        <!--ready(){-->
            <!--let editor = ace.edit(this.$els.editor);-->
            <!--editor.$blockScrolling = Infinity;-->
            <!--editor.setFontSize(16);-->

            <!--editor.setOptions({-->
                <!--enableBasicAutocompletion: true,-->
                <!--enableSnippets: true,-->
                <!--enableLiveAutocompletion: true-->
            <!--});-->
            <!--editor.setTheme(ace.require('ace/theme/twilight'));-->
            <!--if (this.theme) editor.session.setMode(ace.require(`ace/mode/${this.mode}`));-->
            <!--if (this.value) editor.setValue(this.value);-->
            <!--if (this.readOnly) editor.setReadOnly(true);-->
            <!--editor.setHighlightActiveLine(false);-->
            <!--editor.setShowPrintMargin(false);-->
            <!--editor.resize();-->
        <!--},-->
        <!--watch:{-->


        <!--}-->
    <!--}-->
<!--</script>" ></Editor>-->
    <!--<modal :mask-closable="maskCloseble" width="2.5rem" :visible.sync="visible" title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的" @on-ok="ok">-->
        <!--<p slot="header">111</p>-->
    <!--</modal>-->
<picker  @sure="pickerSure" @cancle="pickerCancle" :visible.sync="true"></picker>
</template>
<script>


    import Tab from '../components/tab/tab'
    import tabItem from '../components/tab/tabItem'
    import Picker from '../components/picker/index'
    import Checkbox from '../components/checkBox/index'
    import Radiobox from '../components/radioBox/index'
    import Editor from '../components/editor/index'
    import SlideBar from '../components/slideBar/index'
    export default {
        filters: {

        },
        directives: {

        },


        components:{
            Tab,
            tabItem,
            Picker,
            Checkbox,
            CheckboxGroup:Checkbox.group,
            Radiobox,
            RadioboxGroup:Radiobox.group,
            Editor,
            SlideBar
        },
        data () {
            return {
                items:[{
                    name:"首页",
                    icon:"&#xe662;",
                    iconCur:"&#xe663;",
                    path:"/index"
                },{
                    name:"商品",
                    icon:"&#xe665;",

                    iconCur:"&#xe667;",
                    path:"/list"
                },{
                    name:"晒单",
                    icon:"&#xe666;",
                    iconCur:"&#xe668;",
                    path:"/shareOrder"
                },{
                    name:"购物车",
                    icon:"&#xe664;",
                    iconCur:"&#xe66a;",
                    path:"/cart"

                },{
                    name:"我",
                    icon:"&#xe661;",
                    iconCur:"&#xe669;",
                    path:"/user"
                }],
                visible:true,
                maskCloseble:false,
                address:'',
                data:[],

                checked:true,
                radio:'1111',
                theme:'twilight',
                mode:'javascript'
            }
        },

        ready () {
            this.$Modal.confirm({title:'aaa',content:'aaaaasd',onOk:this.ok,onCancle:function(){}})
            this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,key:'222',styles:{right:'0'}})

        },
        beforeDestroy () {

        },
        methods: {
            ok(){
                console.log('avc')
            },
            close(){
                console.log('asdasdasd')
            },
            newTip(){
                this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,styles:{right:'0'}})
            },


//            change(province,city,district){
//                this.address = `${province} ${city} ${district}`
//            },
            pickerSure(province,city,district){
                this.address = `${province} ${city} ${district}`
            },
            pickerCancle(){
                console.log('111')
            }





        },

    }
</script>
