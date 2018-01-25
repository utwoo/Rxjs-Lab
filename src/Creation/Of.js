var Rx = require('rxjs/Rx');

// Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.
var number = Rx.Observable.of(10, 20, 30);
var letter = Rx.Observable.of('a', 'b', 'c');
var interval = Rx.Observable.interval(1000);
var result = number.concat(letter).concat(interval);
result.subscribe(x => console.log(x));