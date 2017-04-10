/**
 * Created by admin on 2017/4/7.
 */

import Notifaction from './notification'
import Vue from 'vue'
import { camelcaseToHyphen } from '../../utils/util'

Notifaction.newInstance = properties => {

    let _props = properties || {}

    let props = '';

    Object.keys(props).forEach( prop =>{

        props += ' :'+camelcaseToHyphen(prop) + '=' + prop
    })

    let div = document.createElement('div');

    div.innerHTML = `<notifaction  ${props}></notifaction>`

    document.body.appendChild(div)

    const noticaction = new Vue({
        data:_props,
        components:{Notifaction},
        el:div
    }).$children[0];

    return {

        notice(noticeProps){
            noticaction.add(noticeProps)
        },

        remove(name){
            noticaction.close(name)
        },

        destroy(){
            document.body.removeChild(div)
        }
    }
}


export  default  Notifaction