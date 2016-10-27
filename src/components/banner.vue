<style scoped>
    .d_header{
        position: relative;
        width:100%;
        height:179px;
    }

    .d_header img{
        object-fit: cover;
        width:100%;
        height:100%;
    }

    .d_container{
        width:calc(100% - 30px);
        padding:0 15px;
        background: #f7f7f7;
    }

    .d_container .d_tip{
        width:100%;
        height:45px;
        line-height:45px;
        font-size:14px;
    }

    .d_container .d_tip>span{
        color: #ffaa00;
    }

    .d_container .d_headerFlex{
        display: -webkit-flex;
        flex-direction:row;
        flex-wrap: wrap;
        align-content:space-between;
        justify-content: space-between;
        border-bottom:1px solid #e6e6e6
    }

    .d_container .d_headerFlex li{
        display:inline-block;
        width:30px;
        height:30px;
        -webkit-border-radius:8px;
        -moz-border-radius:8px;
        border-radius:8px;
        margin:0 5px 8px  5px;
        overflow: hidden;
    }

    .d_container .d_headerFlex .more{
        background: #d2dbe1;
        line-height:30px;
        text-align: center;
        color: #ffffff;
        font-size: 15px;
        letter-spacing: 2px;
    }

    .d_container .d_headerFlex li img{
        width:100%;
        height:100%;
        object-fit: cover;
    }


    .header_title{
        padding-left: 12%;
        width: 100%;
        position: absolute;
        bottom: 0;
        font-size: 13px;
        color: #F0F1F1;
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    .header_title>p{
        font-size: 13px;
        border-right: 2px solid white;
        padding-right: 12px;
    }
    .header_title>p>span{
        font-size: 40px;
        padding-right: 4px;
        color: #FFAA00;
    }
    .header_title>div{
        padding-left: 10px;
    }
    .header_title>div>p{
        padding:4px 0;
        font-size: 16px;
        font-weight: 600;
    }
    .header_title>div>span{font-size: 13px}
</style>
<template>
    <div class="d_header">
        <img src="../images/banner.jpg" />
        <div class="header_title">
            <p>
                <span>{{countDay}}</span>天
            </p>
            <div>
                <p>“湖南头条”21天早起计划</p>
                <span>{{addDay}}</span>开始
            </div>
        </div>
    </div>
    <div class="d_container" v-el:container>
        <p class="d_tip"><span>{{clockInNumber}}</span>人与你一起打卡</p>
        <ul  class="d_headerFlex" >
            <template v-for="item in items">
                <li  v-if="$index<num"><img :src="item.logo"/> </li>
                <li v-if="$index==num" class="more">···</li>
            </template>
        </ul>
    </div>
</template>
<script>
    import config from '../config/config'
    module.exports = {
        data () {
            return {
                num:0,
                items:[],
                clockInNumber:0,
                addDay:'',
                countDay:0,
                uid:0

            }
        },
        compiled(){
            this.getIndexData();
            this.getPrivateData()
        },
        ready() {

            this.num=parseInt((this.$els.container.offsetWidth-30)/40)*2-1
        },
        beforeDestroy: function () {

        },
        methods: {
            getIndexData(){
                var self=this;
                this.$http.post(config.link+'/index/indexData',{"size":40},
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle)

                            self.items=resovle.data.logoData;
                            self.uid=resovle.data.uid;
                            self.clockInNumber=resovle.data.clockInNumber;



                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getPrivateData(){
                var self=this;
                this.$http.post(config.link+'/index/privateData',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle)

                                self.countDay=resovle.data.countDay;
                                self.addDay=resovle.data.addDay



                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            }

        }
    }
</script>
