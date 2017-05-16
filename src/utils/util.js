/**
 * Created by lcfevr on 16/7/18.
 */
import Config from '../config/config'

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


export function findComponentUpward (content, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    let parent = content.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

export function findComponentDownward (content, componentName) {
    const childrens = content.$children;
    let children = null;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
            }
        });

        for (let i = 0; i < childrens.length; i++) {
            const child = childrens[i];
            const name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

export function findComponentsDownward (content, componentName, components = []) {
    const childrens = content.$children;

    if (childrens.length) {
        childrens.forEach(child => {
            const name = child.$options.name;
            const childs = child.$children;

            if (name === componentName) components.push(child);
            if (childs.length) {
                const findChilds = findComponentsDownward(child, componentName, components);
                if (findChilds) components.concat(findChilds);
            }
        });
    }
    return components;
}

export function random_str() {
    let len = 32;
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let max = chars.length;

    let str = '';
    for (let i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * max));
    }
    return str;
}