/**
 * Created by admin on 2017/5/8.
 */

import MessageGroup from './messageGroup.vue'
import Vue from 'vue';
import {camelcaseToHyphen} from '../../utils/util'

MessageGroup.newInstance = function (props) {

    let _props = props || {};

    let _prop = '';
    Object.keys(_props).forEach((prop) => {

        _prop += ' :' + camelcaseToHyphen(prop) + '=' + prop
    });

    let div = document.createElement('div');

    document.body.appendChild(div);

    let message = new Vue({
        el: div,
        data: _props,
        template:`<Message-group ${_prop} ></Message-group>`,
        components: {MessageGroup},
    }).$children[0];


    return {

        add(props){
            message.add(props)
        },
        remove(props) {

            message.remove(props)
        },
        component: message,
        destroy(){
            document.body.removeChild(div)
        }
    }
}

export default  MessageGroup;