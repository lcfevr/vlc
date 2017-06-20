<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">

        <!--<vlc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></vlc-header>-->


        <Header title="aaaa"></Header>
        <div style="height: 50px;"></div>
        <div style="min-height: 50px; background: pink; padding: 0 10px;">


            <div><i class="vlc-icono-back"></i></div>

        </div>
        <Picker type="DatePicker" @sure="pickerSure" @cancle="pickerCancle" v-model="visible" ></Picker>
        <v-button  :loading="disable" @on-click="popup = true">确定</v-button>
        <h1>111111111111</h1>
        <!--<tab></tab>-->

        <p>{{address}}</p>
        <v-button @click="newTip">asdasssssdaaaaaasdadd</v-button>
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

        <Slide-bar :list="items" :flex="false" index="2" :can-drag="false" height="100%" scroll-height='50px'
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


        <Load-more :refresh="topMethod" ref="loadmore" :load-more="topMethod" @on-change-up-status="getStatus" >
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>
            <div style="width: 100%;height: 50px;">1</div>

        </Load-more>



        <Swipe :auto="true" :perpage="1" :loop="true" :list="files">
            <template scope="props">

                <div >
                        <span>{{props.item.id}}</span>
                        <img :src="props.item.image"/>
                        <span v-text="props.index"></span>
                </div>

            </template>
        </Swipe>

        <TextBar v-model="texts" type="textarea" :maxlength="9"></TextBar>
        <span>{{texts}}</span>
        <Number v-model="number" :min="1" :max="10" :focus="true"></Number>
        <span>{{number}}</span>
        <Upload :multiple="true" @on-change-file="onChangeFile" ref="upload"></Upload>
        <img :src="item.base64" v-for="item in files"/>
        <SwitchBar v-model="check" size="large"></SwitchBar>
        <span>{{check}}</span>
        <SwitchBar size="large"></SwitchBar>


        <v-button :inline="true" width="40%" type="warning" :loading="loading" @on-click="load"></v-button>
        <v-button :inline="true" disabled width="40%" type="success"></v-button>
        <Rater v-model="rate" disabled></Rater>
        {{rate}}

        <Spinner type="blade" size="60"></Spinner>
        <Action-sheet :items="actionSheet" v-model="popup">

        </Action-sheet>

    </div>
</template>

<script>

    export default {
        filters: {},
        directives: {},
        components: {},
        data () {
            return {
                popup:false,
                inita: ['w', 'e', 'r'],
                listss: [
                    {
                        target: 'a',
                        list: [{value: 'w',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'b',
                        list: [{value: 'e',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'c',
                        list: [{value: 'r',code:1}, {value: 2, code: 2}, {value: 3, code:3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    }
                ],

                loading: false,
                rate: 3.8,
                check: false,
                files: [
                    {
                        user_id: 10,
                        id: 6,
                        deleted_at: null,
                        created_at: "2016-05-13 09:17:22",
                        cover_photo: "http://hellobi-image.qiniudn.com/68aAvN4TsU.jpg",
                        image: "http://hellobi-image.qiniudn.com/68aAvN4TsU.jpg",
                        origin_name: "36kr",
                        origin_url: "http://36kr.com/p/5045728.html",
                        recommended: 0,
                        status: "published",
                        title: "应用人工智能和机器学习，医渡云专注挖掘医疗大数据",
                        updated_at: "2017-05-17 20:37:23",
                        view_count: 151
                    },
                    {
                        user_id: 10,
                        id: 7,
                        deleted_at: null,
                        created_at: "2016-05-13 09:17:22",
                        cover_photo: "http://hellobi-image.qiniudn.com/68aAvN4TsU.jpg",
                        image: "http://hellobi-image.qiniudn.com/68aAvN4TsU.jpg",
                        origin_name: "36kr",
                        origin_url: "http://36kr.com/p/5045728.html",
                        recommended: 0,
                        status: "published",
                        title: "应用人工智能和机器学习，医渡云专注挖掘医疗大数据",
                        updated_at: "2017-05-17 20:37:23",
                        view_count: 152
                    }
                ],
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
                visible: true,

                maskCloseble: true,
                address: '',
                data: [],
                checked: true,
                radio: '1111',
                theme: 'twilight',
                mode: 'javascript',
                text: 'test',
                disable: false,
                actionSheet:[
                    {text:'aaa'},
                    {text:'bbb'},
                    {text:'ccc'},
                ]
            }
        },
        mounted () {
            let c = 1
            let b = 1
            this.a({b,c})
            console.error(this.inita)
            this.$Modal.info({showHead: true, title:'提示',showCancle: false, cancleText: '取消', body: '啊实多多多多打多多多多多多实', loading: true})



            setTimeout(()=>{
                console.log('1')
                this.$refs.loadmore.onLoadOff()
            },8000)

        },
        beforeDestroy () {


        },
        methods: {
            async a(a){
                await setTimeout(()=>{
                    console.log(a.c)
                    console.log(a.b)
                })
            },
            load(){
                this.loading = !this.loading
            },
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
            pickerSure(value){
//                this.address = `${province} ${city} ${district}`
                console.log(value)
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
            },


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