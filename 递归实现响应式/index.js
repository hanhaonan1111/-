import Observe from "./observe.js"
let data = {
    person: {
        name: 'hhn',
        age: 14
    },
    a: {
        b: {
            c: {
                d: 'xxxxx'
            }
        }
    },
    h: [1, 2, 3, [9, 8], 5,]
}


new Observe(data)

data.a = { p: { h: { jj: 18 } } }

console.log('---------------------');

data.h[0]
console.log('data', data);

