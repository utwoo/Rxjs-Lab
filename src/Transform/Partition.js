/** 很像 filter，但是返回两个 Observables ： 一个像 filter 的输出， 而另一个是所有不符合条件的值。 */
var Rx = require('rxjs/Rx');

let person = [{
        age: 4,
        name: 'Foo'
    },
    {
        age: 5,
        name: 'Bar'
    },
    {
        age: 7,
        name: 'Foo'
    },
    {
        age: 6,
        name: 'Foo'
    }
];

const parts$ = Rx.Observable.of(...person)
    .partition((p) => p.name === 'Foo');

console.log('-- Foo --');
parts$[0].subscribe(console.dir);
console.log('-- Others --');
parts$[1].subscribe(console.dir);