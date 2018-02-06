/** 当源完成的时候，告知总共发送了多少个值。 */
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
    .count(p => p.name === "Foo")
    .subscribe(console.log);