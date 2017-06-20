/**
 * Created by admin on 2017/5/15.
 */

import VButton from './components/button'
import CheckBox from './components/checkBox'

import Header from './components/Header'
import Message from './components/message'
import Modal from './components/modal'
import Picker from './components/picker'
import Radio from './components/radioBox'
import Swipe from './components/swipe'
import Tab from './components/tab'
import Prompt from './components/prompt'
import SlideBar from './components/slideBar'
import TextBar from './components/Text'
import Upload from './components/upload'
import ActionSheet from './components/action-sheet'
import SwitchBar from './components/switchbar'
import Rater from './components/rater'
import Spinner from './components/spinner'
import LoadMore from './components/loadMore'
import Popup from './components/popup'

const vlc = {

    VButton,
    CheckBox,
    CheckBoxGroup:CheckBox.group,
    Radio,
    RadioGroup:Radio.group,
    Header,
    Message,
    Modal,
    Prompt,
    Picker,
    Swipe,
    Tab,
    SlideBar,
    TextBar,
    Number:TextBar.Number,
    Upload,
    ActionSheet,
    SwitchBar,
    Rater,
    Spinner,
    LoadMore,
    Popup

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