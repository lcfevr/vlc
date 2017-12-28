/**
 * Created by admin on 2017/3/30.
 */
import  Modal from './confirm'

let modalInstance;

function getModalInstance(){
    console.warn(modalInstance)
    modalInstance = modalInstance || Modal.newInstance({
            showHead:true,
            closable:true,
            maskClosable:false,
            footerHide:false
        });


    return modalInstance
}


function confirm (options) {

    let instance = getModalInstance();

    options.onRemove = function (){
        modalInstance = null;

    }


    instance.show(options)
}


Modal.info = function (props={}){

    props.showCancle = true;
    props.showHead = false;
    return confirm(props)
}

Modal.confirm = function (props={}) {

    props.showCancle = false;
    props.showHead = false;

    return confirm(props)
}

Modal.remove = function(){

    if(!modalInstance){
        return false;
    }

    const instance = getModalInstance();

    instance.remove();
};


export default  Modal;