/** Observable 发出数字(或可以与提供的函数进行比较的项)并且当源 Observable 完成时它发出单一项：最大值的项 */
var Rx = require('rxjs/Rx');

const person = [{
        age: 4,
        name: 'Foo',
        main: {
            position: 'CTO'
        }
    },
    {
        age: 5,
        name: 'Bar',
        main: {
            position: 'CTO'
        }
    },
    {
        age: 7,
        name: 'Foo',
        main: {
            position: 'CWO'
        }
    },
    {
        age: 6,
        name: 'Foo',
        main: {
            position: 'CFO'
        }
    }
];

Rx.Observable.of(...person)
    .max((p1, p2) => p1.age > p2.age ? 1 : -1)
    .subscribe(console.log);