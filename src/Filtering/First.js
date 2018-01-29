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

console.log('-- First --')
Rx.Observable.of(...person)
    .first(p => p.name === 'Foo')
    .subscribe(p => console.dir(p));

console.log('-- First With Result Selector --')
Rx.Observable.of(...person)
    .first(
        p => p.name === 'Bar',
        (value, index) => {
            return {
                index: index,
                person: value
            }
        })
    .subscribe(p => console.dir(p));

console.log('-- First With Default --')
Rx.Observable.of(...person)
    .first(
        p => p.name === 'Bar1',
        (p, index) => {
            return {
                index: index,
                person: p
            }
        }, {
            index: undefined,
            person: undefined
        }
    )
    .subscribe(p => console.dir(p));