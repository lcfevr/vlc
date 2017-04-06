/**
 * Created by lcfevr on 16/7/18.
 */
import Config from '../config/config'


//深对象复制，无法复制继承属性
export function clone(obj) {
    return Object.assign({}, obj)
}
//深对象复制，可复制继承属性 注：若两个对象中有同名字段，后一个对象的值会覆盖前一个对象
export function extendClone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
}
//多个对象合并到某一个对象
export function merge(target, ...sources) {
    return Object.assign(target, ...sources);
}
export function strLength(str) {
    var oLength = 0;
    for (let ch of str) {
        if (ch.codePointAt(0) > 0xFFF) {
            oLength += 4
        } else {
            oLength += 2
        }
    }
    return oLength;
}
export function getLength(str) {
    return [...str].length;
}

export function getMultiArr(arr, ...newArr) {
    arr.push(...newArr);
    return arr;
}
export function pushArr(arr, newArr) {
    arr.push(...newArr)
    return arr;
}
export function baseImg(imgObj, callback) {
    var reader = new FileReader();
    reader.onload = callback()
    reader.readAsDataURL(imgObj)
}
export function objToArr(obj) {
    var arr = [];
    Object.keys(obj).forEach(function (item) {
        arr.push(obj[item])
    })

    return arr;
}
export function setPageTitle(title) {
    document.title = title;

    if (Config.isIphone && Config.isWechat) {
        var body = document.getElementsByTagName('body')[0];
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', '/favicon.ico');

        iframe.addEventListener('load', function () {
            setTimeout(function () {
                iframe.removeEventListener('load');
                document.body.removeChild(iframe);
            }, 0);
        });
        document.body.appendChild(iframe);
    }

}
export function loadJs(url, callback) {


}

export function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}


