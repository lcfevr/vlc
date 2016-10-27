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
        <div class="d_wrapper">
            <banner ></banner>
            <div class="timeToGo">
                <template v-if="loginStatus==0">
                    <button class="start" @click="jonInto"><i class="iconfont">&#xe60f;</i>我要参加</button>
                </template>
                <template v-else>
                    <template v-if="new Date().getHours()>=6&&new Date().getHours()<=8">
                        <template v-if="state==0">
                            <button class="yellow" @click="reg"><i class="iconfont">&#xe610;</i>我要打卡</button>
                        </template>
                        <template v-else>
                            <button class="start" v-link="{path:'/rank'}"><i class="iconfont">&#xe610;</i>生成早起卡</button>
                        </template>

                    </template>
                    <template v-if="new Date().getHours()<6">
                        <button class="grey" ><i class="iconfont">&#xe607;</i>未到时间&nbsp;<i class="iconfont">&#xe607;</i></button>
                    </template>
                    <template v-if="new Date().getHours()>8">
                        <button class="grey" @click="tipMiss"><i class="iconfont">&#xe611;</i>已错过&nbsp;<i class="iconfont">&#xe607;</i></button>
                    </template>
                </template>
            </div>
            <div class="rules" >
                <div class="ruleContainer">
                    <div class="rule_title"><i class="iconfont">&#xe60b;</i><span>活动规则</span></div>
                </div>

                <div class="rule_item">
                    <p><i class="iconfont"></i>“我总觉得自己还不错，但终究自己是个平凡无奇的人。”</p>
                </div>
                <div class="rule_item">
                    <p ><i class="iconfont"></i><span class="blueColor">早起，一件微不足道的小事，坚持21天，却不平凡。“湖南头条·21天早起打卡”，和在湖南的万千用户一起，见证自己的改变，分享自己的不凡。</span></p>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>本活动长期服务于“湖南头条”用户，只要您是我们千万用户中的一员，便可随时参与活动。</p>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>每天早上06:00至08:00期间打卡（其它时间不能打卡），即成功早起一天，本活动以21天为基本周期。打卡成功即可获得相应积分，积分可用于兑换礼品。</p>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>第1天早起打卡，可获得10积分；第2天早起打卡，可获得20积分；第N天早起打卡，可获得Nx10积分。如：</p>
                    <ul>
                        <li>第1天打卡，当天获得10积分，累计10积分</li>
                        <li>第2天打卡，当天获得20积分，累计30积分</li>
                        <li>第3天打卡，当天获得30积分，累计60积分</li>
                        <li>......</li>
                        <li>第21天打卡，当天获得210积分，累计2310积分</li>
                        <li>之后每天固定获得100积分。</li>
                    </ul>
                </div>
                <div class="rule_item">
                    <p ><i class="iconfont"></i><span class="blueColor">每天打卡成功后，可选择生成一张专属“早起卡”，分享出去（朋友圈或私发）后，若有朋友通过这张专属卡片参与活动，与您一起早起，您与您的好友都将获得50积分，最多可邀请50人。</span></p>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>“早起卡”共14张，分别以湖南省14个市州为主题，如：长沙卡、株洲卡、湘潭卡、常德卡...凡每月初，至月底集齐14张卡片的用户，即可激活“兑奖”按钮，到指定大转盘页面瓜分大奖！iPhone 7、iWhatch、小米手环、100元现金红包、50元话费等，100%能中到其中一份奖品哦！</p>
                </div>
                <div class="rule_item">
                    <ul>
                        <li>
                            （1）若没有早起或忘记打卡，积分将从10开始重新累计（之前的积分依然保留），您可以选择重新开始，列表将回到第1天重新开始；
                        </li>
                        <li>
                            （2）打满21天后，即成功完成早起打卡活动，您可继续打卡，积分变更为每天固定100积分。
                        </li>
                    </ul>
                </div>
                <div class="rule_item">
                    <p><i class="iconfont"></i>告别赖床，拥抱清晨，同时还能赢取iPhone 、iWatch、小米手环等大礼！一起见证这21天的改变！</p>
                </div>

            </div>
            <div class="normalBtn">
                <template v-if="loginStatus==1">
                    <button class="start" @click="movePop"><i class="iconfont">&#xe611;</i>&nbsp;拒绝早起</button>
                </template>
              <template v-else>
                  <button class="grey"><i class="iconfont">&#xe611;</i>&nbsp;拒绝早起</button>
              </template>
            </div>
        </div>
    </div>
    <pop v-if="isPop==1" transition="popup">
        <p>{{msg}}</p>
    </pop>
    <pop v-if="isPop==2" transition="popup">
        <template v-if="p_category==1">
            <p>我经常要求你早起是有点烦</p>
            <p>但是即使没有了我</p>
            <p>你还是要保持早起好习惯...</p>
            <a class="whiteColor yellow invite-btn" @click="isPop=0">继续陪伴</a>
            <a class="whiteColor grey invite-btn" @click="moveJoin">依然离开</a>
        </template>
        <template v-if="p_category==0">
            <p>&nbsp;</p>
            <p>你这个懒鬼！</p>
            <p>&nbsp;</p>
            <a class="whiteColor yellow invite-btn" @click="isPop=0">明天不会了</a>
        </template>

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
        props:{

        },
        data() {
            return {
                isIn:false,
                loginStatus:0,
                state:0,
                msg:'', //弹窗消息
                isPop:0, //弹窗  0 弹窗关闭 1 msg消息
                p_category:null //弹窗类型   0 已错过  1 拒绝早起
            }
        },
        ready() {
            this.isIn=true;
            this.getJoinStatus();
            var _this=this;
            var shareConf={
                title: "我已参加早起打卡活动，拥抱清晨，坚持21天！",
                desc: "我已参加早起打卡活动，拥抱清晨，坚持21天！",
                link: (function(){
                    return window.location.origin + '/index';
                })(),
                imgUrl: "https://img.alicdn.com/imgextra/i2/1724390189/TB2_qQvaSOI.eBjSspmXXatOVXa_!!1724390189.jpg",
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


            tipMiss(){
                this.isPop=2;
                this.p_category=0
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

                                self.loginStatus=resovle.data.isJoin;
                                if(self.loginStatus==1){
                                    self.state=resovle.data.current
                                }

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            movePop(){
                this.isPop=2;
                this.p_category=1;
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

                                self.$router.go({path:'/index'})

                            }else{
                                self.isPop=1;
                                self.msg=resovle.msg
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

                                    self.state=1;

                            }else{
                                self.isPop=1;
                                self.msg=resovle.msg;
                            }
                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            reg(){
                var self=this;
                this.$http.post(config.link+'/join/clickSign',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle);
                            if(resovle.status==200){
                                self.state=1;
                                self.$router.go({path:'/rank'})
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
