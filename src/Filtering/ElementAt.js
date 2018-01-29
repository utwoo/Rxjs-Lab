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

console.log('-- ElementAt --')
Rx.Observable.of(...person)
    .elementAt(2)
    .subscribe(x => console.log(x));

console.log('-- ElementAt With Default --')
Rx.Observable.of(...person)
    .elementAt(10, {
        age: 0,
        name: 'none'
    })
    .subscribe(
        x => console.log(x),
        error => console.log('Error:', error),
        () => console.log('Complete.')
    );

console.log('-- ElementAt With Default And Throw Error --')
Rx.Observable.of(...person)
    .elementAt(10)
    .subscribe(
        x => console.log(x),
        error => console.log('Error:', error.message),
        () => console.log('Complete.')
    );