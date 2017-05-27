<template>
    <div class="vlc-switch">
        <input type="checkbox" :id="id" class="vlc-switch-checkbox hidden">
        <label :for="id" class="vlc-switch-ui small"></label>
    </div>
</template>

<script>
    import {random_str} from '../../utils/util'
    const id = Date.now()+"_"+random_str();

    export default {
        name:'SwitchBar',
        props: {
            onOk: {
                type: Function,
                default: function () {
                }
            },
            onClose: {
                type: Function,
                default: function () {
                }
            },


        },
        data(){
            return {
                id:id,

            }
        },
        methods: {

        }
    }
</script>
<style>
    .vlc-switch-ui {
        display: block;
        width: 35px;
        height: 20px;
        background: #ccc;
        border-radius: 100px;
        cursor: pointer;
        position: relative;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        transition: all .3s ease;
    }
    .vlc-switch-ui.small{
        width: 24px;
        height: 14px;
    }

    .vlc-switch-ui:after {
        content: '';
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 100px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        position: absolute;
        left: 1px;
        top: 1px;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        transition: all .3s ease;
    }
    .vlc-switch-ui.small:after{
        width: 12px;
        height: 12px;
    }

    .vlc-switch-ui:active:after {
        width: 24px;
    }
    .vlc-switch-ui.small:active:after{
        width: 16px;
    }

    .vlc-switch-checkbox:checked ~ label {
        background: #34bf49;
    }

    .vlc-switch-checkbox:checked ~ label:after {
        left: 16px;
    }
    .vlc-switch-checkbox:checked ~ label:active:after {
        left: 10px;
    }

    .vlc-switch-checkbox:checked ~ label.small:after{
        left: 11px;
    }
    .vlc-switch-checkbox:checked ~ label.small:active:after {
        left: 7px;
    }

    .vlc-switch-checkbox:disabled ~ label {
        background: #d5d5d5;
        pointer-events: none;
    }

    .vlc-switch-checkbox:disabled ~ label:after {
        background: #bcbdbc;
    }

    .vlc-switch-checkbox.hidden {
        display: none;
    }
</style>