/**
 * Created by admin on 2017/4/7.
 */
import Notifaction from './confirm'

let noticeInstance;

let top = '.24rem';
let defaultDuration = 1.5;
let name = 1;


function getNoticeInstance (){
    
    noticeInstance = noticeInstance || Notifaction.newInstance({
            
            styles:{
                top:`${top}`,
                right:0
            },
    })
    
    return noticeInstance;
}

function  notice(type,options) {
    const desc = options.desc || '';
    const noticeKey = options.name || `v_notifaction_${name}`;
    console.warn(noticeKey)
    const onClose = options.onClose || function(){};
    const duration = (options.duration === 0) ? 0 : options.duration || defaultDuration;

    name++;

    let instance = getNoticeInstance();

    let content;

    if (type == 'normal') {
        content = `<div>${desc}</div>`
    }else{
        content = '<div class="notNormal">${desc}</div>'
    }

    instance.notice({
        name: noticeKey.toString(),
        duration: duration,
        styles: {right:'50%'},
        transitionName: 'scale',
        content: content,
        onClose: onClose,
        closable: true,

    })
}



export default {

    open(options) {

        return notice('normal',options)
    },
    destroy() {

        let instance = getNoticeInstance();

        noticeInstance = null;

        instance.destroy()
    },
    close(name) {

        if(name){
            name = name.toString();

            if(noticeInstance){
                noticeInstance.remove(name);
            }
        }else{
            return false;
        }
    }
}