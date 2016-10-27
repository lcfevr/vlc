<style scoped>
    .timeToGo{
        width:100%;
        padding:20px 0;
        background: #ffffff;
    }

    .timeToGo button{
        width:135px;
        height:30px;
        border-radius:15px;
        margin-left:50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        font-size:15px;
        color: #ffffff;
        border:0;
        font-family:'Microsoft YaHei UI';
    }
    .timeToGo button .iconfont{
        margin-right: 5px;
    }


    .flexRank{
        width:calc(100% - 20px);
        padding:10px;
        display: -webkit-flex;
        flex-direction:row;
        align-items:center;
        background: #ffffff;
        border-bottom:1px solid #e6e6e6;
    }
    .flexRank li{
        position: relative;
        display: inline-block;
        flex:1;
        text-align: center;
        font-size:12px;
    }

    .flexRank li a{
        display: inline-block;
        width:100%;
    }

    .flexRank li:nth-child(2):before{
        content: '';
        position: absolute;
        left:0;
        top:0;
        height:100%;
        width:1px;
        background: -webkit-linear-gradient(top,transparent,#d3dce2 55%,transparent);
    }

    .flexRank li:nth-child(2):after{
        content: '';
        position: absolute;
        right:0;
        top:0;
        height:100%;
        width:1px;
        background: -webkit-linear-gradient(top,transparent,#d3dce2 55%,transparent);
    }

    .flexRank li a .iconfont{
        font-size:18px;
        color: #d2dbe1;
    }

    .flexRank li a .iconfont,.flexRank li a span{
        width:100%;
        display: inline-block;
        color: #d2dbe1;

    }

    .flexRank li a.active i{
        color: #ffaa00;
    }

    .flexRank li a.active span{
        color: #9da4ab;
    }


    .self{
        display: -webkit-flex;
        width:calc(100% - 20px);
        height:63px;
        padding:0 10px;
        align-items: center;
        justify-content: space-between;
        flex-direction:row;
        background: #ffffff;
        border-bottom:1px solid #e6e6e6;
    }

    .self .rankNum{
        width:40px;
        height:44px;
        font-size:22px;
        text-align: center;
        line-height:44px;
    }

    .self .userInfo{
        height:44px;
        margin-right:auto;
        margin-left:15px;
    }

    .self .userInfo .headImg{
        width:44px;
        height:44px;
        border-radius:8px;
        overflow: hidden;
        display: inline-block;
    }

    .self .userInfo .headImg img{

        width:100%;
        height:100%;
        object-fit: fill;
    }


    .self .d_plan_score{
        display: inline-block;
        -webkit-transform: translateY(-12%);
        -moz-transform: translateY(-12%);
        -ms-transform: translateY(-12%);
        -o-transform: translateY(-12%);
        transform: translateY(-12%);
        height:44px;
        margin-left:3px;
        margin-right:auto;
    }

    .self .d_plan_score li{
        color: #727272;
        line-height:22px;
        font-size:12px;
    }
    .self .d_plan_score li:first-child{
        font-size:14px;
        color: #000;

    }

    .self .d_plan_score li:first-child span{
        color:#66bdff;
        font-size:12px;
        margin-left:5px;
    }


    .self .time{
        color: #9da4ab;
        font-size:14px;
    }


    /* 大图 */

    .carrousel {
        width: 100%;
        height: 100%;
        max-width: 100%;
        position: fixed;
        background-color: rgba(10, 10, 10, 0.8);
        z-index: 99999;
        top: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    .carrousel .wrapper {
        position: relative;
        width: 100%;
        height:calc(100% - 60px);
        overflow: hidden;
        max-width: 640px;
        left:0;
        right:0;
        margin:auto;
    }
    .carrousel p {
        height: 60px;
        line-height: 20px;
        padding: 20px 0 0 0;
        text-align: center;
        font-size: 14px;
        color: #cf8c04;
        box-sizing: border-box;
    }
    .carrousel .wrapper > img {
        width: 80%;
        height: auto;
        object-fit: cover;
        position: absolute;
        left: 10%;
        top: calc(10% - 20px);
        border: 4px solid #2b665e;
        box-sizing: border-box;
    }

    .carrousel .close {
        height: 20px;
        width: 20px;
        cursor: pointer;
        color: #FFF;
        position: absolute;
        top: calc(10% - 28px);
        right: calc(10% - 8px);
        font-size: 18px;
        border-radius: 50%;
        background: #8f8f8f;
    }


    .close {

    }
    .carrousel .close::before,.close::after {
        content: '';
        display: block;
        position: absolute;
        width: 14px;
        height: 1px;
        background: #fff;
        top:50%;
        left: 3px;
    }
    .carrousel .close::before {
        transform: rotate(45deg);
    }
    .carrousel .close::after {
        transform: rotate(-45deg);
    }


    .restartInfo{
        font-size:14px;
        line-height:20px;
        margin-top:15px;
        color: #666666;

    }


    .sure{
        padding:10px 0;
    }

    .btnOk{
        width:75%;
        height:30px;
        font-size:15px;
        margin-left:50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
        border-radius:15px;
        border:0
    }
</style>
<template>
    <div class="main" v-if="isIn" transition="route">
        <banner v-ref:banner></banner>

        <div class="timeToGo">
            <template v-if="isCurrent==1">
                <button class="start" @click="getLuckPic"><i class="iconfont">&#xe615;</i>生成早起卡</button>
            </template>
            <template v-else>
                <button class="grey" @click="tipWake"><i class="iconfont">&#xe615;</i>生成早起卡</button>
            </template>
        </div>
        <ul class="flexRank">

            <li v-for="item in tabData"><a :class="{active:isActive==$index}" @click="selectRank($event,$index)"><i :class="['iconfont',item.iconfont]"></i><span>{{item.title}}</span></a></li>
        </ul>
        <div class="self">
            <div :class="['rankNum',{'redColor':listData.myTop.rowno==1,'yellowColor':listData.myTop.rowno==2,'blueColor':listData.myTop.rowno==3}]">{{listData.myTop.rowno}}{{listData.myTop.rowno | pluralize 'st' 'nd' 'rd' 'th'}}</div>
            <div class="userInfo">
                <div class="headImg"><img :src="listData.myTop.logo"/> </div>
                <ul class="d_plan_score">
                    <li>{{listData.myTop.nickname}}</li>
                    <li>已经连续签到<span>{{listData.myTop.lastday}}</span>天</li>
                </ul>
            </div>
            <div class="time">{{listData.myTop.hours}}</div>
        </div>
        <template v-for="item in listData.Top">
            <div class="self mg10 ">
                <div :class="['rankNum',{'redColor':item.rowno==1,'yellowColor':item.rowno==2,'blueColor':item.rowno==3}]">{{item.rowno}}{{item.rowno | pluralize 'st' 'nd' 'rd' 'th'}}</div>
                <div class="userInfo">
                    <div class="headImg"><img :src="item.logo"/> </div>
                    <ul class="d_plan_score">
                        <li>{{item.nickname}}</li>
                        <li>已经连续签到<span>{{item.lastday}}</span>天</li>
                    </ul>
                </div>
                <div class="time">{{item.hours}}</div>
            </div>
        </template>
    </div>

    <section class="carrousel " v-if="isLargeModel">
        <p>偷懒的人那么多，早起的就你一个<br>长按图片保存到手机并分享，带动朋友们早起吧～</p>
        <div class="wrapper">
             <img :src="largeImg">
            <span class="close" @click="isLargeModel=!isLargeModel"></span>
        </div>
    </section>
    <pop v-if="isPop==1" transition="popup">
        <p>{{msg}}</p>
    </pop>
    <pop v-if="isPop==2" transition="popup">
        <p>{{msg}}</p>
        <a class="whiteColor yellow invite-btn" v-link="{path:'/card'}">确认</a>
    </pop>
</template>
<script>
    import banner from '../components/banner.vue'
    import pop from '../components/popSlot.vue'
    import config from '../config/config'
    import shareWx from '../libs/wxShare'
    module.exports = {
        components:{
          banner:banner,
          pop:pop

        },
        data: function () {
            return {
                isActive:0,
                isIn:false, //转场动画
                items:[],
                tabData:[
                    {
                        title:'好友圈',
                        iconfont:'e616'
                    },
                    {
                        title:'总排行',
                        iconfont:'e617'
                    },
                    {
                        title:'正能量排行',
                        iconfont:'e618'
                    }
                ],
                isLargeModel:false,
                isCurrent:0,
                isPop:0,  //弹窗   0 弹窗关闭 1 弹窗msg 2 弹窗自定义
                msg:'',
                listData:{}, //显示的排行数据
                friendList:{}, //好友排行
                energyList:{}, //正能量排行
                totalList:{}, //总排行
                largeImg:config.link+'/join/getLuckPic',
                loginStatus:0,
                countDay:0

            }
        },
        compiled(){
            this.getFriendRank();
            this.getTotalRank();
            this.getEnergyRank();
            this.getisJoin();
            this.getPrivateData();
        },
        ready: function () {
            this.isIn=true;
            var _this=this;

            var shareConf={
                title: "我已连续早起"+_this.countDay+"天！生活愈忙碌，愈要活清爽！",
                desc: "我已连续早起"+_this.countDay+"天！生活愈忙碌，愈要活清爽！",
                link: (function(){
                    return window.location.origin + '/index';
                })(),
                imgUrl: _this.listData.myTop.logo,
                success: function() {
                    shareWx.staticstical('分享朋友圈成功','share');
                },
                cancel: function() {}
            };
            shareWx.shareConf=shareConf;
            shareWx.init(_this);
        },
        beforeDestroy: function () {

        },
        methods: {
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

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            tipWake(){
                this.isPop=1;
                this.msg='您还未打卡，无法生成早起卡。'
            },
            getLuckPic(){
                var self=this;
                this.$http.post(config.link+'/join/isGetCard',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle);
                            if(resovle.status==200){
                                self.isLargeModel=true;
                            }else{
                                self.isPop=2;

                                self.msg=resovle.msg;

                            }
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getisJoin(){
                var self=this;
                this.$http.post(config.link+'/join/isJoin',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle)

                                self.loginStatus=resovle.data.isJoin;
                                if(self.loginStatus==1){
                                    self.isCurrent=resovle.data.current
                                }

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getFriendRank(){
                var self=this;
                this.$http.post(config.link+'/index/top',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){

                                self.friendList=Object.assign({}, self.friendList, resovle);
                                self.listData= Object.assign({}, self.friendList, resovle);
                                console.log(self.listData)


                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getTotalRank(){
                var self=this;
                this.$http.post(config.link+'/index/top',{ranking:2},
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){

                                self.totalList=Object.assign({}, self.totalList, resovle);




                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getEnergyRank(){
                var self=this;
                this.$http.post(config.link+'/index/top',{ranking:3},

                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){

                            self.energyList=Object.assign({}, self.energyList, resovle);

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            selectRank(e,index){
                var self=this;
                switch(index){
                    case 0:
                        this.isActive=index;
                        this.listData=self.friendList;
                        console.log(this.listData)
                        break;
                    case 1:
                        this.isActive=index;
                        this.listData=self.totalList;
                        console.log(this.listData)
                        break;
                    case 2:
                        this.isActive=index;
                        this.listData=self.energyList;
                        break;
                }
            }
        },
        events:{
            'closePop':function(res){
                this.isPop=res
            }
        }
    }
</script>
