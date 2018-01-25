var Rx = require('rxjs/Rx');

console.log('--- Emits ascending numbers, one every second (1000ms) ---')
var result = Rx.Observable.interval(1000);
result.subscribe(x => console.log(x));