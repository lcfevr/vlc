/**
 * Created by admin on 2017/5/15.
 */

import VButton from './components/button'
import CheckBox from './components/checkBox'
import Editor from './components/editor'
import Header from './components/Header'
import Message from './components/message'
import Modal from './components/modal'
import Picker from './components/picker'
import Radio from './components/radioBox'
import Swipe from './components/swipe'
import Tab from './components/tab'
import Prompt from './components/prompt'
import SlideBar from './components/slideBar'
import PullDown from './components/pullDown'
import TextBar from './components/Text'
import Upload from './components/upload'
import ActionSheet from './components/action-sheet'
import SwitchBar from './components/switchbar'
import Rater from './components/rater'
import Spinner from './components/spinner'

const vlc = {

    VButton,
    CheckBox,
    CheckBoxGroup:CheckBox.group,
    Radio,
    RadioGroup:Radio.group,
    Editor,
    Header,
    Message,
    Modal,
    Prompt,
    Picker,
    Swipe,
    Tab,
    SlideBar,
    PullDown,
    TextBar,
    Number:TextBar.Number,
    Upload,
    ActionSheet,
    SwitchBar,
    Rater,
    Spinner

};


const install = (Vue,options)=>{

    Object.keys(vlc).forEach((key)=>{
        Vue.component(key,vlc[key])
    });


    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Prompt = Prompt;

}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(vlc, {install});