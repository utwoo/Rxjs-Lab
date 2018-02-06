/** 它很像 find , 但发出的是找到的值的索引， 而不是值本身。 */
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
    .findIndex(p => p.name === 'Bar')
    .subscribe(console.dir);