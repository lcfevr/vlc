<style scoped>

    .center {
        margin: 0 auto;
        left: 0;
        right: 0;
        text-align: center;
    }
    .c_orange {
        color: #ffaa00;
    }
    .c_blue {
        color: #55acee;
    }
    section {
        margin: 0 auto;
        max-width: 640px;
    }
    body {
        color: #999999;
        font-size: 13px;
        font-family: 'Microsoft JhengHei Light','Microsoft JhengHei','Microsoft YaHei Light','Microsoft YaHei',sans-serif;
        overflow-x: hidden;
    }

    /* usr */

    .user_info {
        width: 100%;
        max-width: 640px;
        height: 73.5vw;
        max-height: 470px;
        font-size: inherit;
        color: #636f74;
        background: url("../images/banner.jpg") center 0 / cover;
        position: relative;
    }
    .link_to_back {
        width: 050px;
        height: 050px;
        color: #fff;
        border: 2px currentColor solid;
        border-radius: 50%;
        position: absolute;
        top: 10px;
        left: 10px;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -webkit-transform: scale(0.5);
    }
    .link_to_back::before {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        width: 30px;
        top: -webkit-calc(50% - 1px);
        left: -webkit-calc(50% - 16px);
        background: currentColor;
    }
    .link_to_back .back {
        width: -webkit-calc(100% - 4px);
        height: -webkit-calc(100% - 4px);
        position: relative;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    .link_to_back .back::before, .link_to_back .back::after {
        content: "";
        display: block;
        position: absolute;
        height: 2px;
        width: 16px;
        background: currentColor;
        top: -webkit-calc(50% + 1px);
        left: -webkit-calc(50% - 14px);
        -webkit-transform-origin: left;
    }
    .link_to_back .back::before {
        -webkit-transform: rotate(45deg);
    }
    .link_to_back .back::after {
        -webkit-transform: rotate(-45deg);
    }
    .user_head {
        position: absolute;
        top: 27.66%;
        width: 75px;
        height: 75px;
        color: #fff;
        box-shadow: 0 0 20px currentColor;
        border: 1px currentColor solid;
        border-radius: 50%;
        overflow: hidden;
        animation: headlight 2s ease;
        -webkit-animation: headlight 2s ease infinite;
    }
    .user_head img {
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(45deg, #ff6600 0%, #00a0e9 100%);
        object-fit: cover;
    }
    .nickname {
        position: absolute;
        display: block;
        font-size: 14px;
        line-height: 16px;
        top: 68%;
        color: #fff;
    }
    .user_info .user_info_ul {
        height: 40px;
        width: 100%;
        position: absolute;
        bottom: 0;
        padding-bottom: 2px;
        background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
        display: -webkit-box;
    }
    .user_info .user_info_ul li {
        display: block;
        -webkit-box-flex: 1;
        width: 1%;
        text-align: center;
        line-height: 40px;
        position: relative;
        overflow: hidden;
    }
    .user_info .user_info_ul li span {
        display: block;
        height: 15px;
        line-height: 15px;
    }
    .user_info .user_info_ul li span:nth-of-type(2) {
        line-height: 25px;
        height: 25px;
    }
    .user_info .user_info_ul li:not(:last-of-type)::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: -webkit-linear-gradient( 90deg, rgba(230,230,230,0) 30%, rgba(230,230,230,1) 50%, rgba(230,230,230,0) 80%) right no-repeat;
    }


    /* tap栏 */

    .tap_bar {
        background: #ffffff;
        border-bottom: 1px #efefef solid;
        width: 100%;
        max-width: 640px;
    }
    .tap_bar ul {
        display: flex;
        display: -webkit-flex;
        width: 100%;
        height: 66px;
        overflow: hidden;
    }
    .tap_bar li {
        position: relative;
        display: block;
        flex: 1;
    }
    .tap_bar li a {
        font-size: inherit;
        line-height: 54px;
        text-align: center;
        display: block;
        -webkit-box-sizing: border-box;
        color: inherit;
        padding-top: 10px;
    }
    .tap_bar .current a {
        color: #55acee;
        border-bottom:2px currentColor solid;
        -webkit-transition: 1s all cubic-bezier(0.68,-0.55,0.27,1.55);
        /*-webkit-transform: scale(1.1);*/
    }
    .tap_bar li:not(:last-of-type)::after {
        content: '';
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        width: 1px;
        height: 100%;
        background: -webkit-linear-gradient( 90deg, rgba(230,230,230,0) 0%, rgba(230,230,230,1) 50%, rgba(230,230,230,0) 100%) right no-repeat;
    }

    .overdue {
        border-radius: 16px;
        padding:0 3px;
        color: #ffffff;
        background: #ffa538;
        position: absolute;
        top: 8px;
        left: -webkit-calc(50% + 16px);
        z-index: 99;
    }

    .myCard .overdue {
        background: #ef440f;
    }

    .overdue p {
        display: inline-block;
        text-align: center;
        line-height: 16px;
        padding: 1px 4px;
    }
    .overdue span::before {
        content: '';
        height: 0;
        width: 0;
        display: block;
        border-left: 0 solid transparent;
        border-right: 6px solid transparent;
        border-top: 7px solid #ffa538;
        position: absolute;
        top: 14px;
        left: 6px;
    }
    .myCard .overdue span::before {
        content: '';
        height: 0;
        width: 0;
        display: block;
        border-left: 0 solid transparent;
        border-right: 6px solid transparent;
        border-top: 7px solid #ef440f;
        position: absolute;
        top: 14px;
        left: 6px;
    }


    /* 打卡记录 */

    .record_box {
        padding-bottom: 30px;
    }
    .record {
        height: 62px;
        border-bottom: 1px #e6e6e6 solid;
        margin: 0 10px;
        position: relative;
    }
    .record .data_box {
        width: 46px;
        height: 46px;
        position: absolute;
        background: #66bdff;
        border-radius: 4px;
        top: 8px;
        left: 0;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
    }
    .record .data_box::before {
        display: block;
        content: '';
        height: 18px;
        width: 100%;
        position: absolute;
        top: 28px;
        background: #55acee;
        z-index: 0;
    }
    .data_box .day {
        font-size: 16px;
        font-weight: bold;
        height: 28px;
        line-height: 32px;
    }
    .data_box .year-month {
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        z-index: 9;
        transform: scale(0.9);
    }
    .info_box {
        height: 46px;
        width: -webkit-calc(100% - 50px);
        position: absolute;
        left: 50px;
        top: 8px;
    }
    .info_box > p {
        display: inline-block;
        line-height: 46px;
    }
    .info_box > p span {
        padding-left: 2px;
    }
    .info_box .da_statu {
        padding: 0 10px;
    }
    .info_box .da_days {
        position: absolute;
        left: -webkit-calc(50% - 30px);
    }
    .info_box .da_point {
        position: absolute;
        right: 0;
    }


    .get_more {
        font-size: 12px;
        margin: 10px;
        padding: 10px 0 0 0;
        text-align: center;
        display: block;
        opacity: 0.4;
    }

    /* 卡片切换 */

    .swiper {
        margin: 10px auto 20px auto;
        padding-bottom: 60px;
    }

    .swiper-container {
        width: 100%;
        height: 110vw;
        max-height: 832px;
        padding-top: 20px;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        height: 100%;
        transition: 1s ease transform,1s ease opacity;
    }
    .swiper-slide,.swiper-slide-duplicate,.swiper-slide-prev,.swiper-slide-next {
        transform: scale(0.9) ;
        -webkit-transform: scale(0.9) ;
        opacity: 0.5;
    }
    .swiper-slide-active {
        transform: scale(1) ;
        -webkit-transform: scale(1) ;
        opacity: 1;
    }
    .swiper-slide img {
        width: 100%;
        object-fit: cover;
        position: relative;
    }

    .swiper-slide p {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #ef440f;
        width: 26px;
        height: 26px;

        overflow: hidden;
        border-radius: 50%;
        color: #fff;
        font-size: 14px;
        line-height: 26px;
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

    /* 底部状态按钮 */

    .ka_status_btn {
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 999;
        height: 50px;
        line-height: 50px;
        max-width: 640px;
    }

    .ka_status_btn .status {
        display: block;
        text-align: center;
        color: #fff;
        font-size: 18px;
    }
    .ka_status_btn .status1 {
        background: #ffaa00;
    }
    .ka_status_btn .status2 {
        background: #d2dbe1;
    }

    .ka_status_btn .status .icon {
        display: inline-block;
        width: 19px;
        height: 19px;
        position: relative;
    }
    .ka_status_btn .icon::after {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: -4px;
        width: 19px;
        height: 19px;
    }
    .ka_status_btn .status1 .icon::after {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMA8PSsFXMF+eLcp2MJN+Ya39nHwzMrSyd3ZyPOtocN1dKAfV4u6ZiMSEQfEtS/vLGCbVCfnJFYmWv0PgAAAiVJREFUOMt9VAeSgzAMXMA4hN6TkN7bpV7h/z87F8yFIdzOBIytSKu1JChkzt5IIl8rOXQtnF/s+88JDRTffvkW4T1AjWWv7IQ+VFZGvafZI49QStKRrdWbNgRW6rvvzFDDdfpqfwWGUxVRNykwMI2FFcaGOQCoqcuTXgFgWrnKgDz545QcgE3lcA/AEqvxGcGkSX4SgMzFagsUYhEReC1N/BRE+ttgLXhl8LS2GFqKVDB3JDUTwVt9fYIhf3/D5vQpBK82bnBD9jJwET5zSXo9rELPlzup0xEj9owxZ8xcJEIDAEdx+OECT7G6YKazcFwPGwOx9QCDXusuHRec1pZ/OJJnuQMQqBX3IrNzWMr83151+b2HO4jl6okz3xPsPfYE+xGMWyluVW0tQCozygh2wgJqs7DbLATaQdsYy6CMQ8pT0D5bla5/6TyFlB1KQcyyvMKLmlYfGY9iYsTNfCXvp+ve9RdXKzrjmgx4KAsRs3XB5ernOJtxTzIyz8hDcZszjauSvFx9/KRwvfywmQHHq9jKxdVfxQVEFDfVgY9Dujmud5WSE9C+6MG9vDjiv9W2KsslnP+LPBNZ/SCT7RfA23a3zAnwpUik1YC3AGQh+w5g5OSSt3PcbmdVpUVjOAyNOLQWcjgM1UkgxpZyEDnu66ipy8YUG7Q5uAqXEm9k/CX+VY9B/Z8xaKLGaWp11O40QAPZespGtCVj9TRrntjTdaFOfwFhvc0pI4UlwQAAAABJRU5ErkJggg==") center 0 / cover;
    }
    .ka_status_btn .status2 .icon::after {
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAMAAACf4xmcAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMAFffxc2YE2t3RreXhOAjz7ujDNCbVYyspGMe2qpOHdyILqHxO+qScjIBJG9++XVhCELGDMR5tR3tN/AAAAi1JREFUOMt1lIe2qkAMRQ/SBAVRkCbV3ruX//+zN825zyvstYCsYUgyJwl4E4Vbe2IOvIYy8o7T0/pxqfBBlY+bVvqPBJLdqumkV0KQyTV1rjuKYSi+Plfl4hqMhYwQ1pC4uvleX4Dw6gnvmgEEWmYN+6mtBYChvd9UAArhKgL2k0Yy2QNRn9tbAENmWTccZp/JzxIoU2aNgYAZpgJn0Pxh4CPh/p44MzkjOOq3GN4TT6aVzlPTcGjVd6CgpM8cc5q+gVm7uHe4R/KwcSL3EEue9LkUoae7nKtxhU7uKaYksxoTpgGAK9/lQnx5wq1HwlE91uK4PyCMpO68WSqa1hgqjVmylQ2Ag7RqHlWjUVX6tQObrax+3Djl5VniJhoig0/uIJcC6+uI454wLChim0sS7GQIiG0Gjt3bjkBnUIkMSmrmw+7eZtMjqFQQHZosYn6Ja9yC/YMGkIJ4IO0zRyw67ArD1xfFInQM+DxEQEMNYRKXNVJaoStiOYheHsOxaDVrlSTIqqnTAm6NZPOR1SZx82bPSn9i2ZsG7k118f5KvAxmcE02g1uepzJu1Va05Q4ha/K4tclVHxHrmAsiPjIJnHHLyCh8pl/AgDei8jWA9wSKxZ0AJDluxsAybR/nBYDq/59DXNppf2hl7OdQijejBIRdIzBDFxI3ZK64DhTD/j3aWneq2lUcPVN/ZYZgx7y3M9IgeRWDjt4tDvggOheZ/EWvvOF0Mi/OAQT/AP3B0t0yJbg+AAAAAElFTkSuQmCC") center 0 / cover;
    }

    @-webkit-keyframes headlight {
        0%{box-shadow: 0 0 20px #fff;}
        80%{box-shadow: 0 0 0 #fff;}
        100%{box-shadow: 0 0 20px #fff;}
    }

    .page2 {
        display: none;
    }
</style>
<template>
    <!-- usr信息 -->

    <section class="user_info center">
        <div class="link_to_back" v-link="{path:'/'}">
            <div class="back"></div>
        </div>
        <div class="user_head center"><img id="user_head_src" :src="userInfo.logo"></div>
        <p id="nickname" class="nickname center">{{userInfo.nickname}}</p>
        <ul class="user_info_ul">
            <li>
                <span class="total_point c_orange">{{userInfo.total_score}}</span><span>总积分</span>
            </li>
            <li>
                <span class="used_point c_orange">{{userInfo.used_score}}</span><span>已兑换积分</span>
            </li>
            <li>
                <span class="remain_point c_orange">{{userInfo.left_score}}</span><span>剩余积分</span>
            </li>
        </ul>
    </section>

    <!-- tab切换 -->
    <!--  .current  类为当前高亮栏 -->
    <!--  要切换显示的分别添加了 .page1 .page2 类 -->

    <section class="tap_bar">
        <ul>
            <li :class="['tap_bar_item',{current:isA}]">

                <a  @click="tabA">积分记录</a>

                <div class="overdue" v-if="signListLength>0&&touch_1==1">
                    <p><span>{{signListLength}}</span></p>
                </div>
            </li>
            <li :class="['tap_bar_item','myCard',{current:isB}]">
                <a  @click="tabB">我的卡片</a>
                <div class="overdue" v-if="card.length>0&&touch_2==1">
                    <p><span>{{cardCount}}</span></p>
                </div>
            </li>
        </ul>
    </section>

    <!-- 卡片 -->

    <section :class="['swiper',{page2:!isB}]">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <template v-for="item in card">
                    <div class="swiper-slide" ><img @click="largeShow" :id="item.card_id" :src="item.img" /><p>{{item.num}}</p></div>
                </template>
            </div>
            <div class="swiper-pagination"></div>
        </div>

    </section>


    <!--  打卡记录  -->

    <section :class="['record_box',{page2:!isA}]">
        <template v-for="item in signList">
            <div class="record" v-if="item.state==1">
                <div class="data_box">
                    <p class="day">{{item.date | daysplit}}</p>
                    <p class="year-month">{{item.date | datesplit}}</p>
                </div>
                <div class="info_box">
                    <p class="da_statu">打卡成功</p>
                    <p class="da_days">连续打卡<span class="c_blue">{{item.lastday}}天</span></p>
                    <p class="da_point">积分<span class="c_orange">+{{item.addintegral}}</span></p>
                </div>
            </div>
        </template>

        <a id="getmore" class="get_more">没有更多了</a>
    </section>


    <!-- 按钮 -->

    <section class="page2">
        <div class="ka_status_btn">
            <a href="#" class="status status1"><i class="icon"></i>确认兑换</a>
            <a href="#" class="status status2"><i class="icon"></i>尚未集齐</a>
        </div>
    </section>


    <!-- 大图 -->

    <section class="carrousel " v-show="isLargeModel">
        <p>偷懒的人那么多，早起的就你一个<br>长按图片保存到手机，带动朋友们早起吧～</p>
        <div class="wrapper">
            <img :src="largeImg">
            <span class="close" @click="isLargeModel=!isLargeModel"></span>
        </div>
    </section>

    <div class="fixBtn" >
        <a v-if="card.length==14" href="http://jifen.cmohurd.com/mall/index" class="start"><i class="iconfont">&#xe60d;</i>集卡抽奖</a>
        <button v-else class="grey" @click="isPop=1"><i class="iconfont">&#xe611;</i>尚未集齐<i class="iconfont">&#xe609;</i> </button>
    </div>
    <pop v-if="isPop==1">
        <p>&nbsp;</p>
        <p>豪礼100%，集齐14张早起卡，就可以激活按钮兑奖啦～</p>
        <p>&nbsp;</p>
        <a class="whiteColor yellow invite-btn" @click="isPop=0">明白了</a>

    </pop>
</template>
<script>
    import Swiper from '../libs/swiper.min'
    import config from '../config/config'
    import datesplite from '../filters/datesplite'
    import daysplite from '../filters/daysplite'
    import pop from '../components/popSlot.vue'

    module.exports = {
        filters:{
            datesplit:datesplite,
            daysplit:daysplite
        },
        components:{
            pop:pop

        },
        data () {
            return {
                isA:false,
                isB:true,
                mySwiper:{},
                isLargeModel:false, //大图模式
                largeImg:'', //大图
                privateData:[],
                userInfo:{},
                signList:[], //打卡记录
                signListLength:0,
                card:[], //卡片集合
                cardCount:0,
                touch_1:1,
                touch_2:1,
                isPop:0
            }
        },
        compiled(){
            this.getIntegralAccording();
            this.getSignList();
            this.getCard();
        },
        ready() {


        },
        beforeDestroy () {
            this.mySwiper.destroy(true,true)
        },
        methods: {
            tabA(){
                this.isA=true;
                this.isB=false;
                this.touch_1=0;
//                if(!!this.mySwiper) this.mySwiper.destroy(true,true);
            },

            tabB(){
                this.isB=true;
                this.isA=false;
                this.touch_2=0;
            },

            largeShow(e){
                this.isLargeModel=true;
                this.largeImg=config.link+'/join/getLuckPic?pid='+e.target.id;
            },
            getIntegralAccording(){
                var self=this;
                this.$http.post(config.link+'/index/integralAccording',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                            console.log(resovle.data)

                                self.userInfo = Object.assign({}, self.userInfo, resovle.data)


                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
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
                            self.signList=Object.assign({}, self.signList, resovle.data.list)

                                for(var i=0;i<resovle.data.list.length;i++){
                                    if(resovle.data.list[i].state==1){
                                        self.signListLength++;
                                    }
                                }

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            },
            getCard(){
                var self=this;
                this.$http.post(config.link+'/join/getCard',
                        { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                        .then(function(res){
                            if(res.ok){
                                return res.body
                            }
                        })
                        .then(function(resovle){
                                self.card=resovle.data.list;
                                self.cardCount=resovle.data.count;
                                self.mySwiper = new Swiper('.swiper-container', {
                                    effect : 'slide',
                                    loop:false,
                                    preloadImages: true,
                                    pagination: '.swiper-pagination',
                                    slidesPerView: 1.4,
                                    observer:true,
                                    paginationClickable: true,
                                    spaceBetween: 0,
                                    centeredSlides:true,
                                    slideToClickedSlide:true
                                });

                        })
                        .catch(function(reject){
                            console.log(reject)
                        })
            }
        },
        events:{
            'closePop':function(res){
                if(this.isPop==3) return;
                this.isPop=res
            }
        }
    }
</script>
