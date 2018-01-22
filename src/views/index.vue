<template>
    <div style="position: absolute; left: 0; right: 0; top: 0; bottom: 0; background: #fff;">

        <!--<vlc-header title="asdasdsssssssssssssssssssssssssssssssssssssssssssssssss"></vlc-header>-->


        <Header title="aaaa"></Header>
        <div style="height: 50px;"></div>
        <div style="min-height: 50px; background: pink; padding: 0 10px;">


            <div><i class="vlc-icono-back"></i></div>

        </div>
        <Picker type="AreaPicker" @normal-change="normalChange" v-model="visible"  @sure="pickerSure" @cancle="pickerCancle" ></Picker>
        <v-button :loading="disable" @on-click="popup = true">确定</v-button>
        <h1>111111111111</h1>
        <!--<tab></tab>-->
        <p>{{address}}</p>
        <v-button @click.native="showMessage">asdasssssdaaaaaasdadd</v-button>
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


        <Slide-bar :list="items" :flex="false" index="1" :can-drag="false" height="100%" scroll-height='50px'
                   :is-fixed-header="true">

            <div slot="slot-item-0" style="height:100%;flex: 1;background:red;overflow: scroll">
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
                <div style="height: 40px;width: 100%;background-color: blue;"></div>
            </div>
            <div slot="slot-item-1" style="height:100%;flex: 1;background:yellow">
                <Load-more :refresh="topMethod" height="100%" ref="more" :load-more="topMethod" :has-more="hasMore"
                           @on-change-up-status="getStatus">
                    <div style="width: 100%;height: 50px;" v-for="item in loadmore">{{item}}</div>
                </Load-more>
            </div>
            <div slot="slot-item-2" style="height:100%;flex: 1;background:black"></div>
        </Slide-bar>
        <!--<Tab :items="items" v-model="maskCloseble"></Tab>-->


        <Swipe :multiple="false" :list="files">
            <template scope="props">

                <div>
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


        <v-button :inline="true" width="40%" type="warning" :loading="loading" @click.native="load"></v-button>
        <v-button :inline="true" disabled width="40%" type="success" :loading="loading" @click.native="load"></v-button>
        <Rater v-model="rate" disabled></Rater>
        {{rate}}

        <Spinner type="blade" size="60"></Spinner>
        <Action-sheet :items="actionSheet" v-model="popup">

        </Action-sheet>
        <Progress v-model="progress"></Progress>
        <ToTop></ToTop>
        <Cell title="标题" label="小标题" value="说明文字" has-mask></Cell>
        <CellSwipe  :right="right" title="标题" has-mask ></CellSwipe>
        <CellSwipe :left="left" :right="right" title="标题" has-mask ></CellSwipe>
        <CellSwipe :left="left" :right="right" title="标题" has-mask ></CellSwipe>
        <CellSwipe :left="left" :right="right" title="标题" has-mask ></CellSwipe>
        <CellSwipe :left="left" :right="right" title="标题" has-mask ></CellSwipe>
        <CellSwipe :left="left" :right="right" title="标题" has-mask ></CellSwipe>
        <Badge number="10" max="99" :dot="false">
            <div style="width: 45px;height: 45px;background-color: red"></div>
        </Badge>
        <Card></Card>
    </div>
</template>

<script>

    export default {
        filters: {},
        directives: {},
        components: {},
        data () {
            return {
                left:[
                    {
                        content:'btn1',
                        style:{
                            backgroundColor:'#eee',
                            color:'#fff'
                        },
                        handleClick:function(){
                            console.log('btn1')
                        }
                    },
                    {
                        content:'btn2',
                        style:{
                            backgroundColor:'red',
                            color:'#fff'
                        },
                        handleClick:function(){
                            console.log('btn2')
                        }
                    }
                ],
                right:[
                    {
                        content:'btn1',
                        style:{
                            backgroundColor:'#eee',
                            color:'#fff'
                        },
                        handleClick:function(){
                            console.log('btn1')
                        }
                    },
                    {
                        content:'btn2',
                        style:{
                            backgroundColor:'red',
                            color:'#fff'
                        },
                        handleClick:function(){
                            console.log('btn2')
                        }
                    }
                ],
                badge:true,
                progress:40,
                loadmore: [1, 1, 1],
                popup: false,
                inita: [9, 1, 1],
                listss: [
                    {
                        target: 'a',
                        list: [{value: 'w', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 'c', code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'b',
                        list: [{value: 'e', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    },
                    {
                        target: 'c',
                        list: [{value: 'r', code: 1}, {value: 2, code: 2}, {value: 3, code: 3}, {
                            value: 4,
                            code: 4
                        }, {value: 5, code: 5}, {value: 6, code: 6}, {value: 7, code: 7}, {
                            value: 8,
                            code: 8
                        }, {value: 9, code: 9}, {value: 0, code: 0}]
                    }
                ],

                loading: false,
                rate: 4.0,
                check: false,
                files: [],
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

                pcd:'河北省/唐山市/路南区',
                dates:'2017/07/08',
                showAddressPicker: false,
                items: [],

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


                visible: true,
                indicator: true,
                maskCloseble: true,
                address: '',
                data: [],
                checked: true,
                radio: '1111',
                theme: 'twilight',
                mode: 'javascript',
                text: 'test',
                disable: false,
                actionSheet: [
                    {text: 'aaa'},
                    {text: 'bbb'},
                    {text: 'ccc'},
                ],
                hasMore: true
            }
        },
        mounted () {
//            this.$Message.loading({showLeft:false,text:'加载中...',duration:0,position:'center'})
            this.$Modal.info({showHead:false,body:'加中...',title:'a'})
            setTimeout(()=>{
                this.files = [{"id":521,"ad_id":10,"name":"\u73a9\u8f6c\u5927\u6570\u636e\u5206\u6790\uff01Spark2.X+Python \u7cbe\u534e\u5b9e\u6218\u8bfe\u7a0b","image":"https:\/\/o74ly5e8r.qnssl.com\/9MhSVW1gJD.png","background":{"color":""},"link":"https:\/\/edu.hellobi.com\/course\/222","sort":0,"meta":"","created_at":"2017-12-21 09:48:29","updated_at":"2017-12-21 09:48:29","deleted_at":null},{"id":506,"ad_id":10,"name":"\u6570\u636e\u5206\u6790\u62a5\u544a\u5236\u4f5c\u79d8\u7c4d\u5347\u7ea7\u7248","image":"https:\/\/o74ly5e8r.qnssl.com\/EAbxDnBMcX.png","background":{"color":""},"link":"https:\/\/edu.hellobi.com\/course\/132","sort":1,"meta":"","created_at":"2017-10-31 09:43:15","updated_at":"2017-12-21 09:46:16","deleted_at":null},{"id":504,"ad_id":10,"name":"\u72ec\u4e00\u65e0\u4e8c\u7684\u6570\u636e\u4ed3\u5e93\u5efa\u6a21\u6307\u5357\u7cfb\u5217\u6559\u7a0b\u5347\u7ea7\u7248 \uff08\u8fde\u8f7d\u4e2d\uff09","image":"https:\/\/o74ly5e8r.qnssl.com\/dmJqsjtLNS.png","background":{"color":""},"link":"https:\/\/edu.hellobi.com\/course\/102","sort":2,"meta":"","created_at":"2017-10-18 09:35:05","updated_at":"2017-12-21 09:50:03","deleted_at":null}]
            },2000)

            setInterval(()=>{
                this.progress += 8
            },1000)
           setTimeout(()=>{
               this.items = [
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
               ]
           },1000);



        },
        beforeDestroy () {


        },
        methods: {

            normalChange(val){
                console.log(val)
            },
            async a(a){
                await setTimeout(() => {
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
                this.loadmore.push(...[2, 2]);
                this.$refs.more.onLoadOff();
//                this.hasMore = true;
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
                console.log('a')
                this.$Message.show({text: 'asdasdasdasd',duration:0});
                this.$Message.show({text: 'ascx',duration:0});

                setTimeout(()=>{
                    this.$Message.destroy()
                },2000)
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