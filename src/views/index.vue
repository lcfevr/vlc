<style scoped lang="less">

</style>
<template>

    <div>
        <h1>111111111111</h1>
        <tab>


        </tab>


        <p>{{address}}</p>
        <button @click="newTip">asdasssssdaaaaaasdadd</button>
        <Checkbox-group v-model="data" :vertical="visible">
            <Checkbox label="aaa" :disable="visible"></Checkbox>
            <Checkbox label="bbb"></Checkbox>
            <Checkbox label="ccc"></Checkbox>
        </Checkbox-group>
        <Checkbox label="ddd" :checked="checked"></Checkbox>
        <Radiobox value="1111" :checked="checked"></Radiobox>
        <Radiobox-group v-model="radio" :vertical="visible">
            <Radiobox :disable="visible" value="1111"></Radiobox>
            <Radiobox value="222"></Radiobox>
            <Radiobox value="333"></Radiobox>
        </Radiobox-group>
        <span>{{data}}</span>
        <span>{{radio}}</span>
        <Slide-bar></Slide-bar>
        <v-lc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></v-lc-header>
        <Picker @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>
        <modal :mask-closable="maskCloseble" width="2.5rem" v-model="visible"
               title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的"
               @on-ok="ok">
            <p slot="header">111</p>
        </modal>
        <Message v-model="visible" :text="text"></Message>
    </div>


</template>
<script>


    import Tab from '../components/tab/tab'
    import tabItem from '../components/tab/tabItem'
    import Picker from '../components/picker/index'
    import Checkbox from '../components/checkBox/index'
    import Radiobox from '../components/radioBox/index'
    import Editor from '../components/editor/index'
    import SlideBar from '../components/slideBar/index'
    import VLcHeader from '../components/header/index'
    import Modal from '../components/modal/modal.vue'
    import Message from '../components/message/index'
    export default {
        filters: {},
        directives: {},


        components: {
            Tab,
            tabItem,
            Picker,
            Checkbox,
            Modal,
            CheckboxGroup: Checkbox.group,
            Radiobox,
            RadioboxGroup: Radiobox.group,
            Editor,
            SlideBar,
            VLcHeader,
            Message
        },
        data () {
            return {
                items: [{
                    name: "首页",
                    icon: "&#xe662;",
                    iconCur: "&#xe663;",
                    path: "/index"
                }, {
                    name: "商品",
                    icon: "&#xe665;",

                    iconCur: "&#xe667;",
                    path: "/list"
                }, {
                    name: "晒单",
                    icon: "&#xe666;",
                    iconCur: "&#xe668;",
                    path: "/shareOrder"
                }, {
                    name: "购物车",
                    icon: "&#xe664;",
                    iconCur: "&#xe66a;",
                    path: "/cart"

                }, {
                    name: "我",
                    icon: "&#xe661;",
                    iconCur: "&#xe669;",
                    path: "/user"
                }],
                visible: true,
                maskCloseble: false,
                address: '',
                data: [],
                loading: true,
                checked: true,
                radio: '1111',
                theme: 'twilight',
                mode: 'javascript',
                text: '气泡提示气泡提示'
            }
        },

        mounted () {
            this.$Modal.confirm({
                title: 'aaa', content: 'aaaaasd', onOk: this.ok, onCancle: function () {
                }
            })
//            this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,key:'222',styles:{right:'0'}})



            let remove = this.$Message.loading({text: 'asdasdasd'});

            setTimeout(()=>{
                remove();
            },3000)



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
                this.$Notice.open({desc: 'asdasd', onClose: this.close, duration: 4, styles: {right: '0'}})
            },


//            change(province,city,district){
//                this.address = `${province} ${city} ${district}`
//            },


            pickerSure(province, city, district){
                this.address = `${province} ${city} ${district}`
            },
            pickerCancle(){
                console.log('111')
            }


        },

    }
</script>
