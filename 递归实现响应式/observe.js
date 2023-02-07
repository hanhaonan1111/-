import Observer from "./Observer.js"
import ref from "./ref.js"
export default function (val) {
    // 结束递归终止的条件
    if (val instanceof Object) { new Observer(val) }
    else if (val instanceof Array) { new Observer(val) }

}