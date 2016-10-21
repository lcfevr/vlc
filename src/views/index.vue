<style scoped>



    .d_btnContainer{
        width:100%;
        height:44px;
        display: -webkit-flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        border-top:1px solid #e6e6e6;
        border-bottom:1px solid #e6e6e6;
        background: #ffffff;
    }

    .d_btnContainer .btn{
        width:135px;
        height:30px;
        border-radius:30px;
        text-align: center;
        line-height: 30px;
        display: block;
        border:0;
        color: #ffffff;
        font-size:14px;
    }

    .d_btnContainer .btn>span{
        margin-left:5px;
    }




    .d_plan{
        width:calc(100% - 30px);
        border-top:1px solid #e6e6e6;
        margin-top:10px;
        padding:0 15px;
        background: #ffffff;
    }

    .d_plan .d_planBox{
        width:100%;
    }

    .d_plan .d_planBox .d_planTitle{
        width:100%;
        height: 43px;
        border-bottom:1px solid #e6e6e6;
        font-size:15px;
        color: #5c5c5c;
        line-height:43px;
    }

    .d_plan .d_planBox .d_planTitle .iconfont{
        color: #55acee;
        margin-right:5px;
    }
    .d_plan .d_planBox .d_planContent{
        width:100%;
        height:64px;
        border-bottom:1px solid #e6e6e6;
        display: -webkit-flex;
        align-items: center;
        justify-content: space-between;
    }

    .d_planContent .d_date{
        width:44px;
        height:44px;
        border-radius:5px;
        text-align: center;
        overflow:hidden;
        color: #ffffff;
    }

    .d_planContent .d_date .d_day{
        width:100%;
        height:27px;
        line-height:27px;
        font-size:16px;
    }

    .d_planContent .d_date .d_month{
        width:200%;
        height:34px;
        font-size:12px;
        line-height:34px;
        -webkit-transform: scale(.7) translateX(-35%) translateY(-35%);
        -moz-transform: scale(.7) translateX(-35%) translateY(-35%);
        transform: scale(.7) translateX(-35%) translateY(-35%);
    }


    .d_planContent .d_plan_score{
        height:44px;
        margin-left:10px;
        margin-right:auto;
    }

    .d_planContent .d_plan_score li{
        color: #727272;
        line-height:22px;
        font-size:12px;
    }
    .d_planContent .d_plan_score li:first-child{
        font-size:14px;
        color: #000;

    }

    .d_planContent .d_plan_score li:first-child span{
        color:#66bdff;
        font-size:12px;
        margin-left:5px;
    }

    .d_status .iconfont{
        font-size:30px;
    }

    .d_status .status_success:before{
        content:'\e613';
        font-size:30px;
        color: #66bdff;
    }

    .d_status .status_fail:before{
        content:'\e614';
        font-size:30px;
        color: #d2dbe1;
    }


    .status_timeTip{
        font-size:13px;
        color: #ffaa00;
        line-height:44px;
        align-self: flex-start;
    }

    .status_wait{
        font-size:13px;
        color: #d2dbe1;
        line-height:44px;
        align-self: flex-start;
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
        <div :class="['d_wrapper',loginStatus==1?'':'pt50']" >
            <banner></banner>

            <div class="d_btnContainer" v-if="loginStatus==1">
                <button class="btn start" v-link="{path:'/card'}"><i class="iconfont">&#xe60a;</i><span>个人中心</span></button>
                <a class="btn yellow" href='http://jifen.cmohurd.com/mall/index'><i class="iconfont">&#xe60c;</i><span>积分商城</span></a>
            </div>

            <div class="rules" v-else>
                <div class="ruleContainer">
                    <div class="rule_title"><i class="iconfont">&#xe60b;</i><span>活动规则</span></div>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>21天养成一个好习惯，每天早上06:00至08:00打卡，可获得相应积分。积分可用于兑换礼品；</p>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>第1天早起打卡，可获得10积分；第2天早起打卡，可获得20积分；第N天早起打卡，可获得Nx10积分。如：</p>
                    <ul>
                        <li>第1天打卡，当天获得10积分，累计10积分</li>
                        <li>第2天打卡，当天获得20积分，累计30积分</li>
                        <li>第3天打卡，当天获得30积分，累计60积分</li>
                    </ul>
                </div>
            </div>

            <div class="d_plan">
                <div class="d_planBox">
                    <div class="d_planTitle"><i class="iconfont">&#xe608;</i>早起计划</div>
                    <div class="d_planContent" v-for="item in signList" v-link="{path:'/complete'}">
                        <div class="d_date">
                            <div :class="['d_day',item.state==1?'lessBlue':'grey']">{{item.date | daysplit}}</div>
                            <div :class="['d_month',item.state==1?'start':'grey']"><span>{{item.date | datesplit}}</span></div>
                        </div>
                        <ul class="d_plan_score">
                            <li>第{{$index+1}}天<span>{{item.hour}}</span></li>
                            <li>获得{{item.addintegral}}积分，累计{{item.score}}积分</li>
                        </ul>
                        <template v-if="item.state==0">
                            <div class="d_status"><i class="iconfont status_fail"></i> </div>
                        </template>
                        <template v-if="item.state==1">
                            <div class="d_status"><i class="iconfont status_success"></i> </div>
                        </template>
                        <template v-if="item.state==2">
                            <div class="d_status status_timeTip">
                                <template v-if="loginStatus==1">
                                    <template v-if="(new Date(item.date+' '+'6:00')-new Date())/3600000>0&&(new Date(item.date+' '+'6:00')-new Date())/3600000<24">
                                        <span>{{today}}小时后开始</span>
                                    </template>
                                    <template v-if="(new Date(item.date+' '+'6:00')-new Date())/3600000>24">
                                        <span class="greyColor">待完成</span>
                                    </template>
                                    <template v-if="(new Date(item.date+' '+'6:00')-new Date())/3600000>-2&&(new Date(item.date+' '+'6:00')-new Date())/3600000<0">
                                        <span class="start">待打卡</span>
                                    </template>
                                </template>
                                <template v-else>
                                    <span class="greyColor">待完成</span>
                                </template>

                            </div>
                        </template>
                    </div>
                    <!--<div class="d_planContent">-->
                        <!--<div class="d_date">-->
                            <!--<div class="d_day">24</div>-->
                            <!--<div class="d_month"><span>2016-09</span></div>-->
                        <!--</div>-->
                        <!--<ul class="d_plan_score">-->
                            <!--<li>第一天<span>06:37</span></li>-->
                            <!--<li>获得10积分，累计10积分</li>-->
                        <!--</ul>-->
                        <!--<div class="d_status"><i class="iconfont status_success"></i> </div>-->
                    <!--</div>-->
                </div>
            </div>

                <template v-if="loginStatus==1">
                    <template v-if="isLazy==0">
                        <div class="normalBtn">
                            <button @click="tipRestart"><i class="iconfont whiteColor">&#xe612;</i>&nbsp;重新开始&nbsp;<i class="iconfont whiteColor">&#xe609;</i></button>
                        </div>
                    </template>
                    <template v-else>
                        <div class="normalBtn">
                            <button @click="restart" class="yellow"><i class="iconfont whiteColor">&#xe612;</i>&nbsp;重新开始</button>
                        </div>
                    </template>
                </template>
               <template v-else>
                   <div class="fixBtn">
                   <button class="start" @click="login"><i class="iconfont whiteColor">&#xe60f;</i>&nbsp;我要参加</button>
                       </div>
               </template>

        </div>
    </div>
    <pop v-if="isPop==1" transition="popup">
        <p>{{msg}}</p>
    </pop>

    <pop v-if="isPop==2" transition="popup">
        <p>重新开始后，早起进程将从第一天重新开始，确认继续吗？</p>
        <a class="whiteColor yellow invite-btn" @click="restartSure">确认</a>
    </pop>
</template>
<script>
    import pop from '../components/popSlot.vue'
    import banner from '../components/banner.vue'
    import config from '../config/config'
    import datesplit from '../filters/datesplite'
    import daysplit from '../filters/daysplite'


    export default {
        filters: {
            datesplit:datesplit,
            daysplit:daysplit
        },
        directives: {

        },
        components:{
            pop:pop,
            banner:banner,

        },
        computed:{
            today(){
                if(new Date().getHours()>8&&new Date().getHours()<24){
                    return 30-new Date().getHours()
                }else if(new Date().getHours()<6&&new Date().getHours()>0){
                    return 6-new Date().getHours()
                }
            }
        },
        data () {
            return {
                isIn:false, //转场动画
                items:[],  //头像数据
                dateInfo:[],
                clockInNumber:0,
                uid:0,
                signList:[],
                loginStatus:0, //登录信息
                isPop:0,//是否弹窗  0 弹窗关闭;1 msg弹窗; 2 restart弹窗
                msg:'', //弹窗信息
                current:0, //当天是否打卡
                isLazy:0,
                isFixed:false,
            }
        },
        compiled(){

        },
        ready () {
            this.isIn=true;
            this.getSignList()
            this.getJoinStatus();
        },
        beforeDestroy () {

        },
        methods: {
            tipRestart(){
                this.isPop=1;
                this.msg='当前无法重新开始';
            },
            getSignList(){
                var self=this;
                this.$http.post(config.link+'/join/signList',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle)
                            self.$nextTick(function(){
                                self.signList=this.insertScore(resovle.data.list);
                                self.current=resovle.data.current;
                                for(var i=0;i<resovle.data.list.length;i++){
                                    console.log(resovle.data.list[i].state)

                                    if(resovle.data.list[i].state==0){
                                        console.log('=======')
                                        self.isLazy++;
                                    }
                                }
                                console.log(self.isLazy)
                            })
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            insertScore(value){
                var newSignList=[];
                for(var i=0;i<value.length;i++){
                   var listItem=value[i];
                    if(i==0){
                        listItem.score=value[i].addintegral
                    }else{
                        listItem.score=value[i].addintegral+value[i-1].addintegral
                    }
                    newSignList.push(listItem)
                }

                return newSignList;
            },
            getJoinStatus(){
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
                            self.$nextTick(function(){
                                self.loginStatus=resovle.data.isJoin;
                            })
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            login(){
                var self=this;
                this.$http.post(config.link+'/join/joinInto',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle);
                            if(resovle.status==200){
                                self.loginStatus=1;
                                self.getSignList();
                                window.scrollTo(0,0)
                            }else{
                                self.isPop=true;
                                self.msg=resovle.msg;
                            }
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            restart(){
                this.isPop=2;
            },
            restartSure(){
                var self=this;
                this.$http.post(config.link+'/join/reJoin',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle);
                            if(resovle.status==200){
                                self.loginStatus=0;
                                self.isPop=0;
                                self.getSignList();
                            }else{
                                self.isPop=1;
                                self.msg=resovle.msg;

                            }
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            }
        },
        events:{
            'closePop':function(res){
                this.isPop=res
            }
        }
    }

</script>
