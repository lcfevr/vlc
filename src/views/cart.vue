<style scoped lang="less">

</style>
<template>
    <div>
        <h1>111111111111</h1>
        <tab  >

        </tab>
        <button @click="newTip">queding</button>
    </div>
    <!--<modal :mask-closable="maskCloseble" width="2.5rem" :visible.sync="visible" title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的" @on-ok="ok">-->
    <!--<p slot="header">111</p>-->
    <!--</modal>-->

</template>
<script>

    import Tab from '../components/tab/tab'
    import tabItem from '../components/tab/tabItem'
    import Modal from '../components/modal/modal'

    export default {
        filters: {

        },
        directives: {

        },
        components:{
            Tab,
            tabItem,
            Modal
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
                maskCloseble:false
            }
        },
        mounted () {
//            this.$Modal.confirm({title:'aaa',content:'aaaaasd',onOk:this.ok,onCancle:function(){}})
            this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,key:'222',styles:{right:'0'}})
            console.log('asdasd')
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
            }
        }
    }
</script>
