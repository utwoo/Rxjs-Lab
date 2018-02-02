/**  类似于 map，但仅用于选择每个发出对象的某个嵌套属性。 */
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
    .pluck('main', 'position')
    .subscribe(console.dir);