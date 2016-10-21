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

    .restartInfo{
        font-size:14px;
        line-height:20px;
        margin-top:15px;
        color: #666666;
    }
</style>
<template>
    <div class="main" v-if="isIn" transition="route">
        <div class="d_wrapper pt50">
            <banner ></banner>
            <div class="timeToGo">

                <template v-if="loginStatus==0">
                    <button class="start" @click="jonInto"><i class="iconfont">&#xe60f;</i>我要参加</button>
                </template>
                <template v-else>
                    <template v-if="new Date().getHours()>=6&&new Date().getHours()<=8">
                        <button class="yellow"><i class="iconfont">&#xe610;</i>我要打卡</button>
                    </template>
                    <template v-if="new Date().getHours()<6">
                        <button @click="tipWait"><i class="iconfont">&#xe607;</i>未到时间&nbsp;<i class="iconfont">&#xe607;</i></button>
                    </template>
                    <template v-if="new Date().getHours()>8">
                        <button @click="tipMiss"><i class="iconfont">&#xe611;</i>已错过&nbsp;<i class="iconfont">&#xe607;</i></button>
                    </template>

                </template>


            </div>
            <div class="rules">
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
            <div class="fixBtn">
                <button class="start" @click="movePop"><i class="iconfont">&#xe611;</i>&nbsp;拒绝早起</button>
            </div>
        </div>
    </div>
    <pop v-if="isPop==1" transition="popup">
        <p>{{msg}}</p>
    </pop>
    <pop v-if="isPop==2" transition="popup">
        <p>{{msg}}</p>
        <a class="whiteColor yellow invite-btn" @click="moveJoin">确认</a>
    </pop>
</template>
<script>
    import banner from '../components/banner.vue'
    import pop from '../components/popSlot.vue'
    import config from '../config/config'
    module.exports = {
        components:{
            banner:banner,
            pop:pop
        },
        props:{

        },
        data: function () {
            return {
                isIn:false,
                loginStatus:0,
                msg:'', //弹窗消息
                isPop:0 //弹窗  0 弹窗关闭 1 msg消息
            }
        },
        ready: function () {
            this.isIn=true;
            this.getJoinStatus();
        },
        beforeDestroy: function () {

        },
        methods: {
            tipWait(){
                this.isPop=1;
                this.msg='未到打卡时间'
            },

            tipMiss(){
                this.isPop=1;
                this.msg='已错过打卡时间'
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
            movePop(){
                this.isPop=2;
                this.msg='确认拒绝早起吗？';
            },
            moveJoin(){
                var self=this;
                this.$http.post(config.link+'/join/moveJoin',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle)
                            if(resovle.status==200){
                                self.$nextTick(function(){
                                    self.$router.go({path:'/index'})
                                })
                            }else{
                                self.$nextTick(function(){
                                    self.isPop=1;
                                    self.msg=resovle.msg
                                })

                            }

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            jonInto(){
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
                            }else{
                                self.isPop=true;
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
