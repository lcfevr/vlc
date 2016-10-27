<style scoped>
    .popup {
        height: 100%;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99999;

    }

    .popup-swap {
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.8);
    }

    .box-swap {
        height:  304px;  /***  5.66 + 0.3 *2  close-btn height ***/
        width: 100%;
        position: fixed;
        top: 50%;
        left: 0;
        right: 0;
        transform: translateY(-50%);

    }

    .popup-box {
        width: 75% ;
        height: 304px;
        max-height: 100%;
        border-radius: 5px;
        position:relative;
        top: 30%;
        left: 50%;
        background: #e5e5e5;
        transform: translate(-50%,-30%);
        transition: transform 0.8s ease;
        -webkit-transition: all 0.4s ease;
    }



    .popup-box .pop_close_btn {
        height: 30px;
        width: 30px;
        border: 1px solid rgba(0,0,0,.8);
        border-radius: 16px;    /*** height/2 + border  ***/
        position: absolute;
        right: -15px;
        top: -15px;
        background: #333432;
    }

    .popup-box .pop_close_btn::before {
        content: '';
        position: absolute;
        top: 15px;
        left: 5px;
        height: 1px;
        width: 20px;
        background: #ffffff;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
    }

    .popup-box .pop_close_btn::after {
        content: '';
        position: absolute;
        top: 15px;
        left: 5px;
        height: 1px;
        width: 20px;
        background: #ffffff;
        transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
    }
    .popup-box .pop_close_btn_link_home {
        color: #fff;
        display: block;
        width: 100%;
    }
    .popup-box .rule-swap .warning {
        height: 70px;
        width: 70px;
        border: 5px solid #ffaa00;
        border-radius: 45px;
        position: absolute;
        top: 25px;
        left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
    }


    .popup-box .rule-swap .warning::before {
        content: '';
        display: block;
        height: 27px;
        width: 5px;
        border-radius: 2px;
        position: absolute;
        top: 12px;
        left:32px;
        background: #ffaa00;
    }

    .popup-box .rule-swap .warning::after {
        content: '';
        display: block;
        height: 8px;
        width: 5px;
        border-radius: 2px;
        position: absolute;
        top: 50px;
        left:32px;
        background: #ffaa00;
    }

    .popup-box .rule-swap .tip {
        text-align: center;
        padding-top: 30px;
    }

    .popup-box .rule-swap .tip p {
        font-size: 13px;
        line-height: 25px;
    }

    .popup-box .rule-swap .invite-btn {
        display: block;
        height: 30px;
        width: 80%;
        border-radius: 15px;
        text-align: center;
        color: #fff;
        background: #ff6600;
        position: absolute;
        bottom: 27px;
        left:25px;
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 30px;

    }





</style>
<template>
    <!--  弹窗  -->
    <section id="popup" class="popup">
        <!--  遮罩  -->
        <div class="popup-swap"></div>
        <!--  主体  -->
        <div class="box-swap">
            <div class="popup-box">
                <div id="rule-swap" class="rule-swap">
                    <div class="tip">
                        <p class="c_gray">
                            提示
                        </p>
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    module.exports = {
        data: function () {
            return {}
        },
        ready: function () {

        },
        beforeDestroy: function () {

        },
        methods: {

        }
    }
</script>
