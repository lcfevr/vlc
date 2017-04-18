/**
 * Created by admin on 2017/4/7.
 */

import notifaction from './notification'
import Vue from 'vue'
import { camelcaseToHyphen } from '../../utils/util'

notifaction.newInstance = properties => {

    let _props = properties || {}

    let props = '';

    Object.keys(_props).forEach( prop =>{

        props += ' :'+camelcaseToHyphen(prop) + '=' + prop
    })




    let div = document.createElement('div');

    div.innerHTML = `<notifaction  ${props}></notifaction>`

    document.body.appendChild(div)

    const noticaction = new Vue({
        data:_props,
        components:{notifaction},
        el:div
    }).$children[0];

    return {

        notice(noticeProps){
            noticaction.add(noticeProps)
        },

        remove(name){
            noticaction.close(name)
        },
        component: notifaction,
        destroy(){
            document.body.removeChild(div)
        }
    }
}


export  default  notifaction