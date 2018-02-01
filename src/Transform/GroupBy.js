var Rx = require('rxjs/Rx');

const person = [{
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

console.log('-- GroupBy with key --')
Rx.Observable.of(...person)
    .groupBy(p => p.name)
    .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], []))
    .subscribe(p => console.log(p));
/**
 [ { age: 4, name: 'Foo' },
   { age: 7, name: 'Foo' },
   { age: 6, name: 'Foo' } ]
 [ { age: 5, name: 'Bar' } ]
 */

console.log('-- GroupBy with key and element --')
Rx.Observable.of(...person)
    .groupBy(p => p.name, p => { return { name: p.name, age: p.age } })
    .flatMap((group$) => group$.reduce((acc, cur) => [...acc, cur], ["" + group$.key]))
    .map(arr => ({ 'id': arr[0], 'values': arr.slice(1) }))
    .subscribe(console.log);
/**
{ id: 'Foo',
  values:
   [ { name: 'Foo', age: 4 },
     { name: 'Foo', age: 7 },
     { name: 'Foo', age: 6 } ] }
{ id: 'Bar', values: [ { name: 'Bar', age: 5 } ] }
 */