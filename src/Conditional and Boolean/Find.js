/** 找到第一个通过测试的值并将其发出。 */
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
    .find(p => p.name === 'Bar')
    .subscribe(console.dir);