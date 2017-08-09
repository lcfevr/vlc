/**
 * Created by admin on 2017/5/8.
 */

import MessageGroup from './confirm'
import {random_str} from '../../utils/util'
let defualtDuration = 1;
let key = 1;
let top = '0';

let MG_instance;

let seed = 1;

let time = Date.now();

function getName(){
    return 'vlc-message-group_'+time+'_'+(seed++)+'_'+random_str();
}

let getNewInstance = function () {
    MG_instance = MG_instance || MessageGroup.newInstance({

            styles: {
                top: top,
                right: '0'
            }

        })

    return MG_instance;
};

function message(props) {


    let [
        text,
        name,
        duration,
        showLeft,
        rightHide,
        loading,
        onClose,
        styles,
        type,
        position]

        =

     [
        props.text || '',
        props.name || getName(),
        (props.duration == 0) ? 0 : props.duration || defualtDuration,
        props.showLeft || false,
        props.rightHide || true,
        props.loading || false,
        props.onClose || function () {},
        props.styles || {},
        props.type || 'normal',
        props.position || 'center'];

    let instance = getNewInstance();



    instance.add({
        name: name,
        text: text,
        duration: duration,
        showLeft: showLeft,
        rightHide: rightHide,
        loading: loading,
        onClose: onClose,
        styles: styles,
        type: type,
        position:position
    });

    return (function () {
        let target = name;

        return function () {
            instance.remove(`${target}`);
        };
    })();
}


export default {

    show(options){
        return message(options)
    },

    error(options){
        options.type = 'error';
        return message(options)
    },

    success(options){

        options.type = 'success';
        return message(options)
    },
    loading(options){
        options.type = 'loading';
        options.duration = 0;
        options.showLeft = true;
        return message(options)
    },
    config(options){

        if (options.top) {

            top = options.top
        }

        if (options.duration) {

            defualtDuration = options.duration
        }
    },
    destroy(){
        if (!MG_instance) return false;
        MG_instance = getNewInstance();
        MG_instance.destroy()
    }
}



