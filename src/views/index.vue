<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">

        <vlc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></vlc-header>

        <div></div>
        <div style="height: 50px;"></div>
        <div style="min-height: 50px; background: pink; padding: 0 10px;">


            <div><i class="vlc-icono-back"></i></div>

        </div>
        <Picker @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>

        <h1>111111111111</h1>
        <!--<tab></tab>-->

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
        <modal :mask-closable="maskCloseble" width="2.5rem" v-model="visible"
               title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的"
               @on-ok="ok">
            <p slot="header">111</p>

        </modal>
        <Message v-model="visible" :text="text"></Message>
        <PullDown :refresh="topMethod" :load-more="topMethod">

        </PullDown>
        <Prompt  v-model="visible" :val="text" :show="visible" :validator="/HM|RedMi|Mi/ig" title="asdadad" spec="asddddddd" @on-ok="getVal"></Prompt>
    </div>
</template>

<script>
    import vlcHeader from '../components/header/index'
    import Picker from '../components/picker/index'
    import Tab from '../components/tab/tab'

    import Message from '../components/message/index'


    import Checkbox from '../components/checkBox/index'
    import Radiobox from '../components/radioBox/index'
    import Editor from '../components/editor/index'
    import SlideBar from '../components/slideBar/index'
    import Modal from '../components/modal/modal.vue'
    import Prompt from '../components/prompt/prompt.vue'

    import PullDown from '../components/pullDown/index'
    export default {

        filters: {},
        directives: {},
        components: {

            Tab,


            Picker,




            Checkbox,
            Modal,
            CheckboxGroup: Checkbox.group,
            Radiobox,
            RadioboxGroup: Radiobox.group,
            Editor,
            Prompt,
            SlideBar,
            vlcHeader,
            PullDown,
            Message

        },
        data () {
            return {
                address:'',
                showAddressPicker: false,
                items: [
                    {

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

                    }
                ],




                visible: true,

                maskCloseble: false,
                address: '',
                data: [],
                checked: true,
                radio: '1111',
                theme: 'twilight',
                mode: 'javascript',
                text:'test'


            }
        },
        mounted () {
            this.$Prompt.info({
                title: 'aaa', content: 'aaaaasd', onOk: this.ok, onCancle: function () {
                },

            });


            setTimeout(()=>{

            },5000)
//            this.$Notice.open({desc:'asdasd',onClose:this.close,duration:4,key:'222',styles:{right:'0'}})


            let remove = this.$Message.loading({text: 'asdasdasd'});

            setTimeout(() => {
                remove();

            }, 3000)


        },
        beforeDestroy () {


        },
        methods: {
            getVal(val){
                console.log(val)
            },
            topMethod(){
                console.log('asd')
            },
            pickerSure(province, city, district){
                this.address = `${province} ${city} ${district}`
            },
            pickerCancle(){
                console.log('您取消了选择')
            },
            ok(){
                console.log(this.radio)
            },
            close(){
                console.log('asdasdasd')
            },
            newTip(){
                //this.$Notice.open({desc: 'asdasd', onClose: this.close, duration: 4, styles: {right: '0'}})
            }
        }
    }
</script>