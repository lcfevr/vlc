/**
 * Created by admin on 2017/3/30.
 */
import Modal from './modal.vue'
import Vue from 'vue'

import { camelcaseToHyphen } from '../../utils/util'

const prefixCls = 'v-lc-modal';

Modal.newInstance = properties =>{

    let _props = properties || {};

    let props = '';

    Object.keys(props).forEach( prop =>{

        props += ' :'+camelcaseToHyphen(prop) + '=' + prop
    })


    const div = document.createElement('div');




    document.body.appendChild(div);

    const modal = new Vue({
        el:div,
        template:`<Modal ${props} v-model="visible" :width="width" >
                        
                        <div class="${prefixCls}-header-inner ellipse-fir" v-html="title" slot="header"></div>
                        <div class="${prefixCls}-body-inner" v-html="body" slot="body"></div>
                        <template slot="footer">
                             <button class="${prefixCls}-button ${prefixCls}-button-sure"  @click="ok">{{okText}}</button>
                             <button class=" ${prefixCls}-button ${prefixCls}-button-cancle" v-if="showCancle" @click="cancle">{{cancleText}}</button>
                        </template>

                    </Modal>`,
        components:{
            Modal
        },
        data:Object.assign(_props,{

            visible:false,
            width:'220px',
            body:'',
            title:'',
            okText:'确定',
            cancleText:'取消',
            loading:false,
            buttonLoading:false,
            showCancle:true
        }),
        methods:{
            cancle(){
                this.$children[0].visible = false;
                this.onCancle();
                this.remove()

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
                setTimeout(()=>{
                    this.destroy();
                },300)
            },
            destroy(){
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove()
            },
            onOk(){},
            onCancle(){},
            onRemove(){}

        },

    }).$children[0];



    return {

        show(props){

            modal.$parent.showCancle = props.showCancle;
            modal.$parent.onRemove = props.onRemove;
            modal.visible = true;

            if ('width' in props) {
                modal.$parent.width = props.width
            }

            if ('title' in props) {
                modal.$parent.title = props.title
            }


            if ('content' in props) {
                modal.$parent.body = props.content
            }


            if ('okText' in props) {
                modal.$parent.okText = props.okText
            }

            if ('cancleText' in props) {
                modal.$parent.cancleText = props.cancleText
            }

            if ('onCancle' in props) {
                modal.$parent.onCancle = props.onCancle
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk
            }

            if ('loading' in props) {
                modal.$parent.loading = props.loading
            }



        },
        remove () {

            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();

        },
        component:modal

    }
    };



export default  Modal
