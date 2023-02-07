import observe from "./Observe.js";

export default function (obj, key, val) {
    if (arguments.length === 2) {
        val = obj[key]
    }
    observe(val)

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(key, '属性被访问');
            return val
        },
        set(newVal) {
            observe(newVal)
            console.log(key, '被赋值');
            val = newVal
        }
    })
} 