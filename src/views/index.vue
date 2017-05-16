<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">

        <!--<vlc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></vlc-header>-->

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
        <CheckBox-group v-model="data" :vertical="visible">
            <CheckBox label="aaa" :disable="visible"></CheckBox>
            <CheckBox label="bbb"></CheckBox>
            <CheckBox label="ccc"></CheckBox>
        </CheckBox-group>
        <CheckBox label="ddd" v-model="checked"></CheckBox>
        <Radio label="1111" v-model="checked" ></Radio>
        <Radio-group v-model="radio" :vertical="visible">
            <Radio :disable="visible" label="1111"></Radio>
            <Radio label="222"></Radio>
            <Radio label="333"></Radio>
        </Radio-group>
        <span>{{data}}</span>
        <span>{{radio}}</span>

        <Slide-bar :items="items"></Slide-bar>
        <Tab :items="items"></Tab>

        <modal :mask-closable="maskCloseble" width="2.5rem" v-model="visible"
               title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的"
               @on-ok="ok">
            <p slot="header">111</p>

        </modal>
        <Message v-model="visible" :text="text"></Message>
        <PullDown :refresh="topMethod" :load-more="topMethod">

        </PullDown>

        <Button>gdgfd</Button>
         <Editor :theme="theme" :value="value"></Editor>
        <Swipe :auto="true" :loop="true" :list="list"></Swipe>
    </div>
</template>

<script>
//    import vlcHeader from '../components/header/index'
//    import Picker from '../components/picker/index'
//    import Tab from '../components/tab/tab'

//    import Message from '../components/message/index'


//    import Checkbox from '../components/checkBox/index'
//    import Radiobox from '../components/radioBox/index'
//    import Editor from '../components/editor/index'
    import SlideBar from '../components/slideBar/index'
//    import Modal from '../components/modal/modal.vue'
//    import Prompt from '../components/prompt/prompt.vue'
//    import Swipe from '../components/swipe/index'
//    import Button from '../components/button/index'
    import PullDown from '../components/pullDown/index'
    export default {

        filters: {},
        directives: {},
        components: {





            SlideBar,

            PullDown,


        },
        data () {
            return {
                list:[
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                            spec:'1111'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'2222'
                            }
                            ]

                    ,
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'3333'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'5555'
                            }
                        ]
                    ,
                    [
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'121231'
                            },
                            { image:'https://vuefe.cn/images/logo.png',
                                spec:'0000'
                            }
                        ]

                ],
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



                value:"<h1>ffasfasssa</h1>" +
                "fasfassfaasf",
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
                title: 'aaa', spec: 'aaaaasd', onOk: this.ok, onCancle: function () {
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