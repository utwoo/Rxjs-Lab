var Rx = require('rxjs/Rx');

console.log('-- Emit the number 7, then complete. --');
var result = Rx.Observable.empty().startWith(7).subscribe(x => console.log(x));

console.log('-- Map and flatten only odd numbers to the sequence \'a\', \'b\', \'c\' --');
var interval = Rx.Observable.interval(1000);
var result = interval.mergeMap(x =>
    x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
);
result.subscribe(x => console.log(x));