/**
 * Created by Sherry on 2016/9/27.
 */
import config from '../config/config'
  var shareWx={
        signatureInterface:'/Type/share',
        confInterface:'/Type/shareData',
        shareConf: {
          title: "dushu",
          desc: "dushu",
          link: (function(){
              return window.location.origin + window.location.pathname;
          })(),
          imgUrl: "",
          success: function() {
              
          },
          cancel: function() {}
        },
        init:function(vm,callback){
            var _this=this,
                setings = "onMenuShareTimeline onMenuShareAppMessage onMenuShareQQ onMenuShareWeibo onMenuShareQZone startRecord stopRecord onVoiceRecordEnd playVoice pauseVoice stopVoice onVoicePlayEnd uploadVoice downloadVoice chooseImage previewImage uploadImage downloadImage translateVoice getNetworkType openLocation getLocation hideOptionMenu showOptionMenu hideMenuItems showMenuItems hideAllNonBaseMenuItem showAllNonBaseMenuItem closeWindow scanQRCode chooseWXPay openProductSpecificView addCard chooseCard openCard";
            vm.$http.post(config.link+this.signatureInterface,{'url':encodeURIComponent(location.href.replace(/#.*$/, ""))},
                { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                .then(function(res){
                    if(res.ok){
                        return res.body
                    }else{
                        alert('签名请求错误')
                    }
                })
                .then(function(resovle){
                    wx.config({
                        debug: 0,
                        appId: resovle.appId,
                        timestamp: parseInt(resovle.timestamp),
                        nonceStr: resovle.nonceStr,
                        signature: resovle.signature,
                        jsApiList: setings.split(" ")
                    });
                    wx.ready(function() {
                        // self.updateShare();
                        // callback && callback();
                        _this.getConf(vm,callback);
                    });
                    wx.error(function(res) {
                        // alert("微信验证失败\n" + JSON.stringify(res));
                        callback && callback();
                    });
                })
                .catch(function(reject){
                    console.log(reject)
                })
        },
        getConf:function(vm,callback){
            var _this=this;
            vm.$http.post(config.link+this.confInterface,{'url':encodeURIComponent(location.href.replace(/#.*$/, ""))},
                { "Access-Control-Allow-Origin":'*',"Access-Control-Allow-Headers":'Origin, X-Requested-With, Content-Type, Accept'})
                .then(function(res){
                    if(res.ok){
                        return res.body
                    }
                })
                .then(function(resovle){
                    console.log(resovle)
                    _this.shareConf.title=resovle.title;
                    _this.shareConf.desc=resovle.desc;
                    _this.shareConf.imgUrl=resovle.imageurl;
                    _this.updateShare();
                })
                .catch(function(rej65ect){
                    console.log(reject)
                }) 
        },
        updateShare:function(conf){
            var setings = "onMenuShareTimeline onMenuShareAppMessage onMenuShareQQ onMenuShareWeibo onMenuShareQZone",
                thisConf = this.shareConf,
                obj = {},
                conf = conf || {};
            for (var k in thisConf) {
                if (conf.hasOwnProperty(k)) {
                    obj[k] = conf[k];
                } else {
                    obj[k] = thisConf[k];
                }
            }
            setings.split(" ").forEach(function(e) {
                if(e == 'onMenuShareTimeline'){
                    wx[e]({
                        title: obj['desc'],
                        link: obj['link'],
                        imgUrl: obj['imgUrl'],
                        fun_name: 'onMenuShareTimeline',
                        success: obj['success'],
                        cancel: obj['cancel']
                    });
                }else if(e=='onMenuShareAppMessage'){
                    wx[e]({
                        title: obj['title'],
                        link: obj['link'],
                        desc:obj['desc'],
                        imgUrl: obj['imgUrl'],
                        fun_name: 'onMenuShareAppMessage',
                        success: obj['success'],
                        cancel: obj['cancel']
                    });
                } else {
                    obj['fun_name'] = e;
                    wx[e](obj);
                }
            });
        },
        staticstical:function(alias_event, action) {  //cnzz方法
        // console.log(alias_event);
        var action = action || 'onclick';
        _czc.push(["_trackEvent",alias_event,action,"Reading","sign","1"]);

        }
};

export default shareWx;