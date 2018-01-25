var Rx = require('rxjs/Rx');

console.log('-- Emits the numbers 1 to 10 --');
var result = Rx.Observable.range(1, 10);
result.subscribe(x => console.log(x));