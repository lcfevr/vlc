/**
 * Created by lcfevr on 16/7/18.
 */
import Env from './env';

let config = {
    env: Env,
    PROJECT:'QA',
    VERSION:'1.0',
    doc_title:'天善问答',
    baseUrl:'http://api.studybi.cn/api/',
    isIPad: /ipad/i.test(window.navigator.userAgent),
    isIphone: /iphone|ipad|ipod/i.test(window.navigator.userAgent),
    isWechat: /MicroMessenger/i.test(window.navigator.userAgent),
    isUCBrowser: /UCWEB|UCBrowser/i.test(window.navigator.userAgent)
};
export default config;