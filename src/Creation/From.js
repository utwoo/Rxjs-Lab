var Rx = require('rxjs/Rx');

console.log('--- Converts an array to an Observable ---');
var array = [10, 20, 30];
var result = Rx.Observable.from(array);
result.subscribe(x => console.log(x));

console.log('--- Convert an infinite iterable (from a generator) to an Observable ---');
function* generateDouble(seed) {
    var i = seed;
    while (true) {
        yield i;
        i = 2 * i;
    }
}

var iterator = generateDouble(3);
var result = Rx.Observable.from(iterator).take(10);
result.subscribe(x => console.log(x));