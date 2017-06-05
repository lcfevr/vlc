<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">

        <!--<vlc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></vlc-header>-->


        <Header title="aaaa"></Header>
        <div style="height: 50px;"></div>
        <div style="min-height: 50px; background: pink; padding: 0 10px;">


            <div><i class="vlc-icono-back"></i></div>

        </div>
        <Picker @sure="pickerSure" @cancle="pickerCancle" v-model="visible"></Picker>
        <Button :disabled="false" :loading="disable" @on-click="showMessage">确定</Button>
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
        <Radio label="1111" v-model="checked"></Radio>
        <Radio-group v-model="radio" :vertical="visible">
            <Radio :disable="visible" label="1111"></Radio>
            <Radio label="222"></Radio>
            <Radio label="333"></Radio>
        </Radio-group>
        <span>{{data}}</span>
        <span>{{radio}}</span>

        <Slide-bar :items="items" :flex="false" :can-drag="false" height="100%" scroll-height='50px'
                   :is-fixed-header="true">

            <div slot="slot-item-0" style="height:100%;flex: 1;background:red;overflow: scroll">
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>

            </div>
            <div slot="slot-item-1" style="height:100%;flex: 1;background:yellow"></div>
            <div slot="slot-item-2" style="height:100%;flex: 1;background:black"></div>
        </Slide-bar>
        <Tab :items="items" v-model="maskCloseble"></Tab>

        <modal :mask-closable="maskCloseble" width="2.5rem" v-model="visible"
               title="asdasdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwasd" body="啊阿斯达阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德阿萨德所大所大所大所多阿斯达斯的阿斯达斯的"
               @on-ok="ok">
            <p slot="header">111</p>
        </modal>
        <PullDown :refresh="topMethod" :load-more="topMethod" @on-change-up-status="getStatus" ref="pulldown">

        </PullDown>


        <Editor :theme="theme" :value="value"></Editor>
        <Swipe :auto="true" :perpage="1" :loop="true" :list="list"></Swipe>
        <Action-sheet v-model="visible" :items="lists">

        </Action-sheet>
        <TextBar v-model="texts" type="textarea" :maxlength="9"></TextBar>
        <span>{{texts}}</span>
        <Number v-model="number" :min="1" :max="10" :focus="true"></Number>
        <span>{{number}}</span>
        <Upload :multiple="true"  @on-change-file="onChangeFile" ref="upload"></Upload>
        <img :src="item.base64" v-for="item in files"/>
        <SwitchBar v-model="check" size="large"></SwitchBar>
        <span>{{check}}</span>
        <SwitchBar size="large"></SwitchBar>

        <Button :inline="true" width="40%" type="warning"></Button>
        <Button :inline="true" width="40%" type="success"></Button>
        <Rater v-model="rate" disabled></Rater>
        {{rate}}
    </div>
</template>

<script>

    export default {

        filters: {},
        directives: {},
        components: {

        },
        data () {
            return {
                rate:3.8,
                check:false,
                files:[],
                number: 1,
                msgTip: '',
                texts: 1,
                list: [

                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '1111',
                        onClick: function (item, index) {
                            console.log(item)
                        }
                    },
                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '2222'
                    },

                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '3333'
                    },
                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '5555'
                    },

                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '121231'
                    },
                    {
                        image: 'https://vuefe.cn/images/logo.png',
                        spec: '0000'
                    }


                ],


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
                        icon: "<i class='ifont'>&#xe661;</i>",
                        iconCur: "<i class='ifont'>&#xe669;</i>",
                        path: "http://www.baidu.com/"

                    },
                    {
                        name: "我",
                        icon: "<i class='ifont'>&#xe661;</i>",
                        iconCur: "<i class='ifont'>&#xe669;</i>",
                        path: "http://www.baidu.com/"

                    },
                    {
                        name: "我",
                        icon: "<i class='ifont'>&#xe661;</i>",
                        iconCur: "<i class='ifont'>&#xe669;</i>",
                        path: "http://www.baidu.com/"

                    }
                ],

                lists: [
                    {
                        text: 'aaa',
                        onClick: this.callback

                    },
                    {
                        text: 'bbb',
                        onClick: function () {
                            console.log('bbb')
                        }
                    }
                ],

                value: "<h1>ffasfasssa</h1>" +
                "fasfassfaasf",
                visible: false,

                maskCloseble: true,
                address: '',
                data: [],
                checked: true,
                radio: '1111',
                theme: 'twilight',
                mode: 'javascript',
                text: 'test',
                disable: false,

            }
        },
        mounted () {
            this.$Modal.info({showHead:false,cancleText:'取消',body:'啊实多多多多打实'})

        },
        beforeDestroy () {


        },
        methods: {
            onChangeFile(val){
                this.files = val
            },
            onLoad(val){

            },
            valida(val){
                if (val != 'a') {
                    return false;
                }

                return true;
            },
            getConfirm(val){

                val ? this.msgTip = '成功' : this.msgTip = "失败"
            },
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
                this.disable = true
            },
            ok(){
                console.log(this.radio)
            },
            close(){
                console.log('asdasdasd')
            },
            newTip(){
                //this.$Notice.open({desc: 'asdasd', onClose: this.close, duration: 4, styles: {right: '0'}})
            },
            callback(item, index){
                console.log('asdasdasd')
            },
            callback2(item, index){
                console.log(item.text)
            },
            getStatus(val){
                console.log(val)
            },
            showMessage(){
                this.$Message.show({text: 'asdasdasdasd'})
            }

        }
    }
</script>

<style>
    html, body {
        height: 100%
    }

    .vlc-slideBar {
        height: 100%;
    }

    @font-face {
        font-family: "ifont";
        /*src: url('font/iconfont.eot'); !* IE9*!*/
        /*src: url('font/iconfont.eot?#iefix') format('embedded-opentype'), !* IE6-IE8 *!*/
        /*url('font/iconfont.woff') format('woff'), !* chrome、firefox *!*/
        /*url('font/iconfont.ttf') format('truetype'), !* chrome、firefox、opera、Safari, Android, iOS 4.2+*!*/
        /*url('font/iconfont.svg#iconfont') format('svg'); !* iOS 4.1- *!*/
        /*src: url('//at.alicdn.com/t/font_gm9v3xai12z6ko6r.eot');*/
        /*src: url('//at.alicdn.com/t/font_gm9v3xai12z6ko6r.eot?#iefix') format('embedded-opentype'),*/
        /*url('//at.alicdn.com/t/font_gm9v3xai12z6ko6r.woff') format('woff'),*/
        /*url('//at.alicdn.com/t/font_gm9v3xai12z6ko6r.ttf') format('truetype'),*/
        /*url('//at.alicdn.com/t/font_gm9v3xai12z6ko6r.svg#iconfont') format('svg');*/
        src: url('//at.alicdn.com/t/font_mrhpq9yw1ssxxbt9.eot');
        src: url('//at.alicdn.com/t/font_mrhpq9yw1ssxxbt9.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_mrhpq9yw1ssxxbt9.woff') format('woff'),
        url('//at.alicdn.com/t/font_mrhpq9yw1ssxxbt9.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_mrhpq9yw1ssxxbt9.svg#iconfont') format('svg');
    }

    .ifont {
        margin: 0 3px;
        font-family: "ifont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
</style>