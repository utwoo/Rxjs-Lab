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

console.log('-- Single --')
Rx.Observable.of(...person)
    .single(p => p.name === 'Bar')
    .subscribe(x => console.log(x));

console.log('-- Single not found --')
Rx.Observable.of(...person)
    .single(p => p.name === 'Bar1')
    .subscribe(x => console.log(x));

console.log('-- Single found multi --')
Rx.Observable.of(...person)
    .single(p => p.name === 'Foo')
    .subscribe(
        x => console.log(x),
        error => console.log('ERROR:', error),
        () => console.log('Complete')
    );