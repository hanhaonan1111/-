import observe from "./observe.js";
import ref from "./ref.js";
import ArrayProto from './utils.js'
export default class Observer {
    constructor(val) {

        if (Array.isArray(val)) {
            //等价于val.prototype=ArrayProto 就是改写原型链
            Object.setPrototypeOf(val, ArrayProto)
            this.arrWalk(val)
        } else {
            this.walk(val)
        }
    }
    arrWalk(val) {
        for (let start = 0, end = val.length; start < end; start++) {
            ref(val, start)
        }
    }
    walk(items) {
        for (const key in items) {
            ref(items, key)
        }
    }
}