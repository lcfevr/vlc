/**
 * Created by admin on 2017/5/10.
 */
import Prompt from '../modal/modal.vue'
import Vue from 'vue'

import {camelcaseToHyphen} from '../../utils/util'

const prefixCls = 'v-lc-modal';

Prompt.newInstance = properties => {

    let _props = properties || {};

    let props = '';

    Object.keys(props).forEach(prop => {

        props += ' :' + camelcaseToHyphen(prop) + '=' + prop
    })


    const div = document.createElement('div');

    document.body.appendChild(div);

    const propmt = new Vue({
        el: div,

        template: `<Prompt ${props} v-model="visible" :width="width" >
                        
                        <div class="${prefixCls}-header-inner ellipse-fir" v-html="title" slot="header"></div>
                        <div class="${prefixCls}-body-inner"  slot="body">
                            <div class="vlc-prompt-content">
                                <span class="vlc-prompt-spec">{{spec}}</span>
                                <input v-model="text" type="text" :placeholder="placeholder" />
                                <div class="vlc-prompt-error" v-if="!!message" v-html="message"></div>
                            </div>
                        </div>
                        <template slot="footer">
                               <button class="vlc-prompt-button vlc-prompt-button-sure"  @click="ok">{{okText}}</button>
                                <button class=" vlc-prompt-button vlc-prompt-button-cancle"  @click="cancle">{{cancleText}}</button>
                        </template>


                    </Prompt>`,
        components: {
            Prompt
        },
        data: Object.assign(_props, {
            text:'',
            placeholder: '请输入',
            visible: false,
            width: '220px',
            title: '',
            okText: '确定',
            cancleText: '取消',
            loading: false,
            buttonLoading: false,
            showCancle: true,
            spec: '',
            message: '',
            validator: null,
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
            onOk(){
            },
            onCancle(){
            },
            onRemove(){
            }
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

            if ('placeholder' in props) {
                propmt.$parent.placeholder = props.placeholder
            }

            if ('content' in props) {
                propmt.$parent.body = props.content
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