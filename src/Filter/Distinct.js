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
    },
    {
        age: 8,
        name: 'FooD'
    }
];

console.log('-- Distinct --');
Rx.Observable.of(1, 2, 3, 2, 3, 4, 1, 6, 5, 5, 4, 3, 2, 3, 2, 1)
    .distinct()
    .subscribe(x => console.log(x));

console.log('-- Distinct With Selector --');
Rx.Observable.of(...person)
    .distinct(p => p.name)
    .subscribe(x => console.log(x));

console.log('-- DistinctUntilChange --')
Rx.Observable.of('A', 'B', 'B', 'A', 'B', 'A', 'A')
    .distinctUntilChanged()
    .subscribe(x => console.log(x));

console.log('-- DistinctUntilChange With Compare --')
Rx.Observable.of(...person)
    .distinctUntilChanged((p1, p2) => p1.name === p2.name)
    .subscribe(x => console.log(x));

console.log('-- DistinctKeyUntilChange --')
Rx.Observable.of(...person)
    .distinctUntilKeyChanged('name')
    .subscribe(x => console.log(x));

console.log('-- DistinctKeyUntilChange With Compare --')
Rx.Observable.of(...person)
    .distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3))
    .subscribe(x => console.log(x));
    