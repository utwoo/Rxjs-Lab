/** 就像是 buffer, 但发出的是嵌套的 Observable ，而不是数组。 */
var Rx = require('rxjs/Rx');

var interval = Math.random();
console.log(interval);
Rx.Observable.interval(1000).take(10)
    .window(Rx.Observable.interval(interval * 10000))
    .map((value, index) => value.take(2))
    .mergeAll()
    .subscribe(console.log);