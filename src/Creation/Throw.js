var Rx = require('rxjs/Rx');

console.log('-- Emit the number 7, then emit an error. --');
var result = Rx.Observable.throw(new Error('ooops!')).startWith(7);
result.subscribe({
    next: x => { console.log(x) },
    error: error => { console.log("Error:", error); },
    complete: () => console.log("Complete.")
});

console.log('-- Map and flatten numbers to the sequence \'a\', \'b\', \'c\', but throw an error for 13 --');
var interval = Rx.Observable.interval(1000);
var result = interval.mergeMap(x =>
    x === 13 ?
        Rx.Observable.throw('Thirteens are bad') :
        Rx.Observable.of('a')
);
result.subscribe(
    x => console.log(x),
    e => console.error(e)
);