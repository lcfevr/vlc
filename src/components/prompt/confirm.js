/**
 * Created by admin on 2017/5/10.
 */
import Prompt from '../prompt/prompt.vue'
import Vue from 'vue'

import {camelcaseToHyphen} from '../../utils/util'

const prefixCls = 'v-lc-modal';

Prompt.newInstance = properties => {

    let _props = properties || {};

    let props = '';

    Object.keys(_props).forEach(prop => {

        props += ' :' + camelcaseToHyphen(prop) + '=' + prop
    })


    const div = document.createElement('div');

    document.body.appendChild(div);

    const propmt = new Vue({
        el: div,

        template: `<Prompt ${props} v-model="visible" 
                                    :width="width" 
                                    :text="text" 
                                    :title="title" 
                                    :ok-text="okText" 
                                    :cancle-text="cancleText" 
                                    :loading="loading" 
                                    :spec="spec" 
                                    :message="message" 
                                    :validator="validator"
                                    :on-ok="onOk" 
                                    :on-cancle="onCancle"> </Prompt>`,
        components: {
            Prompt
        },
        data: Object.assign(_props, {
            text:'',
            placeholderText: '请输入',
            visible: false,
            width: '70%',
            title: '',
            okText: '确定',
            cancleText: '取消',
            loading: false,
            showCancle: true,
            spec: '',
            message: '',
            validator: null,
            onOk:function(){},
            onCancle:function(prop){},
            onRemove:function(){}
        }),
        methods: {
            cancle(){
                this.$children[0].visible = false;
                this.onCancle();
                this.remove();
            },
            ok(){
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.visible = false;
                    this.remove();
                }

                this.onOk()
            },
            remove(){
                this.$children[0].visible = false;
                setTimeout(() => {
                    this.destroy();
                }, 300)
            },
            destroy(){
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove()
            },
            mounted(){


            },
        }
    }).$children[0]


    return {

        show(props){

            propmt.$parent.showCancle = props.showCancle;
            propmt.$parent.onRemove = props.onRemove;
            propmt.visible = true;

            if ('width' in props) {
                propmt.$parent.width = props.width
            }

            if ('text' in props) {
                propmt.$parent.text = props.text
            }

            if ('spec' in props) {
                propmt.$parent.spec = props.spec
            }

            if ('title' in props) {

                propmt.$parent.title = props.title
            }



            if ('placeholderText' in props) {
                propmt.$parent.placeholderText = props.placeholderText
            }

            if ('content' in props) {
                propmt.$parent.body = props.body
            }


            if ('okText' in props) {
                propmt.$parent.okText = props.okText
            }

            if ('cancleText' in props) {
                propmt.$parent.cancleText = props.cancleText
            }

            if ('onCancle' in props) {
                propmt.$parent.onCancle = props.onCancle
            }

            if ('onOk' in props) {
                propmt.$parent.onOk = props.onOk
            }

            if ('loading' in props) {
                propmt.$parent.loading = props.loading
            }

            if ('message' in props) {
                propmt.$parent.message = props.message
            }

            if ('validator' in props) {
                propmt.$parent.validator = props.validator
            }

            console.log(propmt.$parent)
        },
        remove () {

            propmt.visible = false;
            propmt.$parent.buttonLoading = false;
            propmt.$parent.remove();

        },
        component: propmt
    }
};

export default  Prompt;