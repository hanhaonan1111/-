

let arr = Array.prototype
const methods = ['pop', 'shift', 'push', 'unshift', 'splice', 'sort', 'reverse']
const ArrayProto = Object.create(arr)
methods.forEach(v => {
    ArrayProto[v] = function () {
        console.log(this, '改写的方法');
    }
})

export default ArrayProto
