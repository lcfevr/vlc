/**
 * Created by lcfevr on 16/7/18.
 */
export default {

    //深对象复制，无法复制继承属性
    clone(obj){
        return Object.assign({},obj)
    },
    //深对象复制，可复制继承属性 注：若两个对象中有同名字段，后一个对象的值会覆盖前一个对象
    extendClone(origin){
        let originProto=Object.getPrototypeOf(origin);
        return Object.assign(Object.create(originProto),origin);
    },
    //多个对象合并到某一个对象
    merge(target,...sources){
        return Object.assign(target,...sources);
    },




}