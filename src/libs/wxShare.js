/**
 * Created by Sherry on 2016/9/27.
 */
import config from '../config/config'
  var shareWx={
        signatureInterface:'/index/getwxconf',
        confInterface:'/Type/shareData',
        shareConf: {
          title: "",
          desc: "",
          link: (function(){
              return window.location.origin +'/index';
          })(),
          imgUrl: "https://img.alicdn.com/imgextra/i2/1724390189/TB2_qQvaSOI.eBjSspmXXatOVXa_!!1724390189.jpg",
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
                    var res=JSON.parse(resovle)
                    wx.config({
                        debug: 0,
                        appId: res.appId,
                        timestamp: res.timestamp,
                        nonceStr: res.nonceStr,
                        signature: res.signature,
                        jsApiList: setings.split(" ")
                    });
                    wx.ready(function() {
                        // self.updateShare();
                        // callback && callback();
                        _this.getConf(vm,callback);
                        // wx.hideOptionMenu();
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
                .catch(function(reject){
                    callback && callback(reject)
                }) 
        },
        updateShare:function(conf){
            var setings = "onMenuShareTimeline onMenuShareAppMessage onMenuShareQQ onMenuShareWeibo onMenuShareQZone",
                thisConf = this.shareConf,
                obj = {},
                Conf = conf || {};
            for (var k in thisConf) {
                if (Conf.hasOwnProperty(k)) {
                    obj[k] = Conf[k];
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
        var Action = action || 'onMenuShareTimeline';
        _czc.push(["_trackEvent",alias_event,Action,"daka","sign",config.link]);

        }
};

export default shareWx;