<template>
    <div class="com_checkbox">
        <input type="checkbox" id="read_list_set_new" class="cbx hidden">
        <label for="read_list_set_new" class="lbl small"></label>
    </div>
</template>

<script>

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

            }
        },
        methods: {

        }
    }
</script>
<style>
    .lbl {
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
    .lbl.small{
        width: 24px;
        height: 14px;
    }

    .lbl:after {
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
    .lbl.small:after{
        width: 12px;
        height: 12px;
    }

    .lbl:active:after {
        width: 24px;
    }
    .lbl.small:active:after{
        width: 16px;
    }

    .cbx:checked ~ label {
        background: #34bf49;
    }

    .cbx:checked ~ label:after {
        left: 16px;
    }
    .cbx:checked ~ label:active:after {
        left: 10px;
    }

    .cbx:checked ~ label.small:after{
        left: 11px;
    }
    .cbx:checked ~ label.small:active:after {
        left: 7px;
    }

    .cbx:disabled ~ label {
        background: #d5d5d5;
        pointer-events: none;
    }

    .cbx:disabled ~ label:after {
        background: #bcbdbc;
    }

    .cbx.hidden {
        display: none;
    }
</style>