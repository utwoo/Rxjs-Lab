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

Rx.Observable.of(...person)
    .last(p => p.name === 'Foo')
    .subscribe(x => console.log(x));