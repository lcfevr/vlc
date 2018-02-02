/**
 * Created by admin on 2017/5/10.
 */
import Prompt from './confirm'

let promptInstance;

function getPromptInstance(){

    promptInstance = promptInstance || Prompt.newInstance({

            closable:true,
            maskClosable:false,
            footerHide:false
        })

    return promptInstance;
}

function confirm (options) {

    let instance = getPromptInstance();

    options.onRemove = function () {

        promptInstance = null;
    }
    console.log(options)
    instance.show(options);
}


Prompt.info = function (props = {})  {

    props.showCancle = true;

    return confirm(props);
}


Prompt.remove = function (){
    if(!promptInstance) {
        return false;
    }

    const instance = getPromptInstance();
    instance.remove();
}

export default Prompt