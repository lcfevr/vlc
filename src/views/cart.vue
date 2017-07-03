<template>
    <div class="a">

        <!--<button @click="newTip">queding</button>-->
    </div>
    <!--<modal :mask-closable="maskCloseble" width="2.5rem" :visible.sync="visible" title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的" @on-ok="ok">-->

    <!--</modal>-->

</template>
<script>

    import Tab from '../components/tab/tab'
    import Modal from '../components/modal/modal'
    export default {
        components: {
            Tab,
            Modal,

        },
        data () {
            return {
                items: [
                    {
                        name: "首页",
                        icon: "<i style='font-size: 20px;'>&clubs;</i>",
                        iconCur: "<i style='font-size: 20px;'>&clubs;</i>",
                        path: "/guide"
                    },
                    {
                        name: "购物车",
                        icon: "<i style='font-size: 20px;'>&hearts;</i>",
                        path: "/cart"
                    }
                ],
                visible: true,
                maskCloseble: false
            }
        },
        mounted () {
            this.$Modal.info({title:'aaa',content:'aaaaasd',onOk:this.ok,onCancle:function(){}})
            // this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,key:'222',styles:{right:'0'}})
            //console.log('asdasd')
        },
        beforeDestroy () {

        },
        methods: {
            topMethod(){
                console.log('asd')
            },
            /* ok(){
             console.log('avc')
             },
             close(){
             console.log('asdasdasd')
             },
             newTip(){
             this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,styles:{right:'0'}})
             }*/
        }
    }
</script>
