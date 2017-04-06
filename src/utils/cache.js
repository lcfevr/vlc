/**
 * Created by admin on 2017/3/27.
 */
import Config from '../config/config'
var appId, version;
if (Config.env === 'development') {
    appId = Config.PROJECT;
    version = Config.VERSION;
} else {
    appId = Config.PROJECT;
    version = Config.VERSION;
}

const timeMap = {
    y: 31536000000,
    m: 2592000000,
    d: 86400000,
    h: 3600000,
    n: 60000,
    s: 1000
};

export const defaultConfigs = {
    path: '/',
    cross: true
};

export const cookieStorage = {
    setItem: function (key, value, options) {
        var data, opts;
        if (options === undefined) {
            data = JSON.parse(value);
            opts = Object.assign({}, defaultConfigs, data.options);
            delete data.options;
            value = JSON.stringify(data);
        } else {
            data = Object.assign({}, options);
            opts = Object.assign({}, defaultConfigs, options);
        }

        key = encodeURIComponent(String(key))
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/[()]/g, escape);

        value = encodeURIComponent(String(value))
            .replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

        if (typeof data.expire === 'number') {
            if (data.expire === 0) data.expire = Date.now() + timeMap.y * 10;
            opts.expires = new Date(data.expire);
        }

        if (opts.cross) {
            var hostname = window.location.hostname;
            if (!/^((25[0-5]|2[0-4]\d|[01]?\d\d?)($|(?!\.$)\.)){4}$/.test(hostname) && !!~hostname.indexOf('.')) {
                opts.domain = '.' + window.location.hostname.split('.').slice(1).join('.');
            }
        }

        return (document.cookie = [
            key, '=', value,
            opts.expires ? '; expires=' + opts.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            opts.path ? '; path=' + opts.path : '',
            opts.domain ? '; domain=' + opts.domain : '',
            opts.secure ? '; secure' : ''
        ].join(''));
    },
    getItem: function (key) {
        var result = {};
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var decodes = /(%[0-9A-Z]{2})+/g;

        for (let cookie of cookies) {
            var parts = cookie.split('=');
            var name = parts.shift();
            var value = parts.join('=');

            name = name.replace(decodes, decodeURIComponent);
            value = value.replace(decodes, decodeURIComponent);

            if (name === key) {
                result = value;
                return result;
            }

            if (!key) {
                result[name] = value;
            }
        }

        return !key ? result : null;
    },
    removeItem: function (key, options) {
        var opts = Object.assign({
            path: '/',
            expire: -1
        }, options);

        this.setItem(key, '', opts);
    },
    key: function (index) {
        var cookies = document.cookie ? document.cookie.split(/;\s*/) : [];
        if (index < 0 || index >= cookies.length) return '';

        var kvPairs = cookies[index];
        return kvPairs.split('=').shift();
    }
};

Object.defineProperty(cookieStorage, 'length', {
    get() {
        var cookies = document.cookie ? document.cookie.split(/;\s*/) : [];
        return cookies.length;
    }
});

export const set = function (key, value, expire, options) {
    var $key = appId + '_' + key;
    var data = {}, storage = sessionStorage;
    var type = typeof expire;

    if (type !== 'undefined') {
        if (type === 'string') {
            expire = expire.replace(/(\d+)(y|m|d|h|n|s)/, ($0, $1, $2) => {
                return $1 * timeMap[$2];
            });

            expire = Date.now() + Number(expire);
        }

        if (options !== undefined) {
            data.options = options;
            storage = cookieStorage;
        } else {
            storage = localStorage;
        }

        data.expire = expire;
    }

    data.data = value;
    data.version = version;

    storage.setItem($key, JSON.stringify(data));
};

export const get = function (key) {
    var $key = appId + '_' + key;

    var data = cookieStorage.getItem($key) || localStorage.getItem($key) || sessionStorage.getItem($key);

    if (!data) return remove(key);

    try{
        data = JSON.parse(data);

        if (!data.version || data.version !== version) return remove(key);

        if (data.expire && data.expire <= Date.now() ) return remove(key);

        return data.data;
    }catch(e){
        return remove(key);
    }
};

export const remove = function (key, options) {
    var $key = appId + '_' + key;
    localStorage.removeItem($key);
    sessionStorage.removeItem($key);
    cookieStorage.removeItem($key, options);

    return null;
};

export const clear = function () {
    var keys = [];

    for (let i=0, len=localStorage.length; i<len; i++) {
        let key = localStorage.key(i);
        if (key.indexOf(appId) === 0) keys.push({storage: localStorage, key});
    }

    for (let i=0, len=sessionStorage.length; i<len; i++) {
        let key = sessionStorage.key(i);
        if (key.indexOf(appId) === 0) keys.push({storage: sessionStorage, key});
    }

    for (let i=0, len=cookieStorage.length; i<len; i++) {
        let key = cookieStorage.key(i);
        if (key.indexOf(appId) === 0) keys.push({storage: cookieStorage, key});
    }

    keys.forEach(v => v.storage.removeItem(v.key));
};